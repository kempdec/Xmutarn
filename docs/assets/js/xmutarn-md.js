/*! Xmutarn v0.27.1 (https://github.com/vinivsl/Xmutarn.git) | Copyright 2019 Vinícius Lima | Licensed under MIT (https://github.com/vinivsl/Xmutarn/blob/master/LICENSE) */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.X = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component = (function () {
    function Component(element) {
        if (!element) {
            throw new Error("O elemento do componente deve ser fornecido.");
        }
        this._element = element;
    }
    Object.defineProperty(Component.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
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
var Overlay_1 = require("./Overlay");
var Component_1 = require("./Component");
var Dialog = (function (_super) {
    __extends(Dialog, _super);
    function Dialog(element) {
        var _this = _super.call(this, element) || this;
        _this._overlay = Overlay_1.default.create();
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
}(Component_1.default));
exports.default = Dialog;
},{"./Component":1,"./Overlay":3}],3:[function(require,module,exports){
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
var Component_1 = require("./Component");
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
}(Component_1.default));
exports.default = Overlay;
},{"./Component":1}],4:[function(require,module,exports){
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
var Component_1 = require("./Component");
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
    return Toolbar;
}(Component_1.default));
exports.default = Toolbar;
},{"./Component":1}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = require("./Component");
exports.Component = Component_1.default;
var Dialog_1 = require("./Dialog");
exports.Dialog = Dialog_1.default;
var Overlay_1 = require("./Overlay");
exports.Overlay = Overlay_1.default;
var Toolbar_1 = require("./Toolbar");
exports.Toolbar = Toolbar_1.default;
},{"./Component":1,"./Dialog":2,"./Overlay":3,"./Toolbar":4}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("./components");
exports.Dialog = components_1.Dialog;
exports.Overlay = components_1.Overlay;
exports.Toolbar = components_1.Toolbar;
document.addEventListener("DOMContentLoaded", function () {
    components_1.Dialog.initFromHtmlAttribute("x-dialog");
    components_1.Toolbar.initFromHtmlAttribute("x-toolbar");
});
},{"./components":5}]},{},[6])(6)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvY29tcG9uZW50cy9Db21wb25lbnQudHMiLCJzcmMvdHMvY29tcG9uZW50cy9EaWFsb2cudHMiLCJzcmMvdHMvY29tcG9uZW50cy9PdmVybGF5LnRzIiwic3JjL3RzL2NvbXBvbmVudHMvVG9vbGJhci50cyIsInNyYy90cy9jb21wb25lbnRzL2luZGV4LnRzIiwic3JjL3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTtJQVVFLG1CQUFZLE9BQW9CO1FBRTlCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFFWixNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztJQUMxQixDQUFDO0lBR0Qsc0JBQVcsOEJBQU87YUFBbEI7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDSCxnQkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCRCxxQ0FBZ0M7QUFDaEMseUNBQW9DO0FBR3BDO0lBQW9DLDBCQUFTO0lBTzNDLGdCQUFZLE9BQW9CO1FBQWhDLFlBRUUsa0JBQU0sT0FBTyxDQUFDLFNBR2Y7UUFHTyxjQUFRLEdBQVksaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUozQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBQ3ZDLENBQUM7SUFjTSxxQkFBSSxHQUFYLFVBQVksVUFBMEI7UUFBMUIsMkJBQUEsRUFBQSxpQkFBMEI7UUFFcEMsSUFBSSxVQUFVLEVBQUU7WUFFZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFD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c0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtIGNvbXBvbmVudGUuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCB7XHJcblxyXG4gIC8qKiBFbGVtZW50byBkbyBjb21wb25lbnRlLiAqL1xyXG4gIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgQ29tcG9uZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBkbyBjb21wb25lbnRlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIGRvIGNvbXBvbmVudGUgZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKiBPYnTDqW0gbyBlbGVtZW50byBkbyBjb21wb25lbnRlLiAqL1xyXG4gIHB1YmxpYyBnZXQgZWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBPdmVybGF5IGZyb20gXCIuL092ZXJsYXlcIjtcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtIGRpw6Fsb2dvLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgRGlhbG9nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBkbyBkacOhbG9nby5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGlhbG9nXCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqIE92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSA9IE92ZXJsYXkuY3JlYXRlKCk7XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvLiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9kaWFsb2dPcGVuQ2xhc3M6IHN0cmluZyA9IFwiZGlhbG9nX29wZW5cIjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWJyZSBvIGRpw6Fsb2dvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZU92ZXJsYXkgVW0gc2luYWxpemFkb3IgaW5kaWNhbmRvIHNlIGRldmUgc2VyIHV0aWxpemFkbyB1bSBvdmVybGF5IG5hIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvLiBPIHBhZHLDo28gw6lcclxuICAgKiBcInRydWVcIi5cclxuICAgKi9cclxuICBwdWJsaWMgb3Blbih1c2VPdmVybGF5OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh1c2VPdmVybGF5KSB7XHJcblxyXG4gICAgICB0aGlzLl9vdmVybGF5LnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChEaWFsb2cuX2RpYWxvZ09wZW5DbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRPcGVuTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nbyBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBlID0+IHtcclxuXHJcbiAgICAgIHRoaXMub3BlbigpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogRmVjaGEgbyBkacOhbG9nby4gKi9cclxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoRGlhbG9nLl9kaWFsb2dPcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvLlxyXG4gICAqIEBwYXJhbSB0eXBlIE8gdGlwbyBkZSBldmVudG8uIE8gcGFkcsOjbyDDqSBcImNsaWNrXCIuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZENsb3NlTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgRGlhbG9nLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLiBPcyBlbGVtZW50b3MgZGUgZGnDoWxvZ29cclxuICAgKiBkZXZlbSB0ZXIgdW0gaWRlbnRpZmljYWRvciBwYXJhIHRlcmVtIHN1YXMgaW5zdMOibmNpYXMgaW5pY2lhbGl6YWRhcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIE8gbm9tZSBkbyBhdHJpYnV0byBIVE1MLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEZyb21IdG1sQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9XWApXHJcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coZWxlbWVudCk7XHJcbiAgICAgICAgICBjb25zdCBkaWFsb2dJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3gtbGlzdGVuZXItb3Blbi1kaWFsb2c9XCIke2RpYWxvZ0lkfVwiXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZGlhbG9nLmFkZE9wZW5MaXN0ZW5lcihlbGVtZW50KSk7XHJcblxyXG4gICAgICAgICAgZGlhbG9nLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3gtbGlzdGVuZXItY2xvc2UtZGlhbG9nXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZGlhbG9nLmFkZENsb3NlTGlzdGVuZXIoZWxlbWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBvdmVybGF5LiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIE92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhdGl2YcOnw6NvIGRvIG92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX292ZXJsYXlBY3RpdmVDbGFzczogc3RyaW5nID0gXCJvdmVybGF5X2FjdGl2ZVwiO1xyXG5cclxuICAvKipcclxuICAgKiBFeGliaSBvIG92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVsYXkgTyBkZWxheSBlbSBtaWxpc3NlZ3VuZG9zIGF0w6kgYSBleGliacOnw6NvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3coZGVsYXk6IG51bWJlciA9IDMwMCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoT3ZlcmxheS5fb3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT21pdGUgbyBvdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBhdMOpIGEgb21pc3PDo28gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBwdWJsaWMgaGlkZShkZWxheTogbnVtYmVyID0gMzAwKSB7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShPdmVybGF5Ll9vdmVybGF5QWN0aXZlQ2xhc3MpLCBkZWxheSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JpYSB1bSBvdmVybGF5LiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IE92ZXJsYXkge1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgT3ZlcmxheShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IFRvb2xiYXJPcHRpb25zIGZyb20gXCIuL1Rvb2xiYXJPcHRpb25zXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bWEgYmFycmEgZGUgZmVycmFtZW50YXMuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgVG9vbGJhci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGEgYmFycmEgZGUgZmVycmFtZW50YXMuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgQXMgb3DDp8O1ZXMgZGEgYmFycmEgZGUgZmVycmFtZW50YXMuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFRvb2xiYXJPcHRpb25zID0geyBoaWRlSW5TY3JvbGw6IHRydWUgfSkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmhpZGVJblNjcm9sbCkge1xyXG5cclxuICAgICAgdGhpcy5oaWRlSW5TY3JvbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIG9taXNzw6NvIGRhIGJhcnJhIGRlIGZlcnJhbWVudGFzLiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF90b29sYmFySGlkZUNsYXNzOiBzdHJpbmcgPSBcInRvb2xiYXJfaGlkZVwiO1xyXG5cclxuICAvKiogT21pdGUgYSBiYXJyYSBkZSBmZXJyYW1lbnRhcyBuYSByb2xhZ2VtIGRhIHDDoWdpbmEuICovXHJcbiAgcHVibGljIGhpZGVJblNjcm9sbCgpOiB2b2lkIHtcclxuXHJcbiAgICBsZXQgbGFzdFNjcm9sbFRvcDogbnVtYmVyID0gMDtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcblxyXG4gICAgICBjb25zdCBzY3JvbGxUb3A6IG51bWJlciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcblxyXG4gICAgICBpZiAoc2Nyb2xsVG9wID4gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodCAmJiBzY3JvbGxUb3AgPiBsYXN0U2Nyb2xsVG9wKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFRvb2xiYXIuX3Rvb2xiYXJIaWRlQ2xhc3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShUb29sYmFyLl90b29sYmFySGlkZUNsYXNzKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFzdFNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIFRvb2xiYXIsIGEgcGFydGlyIGRvIG5vbWUgZG8gYXRyaWJ1dG8gSFRNTCBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSBPIG5vbWUgZG8gYXRyaWJ1dG8gSFRNTC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGluaXRGcm9tSHRtbEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHthdHRyaWJ1dGVOYW1lfV1gKVxyXG4gICAgICAuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgbmV3IFRvb2xiYXIoZWxlbWVudCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL0RpYWxvZ1wiO1xyXG5pbXBvcnQgT3ZlcmxheSBmcm9tIFwiLi9PdmVybGF5XCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL1Rvb2xiYXJcIjtcclxuaW1wb3J0IFRvb2xiYXJPcHRpb25zIGZyb20gXCIuL1Rvb2xiYXJPcHRpb25zXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBEaWFsb2csXHJcbiAgT3ZlcmxheSxcclxuICBUb29sYmFyLFxyXG4gIFRvb2xiYXJPcHRpb25zXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIE92ZXJsYXksXHJcbiAgVG9vbGJhclxyXG59IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIE92ZXJsYXksXHJcbiAgVG9vbGJhclxyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cclxuICBEaWFsb2cuaW5pdEZyb21IdG1sQXR0cmlidXRlKFwieC1kaWFsb2dcIik7XHJcbiAgVG9vbGJhci5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LXRvb2xiYXJcIik7XHJcbn0pO1xyXG4iXX0=
