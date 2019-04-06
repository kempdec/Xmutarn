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
},{"./Component":1,"./Overlay":4}],3:[function(require,module,exports){
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
},{"./Component":1}],5:[function(require,module,exports){
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
},{"./Component":1}],6:[function(require,module,exports){
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvY29tcG9uZW50cy9Db21wb25lbnQudHMiLCJzcmMvdHMvY29tcG9uZW50cy9EaWFsb2cudHMiLCJzcmMvdHMvY29tcG9uZW50cy9OYXZpZ2F0aW9uRHJhd2VyLnRzIiwic3JjL3RzL2NvbXBvbmVudHMvT3ZlcmxheS50cyIsInNyYy90cy9jb21wb25lbnRzL1Rvb2xiYXIudHMiLCJzcmMvdHMvY29tcG9uZW50cy9pbmRleC50cyIsInNyYy90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7SUFVRSxtQkFBWSxPQUFvQjtRQUU5QixJQUFJLENBQUMsT0FBTyxFQUFFO1lBRVosTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUdELHNCQUFXLDhCQUFPO2FBQWxCO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0gsZ0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkQscUNBQWdDO0FBQ2hDLHlDQUFvQztBQUdwQztJQUFvQywwQkFBUztJQU8zQyxnQkFBWSxPQUFvQjtRQUFoQyxZQUVFLGtCQUFNLE9BQU8sQ0FBQyxTQUdmO1FBR08sY0FBUSxHQUFZLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFKM0MsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztJQUN2QyxDQUFDO0lBY00scUJBQUksR0FBWCxVQUFZLFVBQTBCO1FBQTFCLDJCQUFBLEVBQUEsaUJBQTBCO1FBRXBDLElBQUksVUFBVSxFQUFFO1lBRWQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QjtRQUVE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QWtCLEVBQUU7SUFFNUMsbUJBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6Qyw2QkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2RCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gY29tcG9uZW50ZS4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIEVsZW1lbnRvIGRvIGNvbXBvbmVudGUuICovXHJcbiAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBDb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIGNvbXBvbmVudGUuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gZG8gY29tcG9uZW50ZSBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIE9idMOpbSBvIGVsZW1lbnRvIGRvIGNvbXBvbmVudGUuICovXHJcbiAgcHVibGljIGdldCBlbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IE92ZXJsYXkgZnJvbSBcIi4vT3ZlcmxheVwiO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gZGnDoWxvZ28uICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBEaWFsb2cuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIGRpw6Fsb2dvLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaWFsb2dcIik7XHJcbiAgfVxyXG5cclxuICAvKiogT3ZlcmxheS4gKi9cclxuICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5ID0gT3ZlcmxheS5jcmVhdGUoKTtcclxuXHJcbiAgLyoqIENsYXNzZSBDU1MgZGUgYWJlcnR1cmEgZG8gZGnDoWxvZ28uICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX2RpYWxvZ09wZW5DbGFzczogc3RyaW5nID0gXCJkaWFsb2dfb3BlblwiO1xyXG5cclxuICAvKipcclxuICAgKiBBYnJlIG8gZGnDoWxvZ28uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXNlT3ZlcmxheSBVbSBzaW5hbGl6YWRvciBpbmRpY2FuZG8gc2UgZGV2ZSBzZXIgdXRpbGl6YWRvIHVtIG92ZXJsYXkgbmEgYWJlcnR1cmEgZG8gZGnDoWxvZ28uIE8gcGFkcsOjbyDDqVxyXG4gICAqIFwidHJ1ZVwiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBvcGVuKHVzZU92ZXJsYXk6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHVzZU92ZXJsYXkpIHtcclxuXHJcbiAgICAgIHRoaXMuX292ZXJsYXkuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKERpYWxvZy5fZGlhbG9nT3BlbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgYWJlcnR1cmEgZG8gZGnDoWxvZ28gcGFyYSBldmVudG9zIGRvIHRpcG8gZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBvdXZpbnRlIGRlIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvLlxyXG4gICAqIEBwYXJhbSB0eXBlIE8gdGlwbyBkZSBldmVudG8uIE8gcGFkcsOjbyDDqSBcImNsaWNrXCIuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZE9wZW5MaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgdHlwZTogc3RyaW5nID0gXCJjbGlja1wiKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIG91dmllbnRlIGRlIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgdGhpcy5vcGVuKCk7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBGZWNoYSBvIGRpw6Fsb2dvLiAqL1xyXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLl9vdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShEaWFsb2cuX2RpYWxvZ09wZW5DbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGZlY2hhbWVudG8gZG8gZGnDoWxvZ28gcGFyYSBldmVudG9zIGRvIHRpcG8gZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBvdXZpbnRlIGRlIGZlY2hhbWVudG8gZG8gZGnDoWxvZ28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkQ2xvc2VMaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgdHlwZTogc3RyaW5nID0gXCJjbGlja1wiKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIG91dmllbnRlIGRlIGZlY2hhbWVudG8gZG8gZGnDoWxvZ28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBEaWFsb2csIGEgcGFydGlyIGRvIG5vbWUgZG8gYXRyaWJ1dG8gSFRNTCBlc3BlY2lmaWNhZG8uIE9zIGVsZW1lbnRvcyBkZSBkacOhbG9nb1xyXG4gICAqIGRldmVtIHRlciB1bSBpZGVudGlmaWNhZG9yIHBhcmEgdGVyZW0gc3VhcyBpbnN0w6JuY2lhcyBpbmljaWFsaXphZGFzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgTyBub21lIGRvIGF0cmlidXRvIEhUTUwuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImlkXCIpKSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgZGlhbG9nID0gbmV3IERpYWxvZyhlbGVtZW50KTtcclxuICAgICAgICAgIGNvbnN0IGRpYWxvZ0lkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1vcGVuLWRpYWxvZz1cIiR7ZGlhbG9nSWR9XCJdYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBkaWFsb2cuYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgICBkaWFsb2cuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1jbG9zZS1kaWFsb2ddYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBkaWFsb2cuYWRkQ2xvc2VMaXN0ZW5lcihlbGVtZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT3ZlcmxheVxyXG59IGZyb20gXCIuXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bWEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uRHJhd2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIE5hdmlnYXRpb25EcmF3ZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmF2aWdhdGlvbi1kcmF3ZXJcIik7XHJcbiAgfVxyXG5cclxuICAvKiogT3ZlcmxheS4gKi9cclxuICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5ID0gT3ZlcmxheS5jcmVhdGUoKTtcclxuXHJcbiAgLyoqIENsYXNzZSBDU1MgZGUgYWJlcnR1cmEgZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9vcGVuQ2xhc3M6IHN0cmluZyA9IFwibmF2aWdhdGlvbi1kcmF3ZXJfb3BlblwiO1xyXG5cclxuICAvKipcclxuICAgKiBBYnJlIGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZU92ZXJsYXkgVW0gc2luYWxpemFkb3IgaW5kaWNhbmRvIHNlIGRldmUgc2VyIHV0aWxpemFkbyB1bSBvdmVybGF5IG5hIGFiZXJ0dXJhIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby4gT1xyXG4gICAqIHBhZHLDo28gw6kgXCJ0cnVlXCIuXHJcbiAgICovXHJcbiAgcHVibGljIG9wZW4odXNlT3ZlcmxheTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodXNlT3ZlcmxheSkge1xyXG5cclxuICAgICAgdGhpcy5fb3ZlcmxheS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoTmF2aWdhdGlvbkRyYXdlci5fb3BlbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgYWJlcnR1cmEgZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImNsaWNrXCIpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aWVudGUgZGUgYWJlcnR1cmEgZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgdGhpcy5vcGVuKCk7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBGZWNoYSBhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby4gKi9cclxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTmF2aWdhdGlvbkRyYXdlci5fb3BlbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28gcGFyYSBldmVudG9zIGRvIHRpcG8gZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBvdXZpbnRlIGRlIGZlY2hhbWVudG8gZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLlxyXG4gICAqIEBwYXJhbSB0eXBlIE8gdGlwbyBkZSBldmVudG8uIE8gcGFkcsOjbyDDqSBcImNsaWNrXCIuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZENsb3NlTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBmZWNoYW1lbnRvIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8OjbyBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBlID0+IHtcclxuXHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIE5hdmlnYXRpb25EcmF3ZXIsIGEgcGFydGlyIGRvIG5vbWUgZG8gYXRyaWJ1dG8gSFRNTCBlc3BlY2lmaWNhZG8uIE9zIGVsZW1lbnRvcyBkZVxyXG4gICAqIGdhdmV0YSBkZSBuYXZlZ2HDp8OjbyBkZXZlbSB0ZXIgdW0gaWRlbnRpZmljYWRvciBwYXJhIHRlcmVtIHN1YXMgaW5zdMOibmNpYXMgaW5pY2lhbGl6YWRhcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIE8gbm9tZSBkbyBhdHJpYnV0byBIVE1MLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEZyb21IdG1sQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9XWApXHJcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IG5hdkRyYXdlciA9IG5ldyBOYXZpZ2F0aW9uRHJhd2VyKGVsZW1lbnQpO1xyXG4gICAgICAgICAgY29uc3QgbmF2RHJhd2VySWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG5cclxuICAgICAgICAgIG5hdkRyYXdlci5hZGRDbG9zZUxpc3RlbmVyKG5hdkRyYXdlci5fb3ZlcmxheS5lbGVtZW50KTtcclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1vcGVuLW5hdi1kcmF3ZXI9XCIke25hdkRyYXdlcklkfVwiXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gbmF2RHJhd2VyLmFkZE9wZW5MaXN0ZW5lcihlbGVtZW50KSk7XHJcblxyXG4gICAgICAgICAgbmF2RHJhd2VyLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3gtbGlzdGVuZXItY2xvc2UtbmF2LWRyYXdlcl1gKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IG5hdkRyYXdlci5hZGRDbG9zZUxpc3RlbmVyKGVsZW1lbnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gb3ZlcmxheS4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBPdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBkbyBvdmVybGF5LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENsYXNzZSBDU1MgZGUgYXRpdmHDp8OjbyBkbyBvdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9vdmVybGF5QWN0aXZlQ2xhc3M6IHN0cmluZyA9IFwib3ZlcmxheV9hY3RpdmVcIjtcclxuXHJcbiAgLyoqXHJcbiAgICogRXhpYmkgbyBvdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBhdMOpIGEgZXhpYmnDp8OjbyBkbyBvdmVybGF5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaG93KGRlbGF5OiBudW1iZXIgPSAzMDApIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKE92ZXJsYXkuX292ZXJsYXlBY3RpdmVDbGFzcyksIGRlbGF5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9taXRlIG8gb3ZlcmxheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZWxheSBPIGRlbGF5IGVtIG1pbGlzc2VndW5kb3MgYXTDqSBhIG9taXNzw6NvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgcHVibGljIGhpZGUoZGVsYXk6IG51bWJlciA9IDMwMCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoT3ZlcmxheS5fb3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyaWEgdW0gb3ZlcmxheS4gKi9cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBPdmVybGF5IHtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXkoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCBUb29sYmFyT3B0aW9ucyBmcm9tIFwiLi9Ub29sYmFyT3B0aW9uc1wiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW1hIGJhcnJhIGRlIGZlcnJhbWVudGFzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIFRvb2xiYXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRhIGJhcnJhIGRlIGZlcnJhbWVudGFzLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIEFzIG9ww6fDtWVzIGRhIGJhcnJhIGRlIGZlcnJhbWVudGFzLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvcHRpb25zOiBUb29sYmFyT3B0aW9ucyA9IHsgaGlkZUluU2Nyb2xsOiB0cnVlIH0pIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5oaWRlSW5TY3JvbGwpIHtcclxuXHJcbiAgICAgIHRoaXMuaGlkZUluU2Nyb2xsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBvbWlzc8OjbyBkYSBiYXJyYSBkZSBmZXJyYW1lbnRhcy4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfdG9vbGJhckhpZGVDbGFzczogc3RyaW5nID0gXCJ0b29sYmFyX2hpZGVcIjtcclxuXHJcbiAgLyoqIE9taXRlIGEgYmFycmEgZGUgZmVycmFtZW50YXMgbmEgcm9sYWdlbSBkYSBww6FnaW5hLiAqL1xyXG4gIHB1YmxpYyBoaWRlSW5TY3JvbGwoKTogdm9pZCB7XHJcblxyXG4gICAgbGV0IGxhc3RTY3JvbGxUb3A6IG51bWJlciA9IDA7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wOiBudW1iZXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgaWYgKHNjcm9sbFRvcCA+IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgJiYgc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChUb29sYmFyLl90b29sYmFySGlkZUNsYXNzKTtcclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoVG9vbGJhci5fdG9vbGJhckhpZGVDbGFzcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBUb29sYmFyLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgTyBub21lIGRvIGF0cmlidXRvIEhUTUwuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIG5ldyBUb29sYmFyKGVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9EaWFsb2dcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25EcmF3ZXIgZnJvbSBcIi4vTmF2aWdhdGlvbkRyYXdlclwiO1xyXG5pbXBvcnQgT3ZlcmxheSBmcm9tIFwiLi9PdmVybGF5XCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL1Rvb2xiYXJcIjtcclxuaW1wb3J0IFRvb2xiYXJPcHRpb25zIGZyb20gXCIuL1Rvb2xiYXJPcHRpb25zXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBEaWFsb2csXHJcbiAgTmF2aWdhdGlvbkRyYXdlcixcclxuICBPdmVybGF5LFxyXG4gIFRvb2xiYXIsXHJcbiAgVG9vbGJhck9wdGlvbnNcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBEaWFsb2csXHJcbiAgTmF2aWdhdGlvbkRyYXdlcixcclxuICBPdmVybGF5LFxyXG4gIFRvb2xiYXJcclxufSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIERpYWxvZyxcclxuICBOYXZpZ2F0aW9uRHJhd2VyLFxyXG4gIE92ZXJsYXksXHJcbiAgVG9vbGJhclxyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cclxuICBEaWFsb2cuaW5pdEZyb21IdG1sQXR0cmlidXRlKFwieC1kaWFsb2dcIik7XHJcbiAgTmF2aWdhdGlvbkRyYXdlci5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LW5hdi1kcmF3ZXJcIik7XHJcbiAgVG9vbGJhci5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LXRvb2xiYXJcIik7XHJcbn0pO1xyXG4iXX0=
