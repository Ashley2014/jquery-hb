/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 hb.agent

 */

var agent = {};

var device = function device() {
    var u = window.navigator.userAgent,
        app = window.navigator.appVersion;
    switch (true) {
        case u.indexOf('Android') > -1 || u.indexOf('Linux') > -1:
            return "android";
            break;
        case u.indexOf('iPhone') > -1:
            return "iPhone";
            break;
        case u.indexOf('iPad') > -1:
            return "iPad";
            break;
        default:
            return "unknown-device";
    }
};
var isMobile = function isMobile() {
    var u = window.navigator.userAgent;
    //console.log(u);
    if (u.match(/Android|iPhone|iPad|iPod|IEMobile|BlackBerry/i)) {
        return true;
    } else {
        return false;
    }
};
var os = function os() {
    var u = window.navigator.userAgent;

    switch (true) {
        case !!u.match(/Android/i):
            return "android";
            break;
        case !!u.match(/iPhone|iPad|iPod/i):
            return "ios";
            break;
        default:
            return "unknown-os";
    }
};

var browser = function browser() {
    var u = window.navigator.userAgent,
        app = window.navigator.appVersion;
    switch (true) {
        case u.indexOf('MicroMessenger') > -1:
            return "weixin";
            break;
        default:
            return "unknown-browser";
    }
};

agent.device = device;
agent.isMobile = isMobile;
agent.browser = browser;
agent.os = os;

exports.default = agent;
//module.exports= agent;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var browser = {
    device: device,
    isMobile: isMobile
};

/*
 hb.browser
 */
function device() {
    var u = window.navigator.userAgent,
        app = $window.navigator.appVersion;
    switch (true) {
        case u.indexOf('Android') > -1 || u.indexOf('Linux') > -1:
            return "android";
            break;
        case u.indexOf('iPhone') > -1:
            return "iPhone";
            break;
        case u.indexOf('iPad') > -1:
            return "iPad";
            break;
        default:
            return "unknown-device";
    }
};

function isMobile() {
    var u = window.navigator.userAgent;
    //console.log(u);
    if (u.match(/Android|iPhone|iPad|iPod|IEMobile|BlackBerry/i)) {
        return true;
    } else {
        return false;
    }
};

exports.default = browser;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/*
 *
 * 16进制色值转rgb
 */
var color;
function hexToRgb(hex, isString) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!isString) {
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    } else {
        return result ? "rgb(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + ")" : null;
    }
}
color = {
    hexToRgb: hexToRgb
};
exports.default = color;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/*
 *
 * ios动态修改标题
 */
var hack;

function setTitle(t) {
    document.title = t;
    var i = document.createElement('iframe');
    i.src = '//m.baidu.com/favicon.ico';
    //        i.src = 'about:blank';
    i.style.display = 'none';
    document.body.appendChild(i);
    i.onload = function () {
        setTimeout(function () {
            //                i.contentWindow.location.reload()
            i.remove();
        }, 0);
    };
}

hack = {
    setTitle: setTitle
};

exports.default = hack;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function interval(fun, delay, count, afterCount) {

    if (count) {
        var refreshIntervalId = setInterval(intervalFunWithCount, delay);
    } else {
        var refreshIntervalId = setInterval(intervalFun, delay);
    }

    var _clear = function _clear() {
        clearInterval(refreshIntervalId);
    };

    function intervalFun() {
        count--;
        fun();
    }

    function intervalFunWithCount() {
        intervalFun();
        if (count <= 0) {
            _clear();
            afterCount();
        }
    }

    return _clear;
}

exports.default = interval;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(16);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;(function (window) {

    var svgSprite = '<svg>' + '' + '<symbol id="icon-success" viewBox="0 0 1024 1024">' + '' + '<path d="M83.2 550.4l89.6-70.4L384 684.8c0 0 275.2-339.2 556.8-531.2l25.6 64c-134.4 96-384 390.4-512 684.8L83.2 550.4z"  ></path>' + '' + '</symbol>' + '' + '</svg>';
    var script = function () {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    }();
    var shouldInjectCss = script.getAttribute("data-injectcss");

    /**
     * document ready
     */
    var ready = function ready(fn) {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function myFun() {
                document.removeEventListener("DOMContentLoaded", myFun, false);
                fn();
            }, false);
        }
    };

    /**
     * Insert el before target
     *
     * @param {Element} el
     * @param {Element} target
     */

    var before = function before(el, target) {
        target.parentNode.insertBefore(el, target);
    };

    /**
     * Prepend el to target
     *
     * @param {Element} el
     * @param {Element} target
     */

    var prepend = function prepend(el, target) {
        if (target.firstChild) {
            before(el, target.firstChild);
        } else {
            target.appendChild(el);
        }
    };

    function appendSvg() {
        var div, svg;

        div = document.createElement('div');
        div.innerHTML = svgSprite;
        svg = div.getElementsByTagName('svg')[0];
        if (svg) {
            svg.setAttribute('aria-hidden', 'true');
            svg.style.position = 'absolute';
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = 'hidden';
            prepend(svg, document.body);
        }
    }

    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        } catch (e) {
            console && console.log(e);
        }
    }

    ready(appendSvg);
})(window);

//confirm('aaa')


var iui = function () {
    var _alert = function _alert(options) {
        var deferred = $.Deferred();
        var defaults = {
            title: '提示',
            content: '提示内容',
            btn: '确定'
        };

        if (typeof options == "string") {
            defaults = $.extend(defaults, {
                content: options
            });
        } else {}

        var settings = $.extend({}, defaults, options);

        var alertHtmlStr = '\n    <div id="iui-pop-alert" class="' + _style2.default['mui-popup'] + ' " >\n    <div class="' + _style2.default['mui-popup-inner'] + '">\n    <div class="' + _style2.default['mui-popup-title'] + '">' + settings.title + '</div>\n    <div class="' + _style2.default['mui-popup-text'] + '">' + settings.content + '</div></div>\n    <div class="' + _style2.default['mui-popup-buttons'] + '">\n    <span class="' + _style2.default['mui-popup-button'] + ' ' + _style2.default['mui-popup-button-bold'] + '">' + settings.btn + '</span>\n    </div>\n    </div>\n    <div class=" ' + _style2.default['mui-popup-backdrop'] + '  ' + _style2.default['mui-active'] + '" ></div>\n        ';
        var $alertHtml = $(alertHtmlStr);
        $("body").append($alertHtml);
        //setTimeout(function(){
        $("#iui-pop-alert").show(0).addClass(_style2.default['mui-popup-in']);
        //});
        //$alertHtml.find(`.${styles['mui-popup-button']}`).fadeIn(200);
        var $confirmBt = $alertHtml.find('.' + _style2.default['mui-popup-button']);
        $confirmBt.on('click', function () {
            $alertHtml.remove();
            deferred.resolve(true);
        });
        return deferred.promise();
    };

    var _confirm = function _confirm(options) {
        var deferred = $.Deferred();
        var defaults = {
            title: '提示',
            content: '提示内容',
            rightBtn: '确定',
            leftBtn: '取消'
        };

        if (typeof options == "string") {
            defaults = $.extend(defaults, {
                content: options
            });
        } else {}

        var settings = $.extend({}, defaults, options);
        var confirmHtmlStr = '\n    <div id="iui-pop-alert" class="' + _style2.default['mui-popup'] + ' " >\n    <div class="' + _style2.default['mui-popup-inner'] + '">\n    <div class="' + _style2.default['mui-popup-title'] + '">' + settings.title + '</div>\n    <div class="' + _style2.default['mui-popup-text'] + '">' + settings.content + '</div></div>\n   <div class="' + _style2.default['mui-popup-buttons'] + '">\n   <span id="iui-pop-confirm-left" class="' + _style2.default['mui-popup-button'] + '">' + settings.leftBtn + '</span><span id="iui-pop-confirm-right" class="' + _style2.default['mui-popup-button'] + ' ' + _style2.default['mui-popup-button-bold'] + '">' + settings.rightBtn + '</span>\n   </div>\n    </div>\n    <div class=" ' + _style2.default['mui-popup-backdrop'] + '  ' + _style2.default['mui-active'] + '" ></div>\n                ';

        var $confirmHtml = $(confirmHtmlStr);
        $("body").append($confirmHtml);
        $("#iui-pop-alert").show(0).addClass(_style2.default['mui-popup-in']);
        //$confirmHtml.find(".weui-dialog").fadeIn(200);
        var $confirmBt = $confirmHtml.find("#iui-pop-confirm-right");
        $confirmBt.on('click', function () {
            $confirmHtml.remove();
            deferred.resolve(true);
        });
        var $cancelBt = $confirmHtml.find("#iui-pop-confirm-left");
        $cancelBt.on('click', function () {
            $confirmHtml.remove();
            deferred.reject(false);
        });
        return deferred.promise();
    };

    var loading = function () {
        var loadingHtmlStr = '<div  >\n<div class="' + _style2.default['weui-mask_transparent'] + '"></div>\n<div class="' + _style2.default['weui-toast'] + '">\n    <i class="' + _style2.default['weui-loading'] + ' ' + _style2.default['weui-icon_toast'] + '"></i>\n    <p class="' + _style2.default['weui-toast__content'] + '">\u6570\u636E\u52A0\u8F7D\u4E2D</p>\n</div>\n</div>';
        var $loadingHtml = $(loadingHtmlStr);
        var show = function show() {
            $("body").append($loadingHtml);
        };
        var hide = function hide() {
            $loadingHtml.remove();
        };

        return {
            show: show,
            hide: hide
        };
    }();

    var toast = function toast(msg) {
        var toastHtmlStr = '<div >\n<div class="' + _style2.default['weui-mask_transparent'] + '"></div>\n<div class="' + _style2.default['weui-toast'] + '">\n    <svg class="' + _style2.default['icon'] + '" aria-hidden="true" style="font-size: 80px;">\n      <use xlink:href="#icon-success"></use>\n    </svg>\n    <p class="' + _style2.default['weui-toast__content'] + '">' + msg + '</p>\n</div>\n</div>';
        var $toastHtml = $(toastHtmlStr);
        $("body").append($toastHtml);
        var $weui_toast = $toastHtml.find(".weui-toast");
        $weui_toast.fadeIn(200);
        var hideToast = function hideToast() {
            $toastHtml.fadeOut(400).remove();
        };
        setTimeout(hideToast, 600);
    };

    return {
        alert: _alert,
        confirm: _confirm,
        loading: loading,
        toast: toast
    };
}();

function extend() {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
    }

    // Merge the object into the extended object
    var merge = function merge(obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // If deep merge and property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = extend(true, extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
    }
    return extended;
}

exports.default = iui;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _hb = __webpack_require__(0);

var _hb2 = _interopRequireDefault(_hb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Administrator on 2016/8/25.
 */
var haloBear = {};

haloBear.agent = _hb2.default;
var weui = function () {
    var _alert = function _alert(options) {
        var deferred = $.Deferred();
        var defaults = {
            title: '提示',
            content: '提示内容',
            btn: '确定'
        };

        if (typeof options == "string") {
            defaults = $.extend(defaults, {
                content: options
            });
        } else {}

        var settings = $.extend({}, defaults, options);

        var alertHtmlStr = '' + '<div class="weui-dialog__alert" >' + '<div class="weui-mask"></div>' + '<div class="weui-dialog" style="display: none;" >' + '<div class="weui-dialog__hd"><strong class="weui-dialog__title">' + settings.title + '</strong></div>' + '<div class="weui-dialog__bd">' + settings.content + '</div>' + '<div class="weui-dialog__ft">' + '<a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">' + settings.btn + '</a>' + '</div>' + ' </div>' + ' </div>' + '';
        var $alertHtml = $(alertHtmlStr);
        $("body").append($alertHtml);
        $alertHtml.find(".weui-dialog").fadeIn(200);
        var $confirmBt = $alertHtml.find(".weui-dialog__btn");
        $confirmBt.on('click', function () {
            $alertHtml.remove();
            deferred.resolve(true);
        });
        return deferred.promise();
    };

    var _confirm = function _confirm(options) {
        var deferred = $.Deferred();
        var defaults = {
            title: '提示',
            content: '提示内容',
            rightBtn: '确定',
            leftBtn: '取消'
        };

        if (typeof options == "string") {
            defaults = $.extend(defaults, {
                content: options
            });
        } else {}

        var settings = $.extend({}, defaults, options);
        var confirmHtmlStr = '\n                    <div class="weui-dialog__confirm">\n                    <div class="weui-mask"></div>\n                    <div class="weui-dialog">\n                    <div class="weui-dialog__hd"><strong class="weui-dialog__title">' + settings.title + '</strong></div>\n                    <div class="weui-dialog__bd">' + settings.content + '</div>\n                    <div class="weui-dialog__ft">\n                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">' + settings.leftBtn + '</a>\n                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">' + settings.rightBtn + '</a>\n                    </div>\n                    </div>\n                    </div>\n                    ';

        var $confirmHtml = $(confirmHtmlStr);
        $("body").append($confirmHtml);
        $confirmHtml.find(".weui-dialog").fadeIn(200);
        var $confirmBt = $confirmHtml.find(".weui-dialog__btn.weui-dialog__btn_primary");
        $confirmBt.on('click', function () {
            $confirmHtml.remove();
            deferred.resolve(true);
        });
        var $cancelBt = $confirmHtml.find(".weui-dialog__btn.weui-dialog__btn_default");
        $cancelBt.on('click', function () {
            $confirmHtml.remove();
            deferred.reject(false);
        });
        return deferred.promise();
    };

    var loading = function () {
        var loadingHtmlStr = '<div  >\n    <div class="weui-mask_transparent"></div>\n    <div class="weui-toast">\n        <i class="weui-loading weui-icon_toast"></i>\n        <p class="weui-toast__content">\u6570\u636E\u52A0\u8F7D\u4E2D</p>\n    </div>\n</div>';
        var $loadingHtml = $(loadingHtmlStr);
        var show = function show() {
            $("body").append($loadingHtml);
        };
        var hide = function hide() {
            $loadingHtml.remove();
        };

        return {
            show: show,
            hide: hide
        };
    }();

    var guideDownload, guideShare;
    (function () {
        var guide = function guide(url) {
            var imgUrl = url;
            var loadingHtmlStr = '\n                    <div style="position: fixed;z-index: 99999;width: 100%;height: 100%;top: 0;left: 0;background: rgba(0,0,0,0.8);">\n                        <img style=\'position: absolute;width: 138px;top: 5px;right: 20px;\' src="' + imgUrl + '">\n                    </div>\n                ';
            var $loadingHtml = $(loadingHtmlStr);

            var show = function show() {
                $("body").append($loadingHtml);
                $loadingHtml.on('click touchmove', function () {
                    $loadingHtml.remove();
                });
            };

            var hide = function hide() {
                $loadingHtml.remove();
            };

            return {
                show: show,
                hide: hide
            };
        };

        guideShare = function () {
            var _guide;
            return {
                show: function show() {
                    _guide ? _guide.show() : _guide = guide('http://7jptwn.com2.z0.glb.qiniucdn.com/weixin-guide-share.png').show();
                },
                hide: function hide() {
                    _guide ? _guide.hide() : _guide = guide('http://7jptwn.com2.z0.glb.qiniucdn.com/weixin-guide-share.png').hide();
                }
            };
        }();

        guideDownload = function () {
            var _guide;
            var os = haloBear.agent.os();
            if (os == 'ios') {
                var imgUrl = 'http://7jptwn.com2.z0.glb.qiniucdn.com/weixin-guide-download-ios.png';
            } else {
                var imgUrl = 'http://7jptwn.com2.z0.glb.qiniucdn.com/weixin-guide-download-android.png';
            }
            return {
                show: function show() {
                    _guide ? _guide.show() : _guide = guide(imgUrl).show();
                },
                hide: function hide() {
                    _guide ? _guide.show() : _guide = guide(imgUrl).hide();
                }
            };
        }();
    })();

    var toast = function toast(msg) {
        var toastHtmlStr = '<div >\n    <div class="weui-mask_transparent"></div>\n    <div class="weui-toast">\n        <i class="weui-icon-success-no-circle weui-icon_toast"></i>\n        <p class="weui-toast__content">' + msg + '</p>\n    </div>\n</div>';
        var $toastHtml = $(toastHtmlStr);
        $("body").append($toastHtml);
        var $weui_toast = $toastHtml.find(".weui-toast");
        $weui_toast.fadeIn(200);
        var hideToast = function hideToast() {
            $toastHtml.fadeOut(400).remove();
        };
        setTimeout(hideToast, 600);
    };

    return {
        alert: _alert,
        confirm: _confirm,
        loading: loading,
        toast: toast,
        guideShare: guideShare,
        guideDownload: guideDownload
    };
}();

exports.default = weui;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 hb.location.hash.get()
 */

var hash = function () {

    var fromHash = function fromHash() {
        var params = window.location.hash ? window.location.hash.substr(1).split("&") : [],
            paramsObject = {};

        for (var i = 0; i < params.length; i++) {
            var a = params[i].split("=");
            paramsObject[a[0]] = decodeURIComponent(a[1]);
        }
        //console.log(paramsObject)
        return paramsObject;
    };

    var toHash = function toHash(params) {
        if (typeof params == 'undefined') {
            window.location.hash = '';
        } else if (typeof params == 'string') {
            window.location.hash = params;
        } else {
            var str = [];
            for (var p in params) {
                str.push(p + "=" + encodeURIComponent(params[p]));
            }
            window.location.hash = str.join("&");
        }
    };

    return {
        get: function get(param) {
            if (param == 'hash') {
                return window.location.hash;
            } else {
                var params = fromHash();
                if (param) {
                    return params[param];
                } else {
                    return params;
                }
            }
        },
        set: function set(param) {
            toHash(param);
        },
        add: function add(newParams, removeParams) {
            var removeParams = removeParams || [];
            removeParams = [].concat(removeParams);
            var params = fromHash();
            var paramsAfterRemove = {};
            removeParams.forEach(function (n, i) {
                for (var p in params) {
                    if (n != p) {
                        paramsAfterRemove[p] = params[p];
                    }
                }
            });

            for (var p in newParams) {
                //params[p] = newParams[p];
                paramsAfterRemove[p] = newParams[p];
            }
            //toHash(params);
            //console.log(paramsAfterRemove);
            toHash(paramsAfterRemove);
        },
        remove: function remove(removeParams) {
            removeParams = typeof removeParams == 'string' ? [removeParams] : removeParams;
            var params = fromHash();
            for (var i = 0; i < removeParams.length; i++) {
                delete params[removeParams[i]];
            }
            toHash(params);
        },
        clear: function clear() {
            toHash({});
        }
    };
}();

exports.default = hash;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 *
 * util
 */

var util = {};
var Spinner = __webpack_require__(14);
/*
 *
 * 反序列化数据
 * a=1&b=2  =》 {a:1,b:2}
 *
 *
 */
(function (window, document, undefined) {
    "use strict";

    var QueryStringToHash = function QueryStringToHash(query) {
        if (!query) {
            return {};
        }
        var query_string = {};
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            pair[0] = decodeURIComponent(pair[0]);
            pair[1] = decodeURIComponent(pair[1]);
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = pair[1];
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], pair[1]];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(pair[1]);
            }
        }
        return query_string;
    };

    util.deParam = QueryStringToHash;
})(window, document);

/*
 *
 * 隐藏虚拟键盘
 */
(function (window, document, undefined) {
    "use strict";

    var hideKeyboard = function hideKeyboard() {
        document.activeElement.blur();
        $("input").blur();
    };
    util.hideKeyboard = hideKeyboard;
})(window, document);
/*
 *
 * 数字加逗号
 */
(function (window, document, undefined) {
    "use strict";
    /*
     *
     * 数字加逗号
       */

    var formatNumber = function formatNumber(n) {
        var numberWithCommas, wanN;
        if (!n) {
            return 0;
        }
        if (n > 9999) {
            wanN = n / 10000;
        }

        numberWithCommas = function numberWithCommas(x) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            parts[1] && (parts[1] = parts[1].substr(0, 1));
            return parts.join(".");
        };

        //if(n>9999){
        //    //console.log(numberWithCommas(wanN),'万');
        //
        //
        //    return numberWithCommas(wanN)+'万';
        //}

        return numberWithCommas(n);
    };
    util.formatNumber = formatNumber;
})(window, document);
/*
 *
 * 数字前补0
 */
(function (window, document, undefined) {
    "use strict";
    /*
     *
     *
     */

    function pad(str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }
    util.pad = pad;
})(window, document);

/*
 *
 * 全角算2个字符
 */
(function (window, document, undefined) {
    "use strict";
    /*
     *
     *
     */

    function len(str, max) {
        var char = str.replace(/[^\u0000-\u00FF]/g, '**');
        return char.length;
    }

    util.len = len;
})(window, document);

(function (window, document, undefined) {
    "use strict";
    /*
     *
     *getRandomInt(0, 9)
     */

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    util.getRandomInt = getRandomInt;
})(window, document);

/*
 hb.util.loading
 require spin.js
 */
(function (window, document, undefined) {
    "use strict";

    var loading = function () {
        var loadingHtmlStr = "\n            <div style=\"position: fixed;z-index: 9999999;width: 100%;height: 100%;left: 0;top: 0;background: rgba(0,0,0,0.2);\"></div>\n            ";
        var $loadingHtml = $(loadingHtmlStr);

        var target = $loadingHtml.get()[0];
        var spinner = new Spinner().spin(target);

        //console.log(spinner);

        var show = function show() {
            //console.log('er',$loadingHtml,$("body"))
            $("body").append($loadingHtml);
        };
        var hide = function hide() {
            $loadingHtml.remove();
        };

        return {
            show: show,
            hide: hide
        };
    }();
    util.loading = loading;
})(window, document);

exports.default = util;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*
 validation

 */
var validation = {
    checkPhone: checkPhone,
    checkFullShape: checkFullShape,
    isEmpty: isEmpty
};

/*
 hb.location.validation.checkPhone(string)
 return boolean
 */

function checkPhone(num) {
    //表示以1开头，第二位可能是3/4/5/7/8等的任意一个，在加上后面的\d表示数字[0-9]的9位，总共加起来11位结束。
    if (!/^1[3|4|5|7|8]\d{9}$/.test(num)) {
        return false;
    } else {
        return true;
    }
};

function checkFullShape(str) {
    //检查是否全角
    var reg = /[^\u0000-\u00FF]/;
    return reg.test(str);
};

function isEmpty(str) {
    if (/^\s*$/.test(str)) {
        return true;
    } else {
        return false;
    }
};

exports.default = validation;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.1.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '',
					attributes.domain ? '; domain=' + attributes.domain : '',
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.store = factory();
  }
}(this, function () {
	
	// Store.js
	var store = {},
		win = (typeof window != 'undefined' ? window : global),
		doc = win.document,
		localStorageName = 'localStorage',
		scriptTag = 'script',
		storage

	store.disabled = false
	store.version = '1.3.20'
	store.set = function(key, value) {}
	store.get = function(key, defaultVal) {}
	store.has = function(key) { return store.get(key) !== undefined }
	store.remove = function(key) {}
	store.clear = function() {}
	store.transact = function(key, defaultVal, transactionFn) {
		if (transactionFn == null) {
			transactionFn = defaultVal
			defaultVal = null
		}
		if (defaultVal == null) {
			defaultVal = {}
		}
		var val = store.get(key, defaultVal)
		transactionFn(val)
		store.set(key, val)
	}
	store.getAll = function() {}
	store.forEach = function() {}

	store.serialize = function(value) {
		return JSON.stringify(value)
	}
	store.deserialize = function(value) {
		if (typeof value != 'string') { return undefined }
		try { return JSON.parse(value) }
		catch(e) { return value || undefined }
	}

	// Functions to encapsulate questionable FireFox 3.6.13 behavior
	// when about.config::dom.storage.enabled === false
	// See https://github.com/marcuswestin/store.js/issues#issue/13
	function isLocalStorageNameSupported() {
		try { return (localStorageName in win && win[localStorageName]) }
		catch(err) { return false }
	}

	if (isLocalStorageNameSupported()) {
		storage = win[localStorageName]
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key) }
			storage.setItem(key, store.serialize(val))
			return val
		}
		store.get = function(key, defaultVal) {
			var val = store.deserialize(storage.getItem(key))
			return (val === undefined ? defaultVal : val)
		}
		store.remove = function(key) { storage.removeItem(key) }
		store.clear = function() { storage.clear() }
		store.getAll = function() {
			var ret = {}
			store.forEach(function(key, val) {
				ret[key] = val
			})
			return ret
		}
		store.forEach = function(callback) {
			for (var i=0; i<storage.length; i++) {
				var key = storage.key(i)
				callback(key, store.get(key))
			}
		}
	} else if (doc && doc.documentElement.addBehavior) {
		var storageOwner,
			storageContainer
		// Since #userData storage applies only to specific paths, we need to
		// somehow link our data to a specific path.  We choose /favicon.ico
		// as a pretty safe option, since all browsers already make a request to
		// this URL anyway and being a 404 will not hurt us here.  We wrap an
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
		// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
		// since the iframe access rules appear to allow direct access and
		// manipulation of the document element, even for a 404 page.  This
		// document can be used instead of the current document (which would
		// have been limited to the current path) to perform #userData storage.
		try {
			storageContainer = new ActiveXObject('htmlfile')
			storageContainer.open()
			storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
			storageContainer.close()
			storageOwner = storageContainer.w.frames[0].document
			storage = storageOwner.createElement('div')
		} catch(e) {
			// somehow ActiveXObject instantiation failed (perhaps some special
			// security settings or otherwse), fall back to per-path storage
			storage = doc.createElement('div')
			storageOwner = doc.body
		}
		var withIEStorage = function(storeFunction) {
			return function() {
				var args = Array.prototype.slice.call(arguments, 0)
				args.unshift(storage)
				// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
				// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
				storageOwner.appendChild(storage)
				storage.addBehavior('#default#userData')
				storage.load(localStorageName)
				var result = storeFunction.apply(store, args)
				storageOwner.removeChild(storage)
				return result
			}
		}

		// In IE7, keys cannot start with a digit or contain certain chars.
		// See https://github.com/marcuswestin/store.js/issues/40
		// See https://github.com/marcuswestin/store.js/issues/83
		var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
		var ieKeyFix = function(key) {
			return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')
		}
		store.set = withIEStorage(function(storage, key, val) {
			key = ieKeyFix(key)
			if (val === undefined) { return store.remove(key) }
			storage.setAttribute(key, store.serialize(val))
			storage.save(localStorageName)
			return val
		})
		store.get = withIEStorage(function(storage, key, defaultVal) {
			key = ieKeyFix(key)
			var val = store.deserialize(storage.getAttribute(key))
			return (val === undefined ? defaultVal : val)
		})
		store.remove = withIEStorage(function(storage, key) {
			key = ieKeyFix(key)
			storage.removeAttribute(key)
			storage.save(localStorageName)
		})
		store.clear = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes
			storage.load(localStorageName)
			for (var i=attributes.length-1; i>=0; i--) {
				storage.removeAttribute(attributes[i].name)
			}
			storage.save(localStorageName)
		})
		store.getAll = function(storage) {
			var ret = {}
			store.forEach(function(key, val) {
				ret[key] = val
			})
			return ret
		}
		store.forEach = withIEStorage(function(storage, callback) {
			var attributes = storage.XMLDocument.documentElement.attributes
			for (var i=0, attr; attr=attributes[i]; ++i) {
				callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
			}
		})
	}

	try {
		var testKey = '__storejs__'
		store.set(testKey, testKey)
		if (store.get(testKey) != testKey) { store.disabled = true }
		store.remove(testKey)
	} catch(e) {
		store.disabled = true
	}
	store.enabled = !store.disabled
	
	return store
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".mui-popup-backdrop {\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-transition-duration: 400ms;\n  -moz-transition-duration: 400ms;\n    -o-transition-duration: 400ms;\n       transition-duration: 400ms;\n  opacity: 0;\n  background: rgba(0, 0, 0, 0.4); }\n\n.mui-popup-backdrop.mui-active {\n  opacity: 1; }\n\n.mui-popup {\n  position: fixed;\n  z-index: 10000;\n  top: 50%;\n  left: 50%;\n  display: none;\n  overflow: hidden;\n  width: 270px;\n  -webkit-transition-property: -webkit-transform,opacity;\n  -webkit-transition-property: opacity,-webkit-transform;\n  transition-property: opacity,-webkit-transform;\n  -o-transition-property: opacity,-o-transform;\n  -moz-transition-property: transform,opacity,-moz-transform;\n  transition-property: transform,opacity;\n  transition-property: transform,opacity,-webkit-transform,-moz-transform,-o-transform;\n  -webkit-transform: translate3d(-50%, -50%, 0) scale(1.185);\n  -moz-transform: translate3d(-50%, -50%, 0) scale(1.185);\n       transform: translate3d(-50%, -50%, 0) scale(1.185);\n  text-align: center;\n  opacity: 0;\n  color: #000;\n  -webkit-border-radius: 13px;\n     -moz-border-radius: 13px;\n          border-radius: 13px; }\n\n.mui-popup.mui-popup-in {\n  display: block;\n  -webkit-transition-duration: 400ms;\n  -moz-transition-duration: 400ms;\n    -o-transition-duration: 400ms;\n       transition-duration: 400ms;\n  -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\n  -moz-transform: translate3d(-50%, -50%, 0) scale(1);\n       transform: translate3d(-50%, -50%, 0) scale(1);\n  opacity: 1; }\n\n.mui-popup.mui-popup-out {\n  -webkit-transition-duration: 400ms;\n  -moz-transition-duration: 400ms;\n    -o-transition-duration: 400ms;\n       transition-duration: 400ms;\n  -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\n  -moz-transform: translate3d(-50%, -50%, 0) scale(1);\n       transform: translate3d(-50%, -50%, 0) scale(1);\n  opacity: 0; }\n\n.mui-popup-inner {\n  position: relative;\n  padding: 15px;\n  -webkit-border-radius: 13px 13px 0 0;\n     -moz-border-radius: 13px 13px 0 0;\n          border-radius: 13px 13px 0 0;\n  background: rgba(255, 255, 255, 0.95); }\n\n.mui-popup-inner:after {\n  position: absolute;\n  z-index: 15;\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 1px;\n  content: '';\n  -webkit-transform: scaleY(0.5);\n  -moz-transform: scaleY(0.5);\n   -ms-transform: scaleY(0.5);\n    -o-transform: scaleY(0.5);\n       transform: scaleY(0.5);\n  -webkit-transform-origin: 50% 100%;\n  -moz-transform-origin: 50% 100%;\n   -ms-transform-origin: 50% 100%;\n    -o-transform-origin: 50% 100%;\n       transform-origin: 50% 100%;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.mui-popup-title {\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center; }\n\n.mui-popup-title + .mui-popup-text {\n  font-family: inherit;\n  font-size: 14px;\n  margin: 5px 0 0; }\n\n.mui-popup-buttons {\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 44px;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -moz-box-pack: center;\n   -ms-flex-pack: center;\n       justify-content: center; }\n\n.mui-popup-button {\n  font-size: 17px;\n  line-height: 44px;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  height: 44px;\n  padding: 0 5px;\n  cursor: pointer;\n  text-align: center;\n  white-space: nowrap;\n  -o-text-overflow: ellipsis;\n     text-overflow: ellipsis;\n  color: #007aff;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-box-flex: 1; }\n\n.mui-popup-button:after {\n  position: absolute;\n  z-index: 15;\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  display: block;\n  width: 1px;\n  height: 100%;\n  content: '';\n  -webkit-transform: scaleX(0.5);\n  -moz-transform: scaleX(0.5);\n   -ms-transform: scaleX(0.5);\n    -o-transform: scaleX(0.5);\n       transform: scaleX(0.5);\n  -webkit-transform-origin: 100% 50%;\n  -moz-transform-origin: 100% 50%;\n   -ms-transform-origin: 100% 50%;\n    -o-transform-origin: 100% 50%;\n       transform-origin: 100% 50%;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.mui-popup-button:first-child {\n  -webkit-border-radius: 0 0 0 13px;\n     -moz-border-radius: 0 0 0 13px;\n          border-radius: 0 0 0 13px; }\n\n.mui-popup-button:first-child:last-child {\n  -webkit-border-radius: 0 0 13px 13px;\n     -moz-border-radius: 0 0 13px 13px;\n          border-radius: 0 0 13px 13px; }\n\n.mui-popup-button:last-child {\n  -webkit-border-radius: 0 0 13px 0;\n     -moz-border-radius: 0 0 13px 0;\n          border-radius: 0 0 13px 0; }\n\n.mui-popup-button:last-child:after {\n  display: none; }\n\n.mui-popup-button.mui-popup-button-bold {\n  font-weight: 600; }\n\n.mui-popup-input input {\n  font-size: 14px;\n  width: 100%;\n  height: 26px;\n  margin: 15px 0 0;\n  padding: 0 5px;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n  -webkit-border-radius: 0;\n     -moz-border-radius: 0;\n          border-radius: 0;\n  background: #fff; }\n\n.mui-plus.mui-android .mui-popup-backdrop {\n  -webkit-transition-duration: 1ms;\n  -moz-transition-duration: 1ms;\n    -o-transition-duration: 1ms;\n       transition-duration: 1ms; }\n\n.mui-plus.mui-android .mui-popup {\n  -webkit-transition-duration: 1ms;\n  -moz-transition-duration: 1ms;\n    -o-transition-duration: 1ms;\n       transition-duration: 1ms;\n  -webkit-transform: translate3d(-50%, -50%, 0) scale(1);\n  -moz-transform: translate3d(-50%, -50%, 0) scale(1);\n       transform: translate3d(-50%, -50%, 0) scale(1); }\n\n.weui-mask {\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.6); }\n\n.weui-mask_transparent {\n  position: fixed;\n  z-index: 2000;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0; }\n\n.weui-toast {\n  position: fixed;\n  z-index: 5000;\n  width: 7.6em;\n  min-height: 7.6em;\n  top: 180px;\n  left: 50%;\n  margin-left: -3.8em;\n  background: rgba(40, 40, 40, 0.75);\n  text-align: center;\n  -webkit-border-radius: 5px;\n     -moz-border-radius: 5px;\n          border-radius: 5px;\n  color: #FFFFFF; }\n\n.weui-icon_toast {\n  margin: 22px 0 0;\n  display: block; }\n  .weui-icon_toast.weui-icon-success-no-circle:before {\n    color: #FFFFFF;\n    font-size: 55px; }\n  .weui-icon_toast.weui-loading {\n    margin: 30px 0 0;\n    width: 38px;\n    height: 38px;\n    vertical-align: baseline; }\n\n.weui-toast__content {\n  margin: 0 0 15px; }\n\n.weui-loading {\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  -webkit-animation: weuiLoading 1s steps(12, end) infinite;\n     -moz-animation: weuiLoading 1s steps(12, end) infinite;\n       -o-animation: weuiLoading 1s steps(12, end) infinite;\n          animation: weuiLoading 1s steps(12, end) infinite;\n  background: transparent url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4=) no-repeat;\n  -moz-background-size: 100%;\n    -o-background-size: 100%;\n       background-size: 100%; }\n\n@-webkit-keyframes weuiLoading {\n  0% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg); }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 360deg); } }\n\n@-moz-keyframes weuiLoading {\n  0% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg); }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 360deg); } }\n\n@-o-keyframes weuiLoading {\n  0% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg); }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 360deg); } }\n\n@keyframes weuiLoading {\n  0% {\n    -webkit-transform: rotate3d(0, 0, 1, 0deg); }\n  100% {\n    -webkit-transform: rotate3d(0, 0, 1, 360deg); } }\n\n.icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden; }\n", ""]);

// exports


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if (typeof module == 'object' && module.exports) module.exports = factory()

  /* AMD module */
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

  /* Browser global */
  else root.Spinner = factory()
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(15)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hb = __webpack_require__(0);

var _hb2 = _interopRequireDefault(_hb);

var _hb3 = __webpack_require__(1);

var _hb4 = _interopRequireDefault(_hb3);

var _hbLocation = __webpack_require__(7);

var _hbLocation2 = _interopRequireDefault(_hbLocation);

var _hbLib = __webpack_require__(6);

var _hbLib2 = _interopRequireDefault(_hbLib);

var _hbLib3 = __webpack_require__(5);

var _hbLib4 = _interopRequireDefault(_hbLib3);

var _hb5 = __webpack_require__(2);

var _hb6 = _interopRequireDefault(_hb5);

var _hb7 = __webpack_require__(8);

var _hb8 = _interopRequireDefault(_hb7);

var _hb9 = __webpack_require__(3);

var _hb10 = _interopRequireDefault(_hb9);

var _hb11 = __webpack_require__(9);

var _hb12 = _interopRequireDefault(_hb11);

var _hb13 = __webpack_require__(4);

var _hb14 = _interopRequireDefault(_hb13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//require("./style.scss");
//var $$=require("../node_modules/jquery/dist/jquery.js");
//var url2=require("./url.js");
//import url2 from "./url.js";
//import url2 from "../bower_components/js-url/url";
//var XModule=require("exports?XModule!../bower_components/js-url/url.js");
//var XModule=require("imports?window=>{}!exports?window.url!../bower_components/js-url/url.js");
//var XModule=require("exports?window.url!../bower_components/js-url/url.js");
//var XModule=require("exports?window.url!../bower_components/js-url/url.js");


//var XModule=require("url");
//window.url=null;


//var aaa=require("imports?window=>{}!exports?window.url!../bower_components/js-url/url.js");
//var aa=`dsfe
//sdfe
//ef`;


//console.log(url)

var hb = {};
hb.location = {};
hb.lib = {};
hb.color = {};
//hb.agent=require("./hb.agent");

//console.log(require("exports?agent!./hb.agent"))
hb.agent = _hb2.default;

hb.browser = _hb4.default;

// var url=require("exports?url!./url");
var url = __webpack_require__(19);
hb.location.url = url;

hb.location.hash = _hbLocation2.default;

//import * as weui from "./hb.lib.weui";

hb.lib.weui = _hbLib2.default;

hb.lib.iui = _hbLib4.default;

var Cookies = __webpack_require__(10);
Cookies.withConverter({
    write: function write(value) {
        return encodeURIComponent(value);
    },
    read: function read(value) {
        return decodeURIComponent(value);
    }
});

hb.Cookies = Cookies;

hb.color = _hb6.default;

hb.util = _hb8.default;

hb.hack = _hb10.default;

hb.validation = _hb12.default;

var store = __webpack_require__(11);
hb.store = store;
//storeWithExpiration
hb.storeWithExpiration = {
    set: function set(key, val, options) {
        var options = options || {};
        var defaults = {
            expires: 1000
        };
        var settings = $.extend({}, defaults, options);
        var exp = settings.expires * 24 * 60 * 60 * 1000;
        store.set(key, {
            val: val,
            exp: exp,
            time: new Date().getTime()
        });
    },
    get: function get(key) {
        var info = store.get(key);
        if (!info) {
            return null;
        }
        if (new Date().getTime() - info.time > info.exp) {
            return null;
        }
        return info.val;
    }
};

hb.interval = _hb14.default;

window.hb = hb;

//console.log(hb);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var url = function () {

    function _t() {
        return new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);
    }

    function _d(s) {
        return decodeURIComponent(s.replace(/\+/g, ' '));
    }

    function _i(arg, str) {
        var sptr = arg.charAt(0),
            split = str.split(sptr);

        if (sptr === arg) {
            return split;
        }

        arg = parseInt(arg.substring(1), 10);

        return split[arg < 0 ? split.length + arg : arg - 1];
    }

    function _f(arg, str) {
        var sptr = arg.charAt(0),
            split = str.split('&'),
            field = [],
            params = {},
            tmp = [],
            arg2 = arg.substring(1);

        for (var i = 0, ii = split.length; i < ii; i++) {
            field = split[i].match(/(.*?)=(.*)/);

            // TODO: regex should be able to handle this.
            if (!field) {
                field = [split[i], split[i], ''];
            }

            if (field[1].replace(/\s/g, '') !== '') {
                field[2] = _d(field[2] || '');

                // If we have a match just return it right away.
                if (arg2 === field[1]) {
                    return field[2];
                }

                // Check for array pattern.
                tmp = field[1].match(/(.*)\[([0-9]+)\]/);

                if (tmp) {
                    params[tmp[1]] = params[tmp[1]] || [];

                    params[tmp[1]][tmp[2]] = field[2];
                } else {
                    params[field[1]] = field[2];
                }
            }
        }

        if (sptr === arg) {
            return params;
        }

        return params[arg2];
    }

    return function (arg, url) {
        var _l = {},
            tmp,
            tmp2;

        if (arg === 'tld?') {
            return _t();
        }

        url = url || window.location.toString();

        if (!arg) {
            return url;
        }

        arg = arg.toString();

        if (tmp = url.match(/^mailto:([^\/].+)/)) {
            _l.protocol = 'mailto';
            _l.email = tmp[1];
        } else {

            // Ignore Hashbangs.
            if (tmp = url.match(/(.*?)\/#\!(.*)/)) {
                url = tmp[1] + tmp[2];
            }

            // Hash.
            if (tmp = url.match(/(.*?)#(.*)/)) {
                _l.hash = tmp[2];
                url = tmp[1];
            }

            // Return hash parts.
            if (_l.hash && arg.match(/^#/)) {
                return _f(arg, _l.hash);
            }

            // Query
            if (tmp = url.match(/(.*?)\?(.*)/)) {
                _l.query = tmp[2];
                url = tmp[1];
            }

            // Return query parts.
            if (_l.query && arg.match(/^\?/)) {
                return _f(arg, _l.query);
            }

            // Protocol.
            if (tmp = url.match(/(.*?)\:?\/\/(.*)/)) {
                _l.protocol = tmp[1].toLowerCase();
                url = tmp[2];
            }

            // Path.
            if (tmp = url.match(/(.*?)(\/.*)/)) {
                _l.path = tmp[2];
                url = tmp[1];
            }

            // Clean up path.
            _l.path = (_l.path || '').replace(/^([^\/])/, '/$1').replace(/\/$/, '');

            // Return path parts.
            if (arg.match(/^[\-0-9]+$/)) {
                arg = arg.replace(/^([^\/])/, '/$1');
            }
            if (arg.match(/^\//)) {
                return _i(arg, _l.path.substring(1));
            }

            // File.
            tmp = _i('/-1', _l.path.substring(1));

            if (tmp && (tmp = tmp.match(/(.*?)\.(.*)/))) {
                _l.file = tmp[0];
                _l.filename = tmp[1];
                _l.fileext = tmp[2];
            }

            // Port.
            if (tmp = url.match(/(.*)\:([0-9]+)$/)) {
                _l.port = tmp[2];
                url = tmp[1];
            }

            // Auth.
            if (tmp = url.match(/(.*?)@(.*)/)) {
                _l.auth = tmp[1];
                url = tmp[2];
            }

            // User and pass.
            if (_l.auth) {
                tmp = _l.auth.match(/(.*)\:(.*)/);

                _l.user = tmp ? tmp[1] : _l.auth;
                _l.pass = tmp ? tmp[2] : undefined;
            }

            // Hostname.
            _l.hostname = url.toLowerCase();

            // Return hostname parts.
            if (arg.charAt(0) === '.') {
                return _i(arg, _l.hostname);
            }

            // Domain, tld and sub domain.
            if (_t()) {
                tmp = _l.hostname.match(_t());

                if (tmp) {
                    _l.tld = tmp[3];
                    _l.domain = tmp[2] ? tmp[2] + '.' + tmp[3] : undefined;
                    _l.sub = tmp[1] || undefined;
                }
            }

            // Set port and protocol defaults if not set.
            _l.port = _l.port || (_l.protocol === 'https' ? '443' : '80');
            _l.protocol = _l.protocol || (_l.port === '443' ? 'https' : 'http');
        }

        // Return arg.
        if (arg in _l) {
            return _l[arg];
        }

        // Return everything.
        if (arg === '{}') {
            return _l;
        }

        // Default to undefined for no match.
        return undefined;
    };
}();

// if(typeof jQuery !== 'undefined') {
//     jQuery.extend({
//         url: function(arg, url) { return window.url(arg, url); }
//     });
// }

exports.default = url;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map