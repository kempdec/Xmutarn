/*! Xmutarn v0.28.0-beta (https://github.com/vinivsl/Xmutarn.git) | Copyright 2019 Vinícius Lima | Licensed under MIT (https://github.com/vinivsl/Xmutarn/blob/master/LICENSE) */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.X = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component = (function () {
    function Component(element) {
        if (!element) {
            throw new Error("O elemento do componente deve ser fornecido.");
        }
        this.element = element;
    }
    return Component;
}());
exports.default = Component;
},{}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog(element) {
        var _this = _super.call(this, element) || this;
        _this._overlay = _1.Overlay.create();
        _this.element.classList.add("dialog");
        return _this;
    }
    Dialog.prototype.open = function (useOverlay) {
        if (useOverlay === void 0) { useOverlay = true; }
        if (useOverlay) {
            this._overlay.show();
        }
        this.element.classList.add(Dialog._dialogOpenClass);
    };
    Dialog.prototype.addOpenListener = function (element, type) {
        var _this = this;
        if (type === void 0) { type = "click"; }
        if (!element) {
            throw new Error("O elemento ouviente de abertura do diálogo deve ser fornecido.");
        }
        element.addEventListener(type, function (e) {
            _this.open();
            e.preventDefault();
        });
    };
    Dialog.prototype.close = function () {
        this._overlay.hide();
        this.element.classList.remove(Dialog._dialogOpenClass);
    };
    Dialog.prototype.addCloseListener = function (element, type) {
        var _this = this;
        if (type === void 0) { type = "click"; }
        if (!element) {
            throw new Error("O elemento ouviente de fechamento do diálogo deve ser fornecido.");
        }
        element.addEventListener(type, function (e) {
            _this.close();
            e.preventDefault();
        });
    };
    Dialog.initFromHtmlAttribute = function (attributeName) {
        document.querySelectorAll("[" + attributeName + "]")
            .forEach(function (element) {
            if (element.hasAttribute("id")) {
                var dialog_1 = new Dialog(element);
                var dialogId = element.getAttribute("id");
                document.querySelectorAll("[x-listener-open-dialog=\"" + dialogId + "\"]")
                    .forEach(function (element) { return dialog_1.addOpenListener(element); });
                dialog_1.element.querySelectorAll("[x-listener-close-dialog]")
                    .forEach(function (element) { return dialog_1.addCloseListener(element); });
            }
        });
    };
    Dialog._dialogOpenClass = "dialog_open";
    return Dialog;
}(_1.Component));
exports.default = Dialog;
},{".":6}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var NavigationDrawer = (function (_super) {
    __extends(NavigationDrawer, _super);
    function NavigationDrawer(element) {
        var _this = _super.call(this, element) || this;
        _this._overlay = _1.Overlay.create();
        _this.element.classList.add("navigation-drawer");
        return _this;
    }
    NavigationDrawer.prototype.open = function (useOverlay) {
        if (useOverlay === void 0) { useOverlay = true; }
        if (useOverlay) {
            this._overlay.show();
        }
        this.element.classList.add(NavigationDrawer._openClass);
    };
    NavigationDrawer.prototype.addOpenListener = function (element, type) {
        var _this = this;
        if (type === void 0) { type = "click"; }
        if (!element) {
            throw new Error("O elemento ouviente de abertura da gaveta de navegação deve ser fornecido.");
        }
        element.addEventListener(type, function (e) {
            _this.open();
            e.preventDefault();
        });
    };
    NavigationDrawer.prototype.close = function () {
        this._overlay.hide();
        this.element.classList.remove(NavigationDrawer._openClass);
    };
    NavigationDrawer.prototype.addCloseListener = function (element, type) {
        var _this = this;
        if (type === void 0) { type = "click"; }
        if (!element) {
            throw new Error("O elemento ouviente de fechamento da gaveta de navegação deve ser fornecido.");
        }
        element.addEventListener(type, function (e) {
            _this.close();
            e.preventDefault();
        });
    };
    NavigationDrawer.initFromHtmlAttribute = function (attributeName) {
        document.querySelectorAll("[" + attributeName + "]")
            .forEach(function (element) {
            if (element.hasAttribute("id")) {
                var navDrawer_1 = new NavigationDrawer(element);
                var navDrawerId = element.getAttribute("id");
                navDrawer_1.addCloseListener(navDrawer_1._overlay.element);
                document.querySelectorAll("[x-listener-open-nav-drawer=\"" + navDrawerId + "\"]")
                    .forEach(function (element) { return navDrawer_1.addOpenListener(element); });
                navDrawer_1.element.querySelectorAll("[x-listener-close-nav-drawer]")
                    .forEach(function (element) { return navDrawer_1.addCloseListener(element); });
            }
        });
    };
    NavigationDrawer._openClass = "navigation-drawer_open";
    return NavigationDrawer;
}(_1.Component));
exports.default = NavigationDrawer;
},{".":6}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var Overlay = (function (_super) {
    __extends(Overlay, _super);
    function Overlay(element) {
        var _this = _super.call(this, element) || this;
        _this.element.classList.add("overlay");
        return _this;
    }
    Overlay.prototype.show = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 300; }
        setTimeout(function () { return _this.element.classList.add(Overlay._overlayActiveClass); }, delay);
    };
    Overlay.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 300; }
        setTimeout(function () { return _this.element.classList.remove(Overlay._overlayActiveClass); }, delay);
    };
    Overlay.create = function () {
        var element = document.createElement("div");
        document.querySelector("body").appendChild(element);
        return new Overlay(element);
    };
    Overlay._overlayActiveClass = "overlay_active";
    return Overlay;
}(_1.Component));
exports.default = Overlay;
},{".":6}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var Toolbar = (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar(element, options) {
        if (options === void 0) { options = { hideInScroll: true }; }
        var _this = _super.call(this, element) || this;
        if (options.hideInScroll) {
            _this.hideInScroll();
        }
        return _this;
    }
    Toolbar.prototype.hideInScroll = function () {
        var _this = this;
        var lastScrollTop = 0;
        window.addEventListener("scroll", function () {
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop > _this.element.clientHeight && scrollTop > lastScrollTop) {
                _this.element.classList.add(Toolbar._toolbarHideClass);
            }
            else {
                _this.element.classList.remove(Toolbar._toolbarHideClass);
                if (_this.element.classList.contains("color-bg-transparent") && scrollTop > _this.element.clientHeight) {
                    _this.element.classList.add(Toolbar._toolbarThemeColorClass);
                }
                else {
                    _this.element.classList.remove(Toolbar._toolbarThemeColorClass);
                }
            }
            lastScrollTop = scrollTop;
        });
    };
    Toolbar.initFromHtmlAttribute = function (attributeName) {
        document.querySelectorAll("[" + attributeName + "]")
            .forEach(function (element) {
            new Toolbar(element);
        });
    };
    Toolbar._toolbarHideClass = "toolbar_hide";
    Toolbar._toolbarThemeColorClass = "theme-color-bg-700";
    return Toolbar;
}(_1.Component));
exports.default = Toolbar;
},{".":6}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = require("./Component");
exports.Component = Component_1.default;
var Dialog_1 = require("./Dialog");
exports.Dialog = Dialog_1.default;
var NavigationDrawer_1 = require("./NavigationDrawer");
exports.NavigationDrawer = NavigationDrawer_1.default;
var Overlay_1 = require("./Overlay");
exports.Overlay = Overlay_1.default;
var Toolbar_1 = require("./Toolbar");
exports.Toolbar = Toolbar_1.default;
},{"./Component":1,"./Dialog":2,"./NavigationDrawer":3,"./Overlay":4,"./Toolbar":5}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("./components");
exports.Dialog = components_1.Dialog;
exports.NavigationDrawer = components_1.NavigationDrawer;
exports.Overlay = components_1.Overlay;
exports.Toolbar = components_1.Toolbar;
document.addEventListener("DOMContentLoaded", function () {
    components_1.Dialog.initFromHtmlAttribute("x-dialog");
    components_1.NavigationDrawer.initFromHtmlAttribute("x-nav-drawer");
    components_1.Toolbar.initFromHtmlAttribute("x-toolbar");
});
},{"./components":6}]},{},[7])(7)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvY29tcG9uZW50cy9Db21wb25lbnQudHMiLCJzcmMvdHMvY29tcG9uZW50cy9EaWFsb2cudHMiLCJzcmMvdHMvY29tcG9uZW50cy9OYXZpZ2F0aW9uRHJhd2VyLnRzIiwic3JjL3RzL2NvbXBvbmVudHMvT3ZlcmxheS50cyIsInNyYy90cy9jb21wb25lbnRzL1Rvb2xiYXIudHMiLCJzcmMvdHMvY29tcG9uZW50cy9pbmRleC50cyIsInNyYy90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7SUFVRSxtQkFBWSxPQUFvQjtRQUU5QixJQUFJLENBQUMsT0FBTyxFQUFFO1lBRVosTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJELHNCQUdXO0FBR1g7SUFBb0MsMEJBQVM7SUFPM0MsZ0JBQVksT0FBb0I7UUFBaEMsWUFFRSxrQkFBTSxPQUFPLENBQUMsU0FHZjtRQUdPLGNBQVEsR0FBWSxVQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFKM0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztJQUN2QyxDQUFDO0lBY00scUJBQUksR0FBWCxVQUFZLFVBQTBCO1FBQTFCLDJCQUFBLEVBQUEsaUJBQTBCO1FBRXBDLElBQUksVUFBVSxFQUFFO1lBRWQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBUU0sZ0NB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LENBUUw7QUFQbEIscUNBQWdDO0FBUTlCLGtCQVJLLGlCQUFPLENBUUw7QUFQVCxxQ0FBZ0M7QUFROUIsa0JBUkssaUJBQU8sQ0FRTDs7OztBQ1pULDJDQUtzQjtBQUdwQixpQkFQQSxtQkFBTSxDQU9BO0FBQ04sMkJBUEEsNkJBQWdCLENBT0E7QUFDaEIsa0JBUEEsb0JBQU8sQ0FPQTtBQUNQLGtCQVBBLG9CQUFPLENBT0E7QUFHVCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFFNUMsbUJBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6Qyw2QkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2RCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gY29tcG9uZW50ZS4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIE9idMOpbSBvIGVsZW1lbnRvIGRvIGNvbXBvbmVudGUuICovXHJcbiAgcHVibGljIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgQ29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBkbyBjb21wb25lbnRlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIGRvIGNvbXBvbmVudGUgZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPdmVybGF5XHJcbn0gZnJvbSBcIi5cIjtcclxuXHJcbi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtIGRpw6Fsb2dvLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgRGlhbG9nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBkbyBkacOhbG9nby5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqIE92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSA9IE92ZXJsYXkuY3JlYXRlKCk7XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvLiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9kaWFsb2dPcGVuQ2xhc3M6IHN0cmluZyA9IFwiZGlhbG9nX29wZW5cIjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWJyZSBvIGRpw6Fsb2dvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZU92ZXJsYXkgVW0gc2luYWxpemFkb3IgaW5kaWNhbmRvIHNlIGRldmUgc2VyIHV0aWxpemFkbyB1bSBvdmVybGF5IG5hIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvLiBPIHBhZHLDo28gw6lcclxuICAgKiBcInRydWVcIi5cclxuICAgKi9cclxuICBwdWJsaWMgb3Blbih1c2VPdmVybGF5OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh1c2VPdmVybGF5KSB7XHJcblxyXG4gICAgICB0aGlzLl9vdmVybGF5LnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChEaWFsb2cuX2RpYWxvZ09wZW5DbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRPcGVuTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nbyBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBlID0+IHtcclxuXHJcbiAgICAgIHRoaXMub3BlbigpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogRmVjaGEgbyBkacOhbG9nby4gKi9cclxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoRGlhbG9nLl9kaWFsb2dPcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvLlxyXG4gICAqIEBwYXJhbSB0eXBlIE8gdGlwbyBkZSBldmVudG8uIE8gcGFkcsOjbyDDqSBcImNsaWNrXCIuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZENsb3NlTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgRGlhbG9nLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLiBPcyBlbGVtZW50b3MgZGUgZGnDoWxvZ29cclxuICAgKiBkZXZlbSB0ZXIgdW0gaWRlbnRpZmljYWRvciBwYXJhIHRlcmVtIHN1YXMgaW5zdMOibmNpYXMgaW5pY2lhbGl6YWRhcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIE8gbm9tZSBkbyBhdHJpYnV0byBIVE1MLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEZyb21IdG1sQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9XWApXHJcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coZWxlbWVudCk7XHJcbiAgICAgICAgICBjb25zdCBkaWFsb2dJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3gtbGlzdGVuZXItb3Blbi1kaWFsb2c9XCIke2RpYWxvZ0lkfVwiXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZGlhbG9nLmFkZE9wZW5MaXN0ZW5lcihlbGVtZW50KSk7XHJcblxyXG4gICAgICAgICAgZGlhbG9nLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3gtbGlzdGVuZXItY2xvc2UtZGlhbG9nXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZGlhbG9nLmFkZENsb3NlTGlzdGVuZXIoZWxlbWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE92ZXJsYXlcclxufSBmcm9tIFwiLlwiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW1hIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkRyYXdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBOYXZpZ2F0aW9uRHJhd2VyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb24tZHJhd2VyXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqIE92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSA9IE92ZXJsYXkuY3JlYXRlKCk7XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIGFiZXJ0dXJhIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfb3BlbkNsYXNzOiBzdHJpbmcgPSBcIm5hdmlnYXRpb24tZHJhd2VyX29wZW5cIjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWJyZSBhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB1c2VPdmVybGF5IFVtIHNpbmFsaXphZG9yIGluZGljYW5kbyBzZSBkZXZlIHNlciB1dGlsaXphZG8gdW0gb3ZlcmxheSBuYSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uIE9cclxuICAgKiBwYWRyw6NvIMOpIFwidHJ1ZVwiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcGVuKHVzZU92ZXJsYXk6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHVzZU92ZXJsYXkpIHtcclxuXHJcbiAgICAgIHRoaXMuX292ZXJsYXkuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKE5hdmlnYXRpb25EcmF3ZXIuX29wZW5DbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGFiZXJ0dXJhIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8OjbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgYWJlcnR1cmEgZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLlxyXG4gICAqIEBwYXJhbSB0eXBlIE8gdGlwbyBkZSBldmVudG8uIE8gcGFkcsOjbyDDqSBcImNsaWNrXCIuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZE9wZW5MaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgdHlwZTogc3RyaW5nID0gXCJjbGlja1wiKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIG91dmllbnRlIGRlIGFiZXJ0dXJhIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8OjbyBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBlID0+IHtcclxuXHJcbiAgICAgIHRoaXMub3BlbigpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogRmVjaGEgYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uICovXHJcbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE5hdmlnYXRpb25EcmF3ZXIuX29wZW5DbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGZlY2hhbWVudG8gZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRDbG9zZUxpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImNsaWNrXCIpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aWVudGUgZGUgZmVjaGFtZW50byBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBOYXZpZ2F0aW9uRHJhd2VyLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLiBPcyBlbGVtZW50b3MgZGVcclxuICAgKiBnYXZldGEgZGUgbmF2ZWdhw6fDo28gZGV2ZW0gdGVyIHVtIGlkZW50aWZpY2Fkb3IgcGFyYSB0ZXJlbSBzdWFzIGluc3TDom5jaWFzIGluaWNpYWxpemFkYXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSBPIG5vbWUgZG8gYXRyaWJ1dG8gSFRNTC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGluaXRGcm9tSHRtbEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHthdHRyaWJ1dGVOYW1lfV1gKVxyXG4gICAgICAuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiaWRcIikpIHtcclxuXHJcbiAgICAgICAgICBjb25zdCBuYXZEcmF3ZXIgPSBuZXcgTmF2aWdhdGlvbkRyYXdlcihlbGVtZW50KTtcclxuICAgICAgICAgIGNvbnN0IG5hdkRyYXdlcklkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgICBuYXZEcmF3ZXIuYWRkQ2xvc2VMaXN0ZW5lcihuYXZEcmF3ZXIuX292ZXJsYXkuZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3gtbGlzdGVuZXItb3Blbi1uYXYtZHJhd2VyPVwiJHtuYXZEcmF3ZXJJZH1cIl1gKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IG5hdkRyYXdlci5hZGRPcGVuTGlzdGVuZXIoZWxlbWVudCkpO1xyXG5cclxuICAgICAgICAgIG5hdkRyYXdlci5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4LWxpc3RlbmVyLWNsb3NlLW5hdi1kcmF3ZXJdYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuYXZEcmF3ZXIuYWRkQ2xvc2VMaXN0ZW5lcihlbGVtZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi5cIjtcclxuXHJcbi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtIG92ZXJsYXkuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgT3ZlcmxheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcclxuICB9XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIGF0aXZhw6fDo28gZG8gb3ZlcmxheS4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfb3ZlcmxheUFjdGl2ZUNsYXNzOiBzdHJpbmcgPSBcIm92ZXJsYXlfYWN0aXZlXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4aWJpIG8gb3ZlcmxheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZWxheSBPIGRlbGF5IGVtIG1pbGlzc2VndW5kb3MgYXTDqSBhIGV4aWJpw6fDo28gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBwdWJsaWMgc2hvdyhkZWxheTogbnVtYmVyID0gMzAwKSB7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChPdmVybGF5Ll9vdmVybGF5QWN0aXZlQ2xhc3MpLCBkZWxheSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPbWl0ZSBvIG92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVsYXkgTyBkZWxheSBlbSBtaWxpc3NlZ3VuZG9zIGF0w6kgYSBvbWlzc8OjbyBkbyBvdmVybGF5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBoaWRlKGRlbGF5OiBudW1iZXIgPSAzMDApIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE92ZXJsYXkuX292ZXJsYXlBY3RpdmVDbGFzcyksIGRlbGF5KTtcclxuICB9XHJcblxyXG4gIC8qKiBDcmlhIHVtIG92ZXJsYXkuICovXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTogT3ZlcmxheSB7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBPdmVybGF5KGVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBUb29sYmFyT3B0aW9uc1xyXG59IGZyb20gXCIuXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bWEgYmFycmEgZGUgZmVycmFtZW50YXMuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgVG9vbGJhci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGEgYmFycmEgZGUgZmVycmFtZW50YXMuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgQXMgb3DDp8O1ZXMgZGEgYmFycmEgZGUgZmVycmFtZW50YXMuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFRvb2xiYXJPcHRpb25zID0geyBoaWRlSW5TY3JvbGw6IHRydWUgfSkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmhpZGVJblNjcm9sbCkge1xyXG5cclxuICAgICAgdGhpcy5oaWRlSW5TY3JvbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIG9taXNzw6NvIGRhIGJhcnJhIGRlIGZlcnJhbWVudGFzLiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF90b29sYmFySGlkZUNsYXNzOiBzdHJpbmcgPSBcInRvb2xiYXJfaGlkZVwiO1xyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkYSBjb3IgZG8gdGVtYSBkYSBiYXJyYSBkZSBmZXJyYW1lbnRhcy4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfdG9vbGJhclRoZW1lQ29sb3JDbGFzczogc3RyaW5nID0gXCJ0aGVtZS1jb2xvci1iZy03MDBcIjtcclxuXHJcbiAgLyoqIE9taXRlIGEgYmFycmEgZGUgZmVycmFtZW50YXMgbmEgcm9sYWdlbSBkYSBww6FnaW5hLiAqL1xyXG4gIHB1YmxpYyBoaWRlSW5TY3JvbGwoKTogdm9pZCB7XHJcblxyXG4gICAgbGV0IGxhc3RTY3JvbGxUb3A6IG51bWJlciA9IDA7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wOiBudW1iZXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgaWYgKHNjcm9sbFRvcCA+IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgJiYgc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChUb29sYmFyLl90b29sYmFySGlkZUNsYXNzKTtcclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoVG9vbGJhci5fdG9vbGJhckhpZGVDbGFzcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2xvci1iZy10cmFuc3BhcmVudFwiKSAmJiBzY3JvbGxUb3AgPiB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XHJcblxyXG4gICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoVG9vbGJhci5fdG9vbGJhclRoZW1lQ29sb3JDbGFzcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShUb29sYmFyLl90b29sYmFyVGhlbWVDb2xvckNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBUb29sYmFyLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgTyBub21lIGRvIGF0cmlidXRvIEhUTUwuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIG5ldyBUb29sYmFyKGVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9EaWFsb2dcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25EcmF3ZXIgZnJvbSBcIi4vTmF2aWdhdGlvbkRyYXdlclwiO1xyXG5pbXBvcnQgT3ZlcmxheSBmcm9tIFwiLi9PdmVybGF5XCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL1Rvb2xiYXJcIjtcclxuaW1wb3J0IFRvb2xiYXJPcHRpb25zIGZyb20gXCIuL1Rvb2xiYXJPcHRpb25zXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBEaWFsb2csXHJcbiAgTmF2aWdhdGlvbkRyYXdlcixcclxuICBPdmVybGF5LFxyXG4gIFRvb2xiYXIsXHJcbiAgVG9vbGJhck9wdGlvbnNcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBEaWFsb2csXHJcbiAgTmF2aWdhdGlvbkRyYXdlcixcclxuICBPdmVybGF5LFxyXG4gIFRvb2xiYXJcclxufSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIERpYWxvZyxcclxuICBOYXZpZ2F0aW9uRHJhd2VyLFxyXG4gIE92ZXJsYXksXHJcbiAgVG9vbGJhclxyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cclxuICBEaWFsb2cuaW5pdEZyb21IdG1sQXR0cmlidXRlKFwieC1kaWFsb2dcIik7XHJcbiAgTmF2aWdhdGlvbkRyYXdlci5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LW5hdi1kcmF3ZXJcIik7XHJcbiAgVG9vbGJhci5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LXRvb2xiYXJcIik7XHJcbn0pO1xyXG4iXX0=
