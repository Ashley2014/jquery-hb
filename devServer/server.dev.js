var express = new require('express');
var app = express();
var gulpConfig = require('../gulp.config');
var port = gulpConfig.port;
var proxy = require('express-http-proxy');
var path = require('path');

var ServerConfig = {
    rootUrl:'/',                       //静态资源入口，如http://www.example.com/h5,这里就写 /h5
    apiDomain:'/',     //接口域名
};

app.all('/fake1',  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');

    var data={"iRet":1,"info":"success","data":{subject:'peter'}};
    setTimeout(()=> {
        if (req.query.callback) {
            res.jsonp(data);
        } else {
            res.json(data);
        }
    },Number(req.query.d)||0)
});

app.all('/fake2',  (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    var data={"iRet":-1,"info":"Access denied"};
    setTimeout(()=> {
        if (req.query.callback) {
            res.jsonp(data);
        } else {
            res.json(data);
        }
    },Number(req.query.d)||0)
});

app.use('/api', proxy(ServerConfig.apiDomain));
// app.use('/', proxy(ServerConfig.apiDomain));

// app.use(`${ServerConfig.rootUrl}`, express.static(path.join(__dirname,   '../dist')));
//
// app.get(`${ServerConfig.rootUrl}*`, function(req, res) {
//     res.sendFile(path.join(__dirname, '../dist/index.html'))
// });
//

// app.use('/test', express.static(path.join(__dirname, '../test')));
// app.use('/tmp', express.static(path.join(__dirname,  '../tmp')));


// app.use('/js', express.static(path.join(__dirname,   '../dist/js')));
// app.use('/css', express.static(path.join(__dirname,   '../dist/css')));
// app.use('/views', express.static(path.join(__dirname,   '../dist/views')));
// app.use('/images', express.static(path.join(__dirname,   '../dist/images')));






// app.use('/*', proxy('live.halobear.cn',{
//     forwardPath: function(req, res) {
//         return req.baseUrl;
//     }
// }));

// app.use('/hadmin/works', proxy('live.halobear.cn',{
//     forwardPath: function(req, res) {
//         return req.baseUrl;
//     }
// }));
// app.use('/publics/login', proxy('wed-dashboard-api.weddingee.com',{
//     forwardPath: function(req, res) {
//         // res.setHeader('access-control-allow-headers', '*');
//         return req.baseUrl;
//     }
// }));

// app.use(/\/(.+)/, proxy('live.halobear.cn',{
//     forwardPath: function(req, res) {
//         return req.baseUrl;
//     }
// }));


// app.use(/\/(.+)/, proxy('wed-dashboard-api.weddingee.com',{
//     forwardPath: function(req, res) {
//         // return `${req.baseUrl}`;
//         return `${req.originalUrl}`;
//     }
// }));




app.use('/', express.static(path.join(__dirname,   '../dist')))

app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});