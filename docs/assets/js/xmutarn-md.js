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
Object.defineProperty(exports, "__esModule", { value: true });
var Overlay_1 = require("./Overlay");
var Dialog = (function () {
    function Dialog(element) {
        this._overlay = Overlay_1.default.create();
        if (!element) {
            throw new Error("O elemento do diálogo deve ser fornecido.");
        }
        this._element = element;
        this._element.classList.add("dialog");
    }
    Object.defineProperty(Dialog.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
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
}());
exports.default = Dialog;
},{"./Overlay":3}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Overlay = (function () {
    function Overlay(element) {
        if (!element) {
            throw new Error("O elemento do overlay deve ser fornecido.");
        }
        this._element = element;
        this._element.classList.add("overlay");
    }
    Object.defineProperty(Overlay.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
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
}());
exports.default = Overlay;
},{}],4:[function(require,module,exports){
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
    function Toolbar(element) {
        return _super.call(this, element) || this;
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
var Dialog_1 = require("./Dialog");
exports.Dialog = Dialog_1.default;
var Overlay_1 = require("./Overlay");
exports.Overlay = Overlay_1.default;
var Toolbar_1 = require("./Toolbar");
exports.Toolbar = Toolbar_1.default;
document.addEventListener("DOMContentLoaded", function () {
    Dialog_1.default.initFromHtmlAttribute("x-dialog");
    Toolbar_1.default.initFromHtmlAttribute("x-toolbar");
});
},{"./Dialog":2,"./Overlay":3,"./Toolbar":4}]},{},[5])(5)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvQ29tcG9uZW50LnRzIiwic3JjL3RzL0RpYWxvZy50cyIsInNyYy90cy9PdmVybGF5LnRzIiwic3JjL3RzL1Rvb2xiYXIudHMiLCJzcmMvdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBO0lBVUUsbUJBQVksT0FBb0I7UUFFOUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVaLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFHRCxzQkFBVyw4QkFBTzthQUFsQjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUNILGdCQUFDO0FBQUQsQ0F6QkEsQUF5QkMsSUFBQTs7Ozs7QUMxQkQscUNBQWdDO0FBR2hDO0lBVUUsZ0JBQVksT0FBb0I7UUFtQnhCLGFBQVEsR0FBWSxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBakIzQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRVosTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFHRCxzQkFBVywyQkFBTzthQUFsQjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQWNNLHFCQUFJLEdBQVgsVUFBWSxVQUEwQjtRQUExQiwyQkFBQSxFQUFBLGlCQUEwQjtRQUVwQyxJQUFJLFVBQVUsRUFBRTtZQUVkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7UUFFRCxJ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QUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUVMLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUMxRDtZQUVELGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBT2EsNkJBQXFCLEdBQW5DLFVBQW9DLGFBQXFCO1FBRXZELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFJLGFBQWEsTUFBRyxDQUFDO2FBQzVDLE9BQU8sQ0FBQyxVQUFDLE9BQW9CO1lBRTVCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5DdUIseUJBQWlCLEdBQVcsY0FBYyxDQUFDO0lBb0NyRSxjQUFDO0NBakRELEFBaURDLENBakRvQyxtQkFBUyxHQWlEN0M7a0JBakRvQixPQUFPOzs7O0FDSDVCLG1DQUE4QjtBQUs1QixpQkFMSyxnQkFBTSxDQUtMO0FBSlIscUNBQWdDO0FBSzlCLGtCQUxLLGlCQUFPLENBS0w7QUFKVCxxQ0FBZ0M7QUFLOUIsa0JBTEssaUJBQU8sQ0FLTDtBQUdULFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUU1QyxnQkFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLGlCQUFPLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBjb21wb25lbnRlLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQge1xyXG5cclxuICAvKiogRWxlbWVudG8gZG8gY29tcG9uZW50ZS4gKi9cclxuICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIENvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZG8gY29tcG9uZW50ZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBkbyBjb21wb25lbnRlIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKiogT2J0w6ltIG8gZWxlbWVudG8gZG8gY29tcG9uZW50ZS4gKi9cclxuICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgT3ZlcmxheSBmcm9tIFwiLi9PdmVybGF5XCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBkacOhbG9nby4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIHtcclxuXHJcbiAgLyoqIEVsZW1lbnRvIGRvIGRpw6Fsb2dvLiAqL1xyXG4gIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgRGlhbG9nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBkbyBkacOhbG9nby5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBkbyBkacOhbG9nbyBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpYWxvZ1wiKTtcclxuICB9XHJcblxyXG4gIC8qKiBPYnTDqW0gbyBlbGVtZW50byBkbyBkacOhbG9nby4gKi9cclxuICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIE92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSA9IE92ZXJsYXkuY3JlYXRlKCk7XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvLiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9kaWFsb2dPcGVuQ2xhc3M6IHN0cmluZyA9IFwiZGlhbG9nX29wZW5cIjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWJyZSBvIGRpw6Fsb2dvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZU92ZXJsYXkgVW0gc2luYWxpemFkb3IgaW5kaWNhbmRvIHNlIGRldmUgc2VyIHV0aWxpemFkbyB1bSBvdmVybGF5IG5hIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvLiBPIHBhZHLDo28gw6lcclxuICAgKiBcInRydWVcIi5cclxuICAgKi9cclxuICBwdWJsaWMgb3Blbih1c2VPdmVybGF5OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh1c2VPdmVybGF5KSB7XHJcblxyXG4gICAgICB0aGlzLl9vdmVybGF5LnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChEaWFsb2cuX2RpYWxvZ09wZW5DbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRPcGVuTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nbyBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBlID0+IHtcclxuXHJcbiAgICAgIHRoaXMub3BlbigpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogRmVjaGEgbyBkacOhbG9nby4gKi9cclxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoRGlhbG9nLl9kaWFsb2dPcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvLlxyXG4gICAqIEBwYXJhbSB0eXBlIE8gdGlwbyBkZSBldmVudG8uIE8gcGFkcsOjbyDDqSBcImNsaWNrXCIuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZENsb3NlTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgRGlhbG9nLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLiBPcyBlbGVtZW50b3MgZGUgZGnDoWxvZ29cclxuICAgKiBkZXZlbSB0ZXIgdW0gaWRlbnRpZmljYWRvciBwYXJhIHRlcmVtIHN1YXMgaW5zdMOibmNpYXMgaW5pY2lhbGl6YWRhcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIE8gbm9tZSBkbyBhdHJpYnV0byBIVE1MLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEZyb21IdG1sQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9XWApXHJcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coZWxlbWVudCk7XHJcbiAgICAgICAgICBjb25zdCBkaWFsb2dJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3gtbGlzdGVuZXItb3Blbi1kaWFsb2c9XCIke2RpYWxvZ0lkfVwiXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZGlhbG9nLmFkZE9wZW5MaXN0ZW5lcihlbGVtZW50KSk7XHJcblxyXG4gICAgICAgICAgZGlhbG9nLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3gtbGlzdGVuZXItY2xvc2UtZGlhbG9nXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZGlhbG9nLmFkZENsb3NlTGlzdGVuZXIoZWxlbWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtIG92ZXJsYXkuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJsYXkge1xyXG5cclxuICAvKiogRWxlbWVudG8gZG8gb3ZlcmxheS4gKi9cclxuICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIE92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBkbyBvdmVybGF5IGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcblxyXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcclxuICB9XHJcblxyXG4gIC8qKiBPYnTDqW0gbyBlbGVtZW50byBkbyBvdmVybGF5LiAqL1xyXG4gIHB1YmxpYyBnZXQgZWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhdGl2YcOnw6NvIGRvIG92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX292ZXJsYXlBY3RpdmVDbGFzczogc3RyaW5nID0gXCJvdmVybGF5X2FjdGl2ZVwiO1xyXG5cclxuICAvKipcclxuICAgKiBFeGliaSBvIG92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVsYXkgTyBkZWxheSBlbSBtaWxpc3NlZ3VuZG9zIGF0w6kgYSBleGliacOnw6NvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3coZGVsYXk6IG51bWJlciA9IDMwMCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoT3ZlcmxheS5fb3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT21pdGUgbyBvdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBhdMOpIGEgb21pc3PDo28gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBwdWJsaWMgaGlkZShkZWxheTogbnVtYmVyID0gMzAwKSB7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShPdmVybGF5Ll9vdmVybGF5QWN0aXZlQ2xhc3MpLCBkZWxheSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JpYSB1bSBvdmVybGF5LiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IE92ZXJsYXkge1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgT3ZlcmxheShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtYSBiYXJyYSBkZSBmZXJyYW1lbnRhcy4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9vbGJhciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBUb29sYmFyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBkYSBiYXJyYSBkZSBmZXJyYW1lbnRhcy5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENsYXNzZSBDU1MgZGUgb21pc3PDo28gZGEgYmFycmEgZGUgZmVycmFtZW50YXMuICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX3Rvb2xiYXJIaWRlQ2xhc3M6IHN0cmluZyA9IFwidG9vbGJhcl9oaWRlXCI7XHJcblxyXG4gIC8qKiBPbWl0ZSBhIGJhcnJhIGRlIGZlcnJhbWVudGFzIG5hIHJvbGFnZW0gZGEgcMOhZ2luYS4gKi9cclxuICBwdWJsaWMgaGlkZUluU2Nyb2xsKCk6IHZvaWQge1xyXG5cclxuICAgIGxldCBsYXN0U2Nyb2xsVG9wOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuXHJcbiAgICAgIGNvbnN0IHNjcm9sbFRvcDogbnVtYmVyID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuXHJcbiAgICAgIGlmIChzY3JvbGxUb3AgPiB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0ICYmIHNjcm9sbFRvcCA+IGxhc3RTY3JvbGxUb3ApIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoVG9vbGJhci5fdG9vbGJhckhpZGVDbGFzcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFRvb2xiYXIuX3Rvb2xiYXJIaWRlQ2xhc3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgVG9vbGJhciwgYSBwYXJ0aXIgZG8gbm9tZSBkbyBhdHJpYnV0byBIVE1MIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIE8gbm9tZSBkbyBhdHJpYnV0byBIVE1MLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEZyb21IdG1sQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9XWApXHJcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICBuZXcgVG9vbGJhcihlbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XHJcbmltcG9ydCBPdmVybGF5IGZyb20gXCIuL092ZXJsYXlcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4vVG9vbGJhclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBEaWFsb2csXHJcbiAgT3ZlcmxheSxcclxuICBUb29sYmFyXHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG4gIERpYWxvZy5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LWRpYWxvZ1wiKTtcclxuICBUb29sYmFyLmluaXRGcm9tSHRtbEF0dHJpYnV0ZShcIngtdG9vbGJhclwiKTtcclxufSk7XHJcbiJdfQ==
