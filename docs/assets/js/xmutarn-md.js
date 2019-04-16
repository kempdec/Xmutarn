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
            throw new Error("O elemento ouvinte de abertura do diálogo deve ser fornecido.");
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
},{".":7}],3:[function(require,module,exports){
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
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(element, options) {
        if (options === void 0) { options = { removeColorOnFocus: true }; }
        var _this = _super.call(this, element) || this;
        if (!element.classList.contains("input")) {
            throw new Error("O elemento responsável pelo input não contêm a classe 'input'.");
        }
        _this.input = element.querySelector(".input--field");
        if (!_this.input) {
            throw new Error("O elemento responsável pelo o input não contém o elemento input com a classe 'input--field'.");
        }
        _this.label = element.querySelector(".input--label");
        if (!_this.label) {
            if (!options.label) {
                throw new Error("O elemento responsável pelo input não contém o elemento do rótulo do input com a classe `input--label`.");
            }
            _this.setLabel(options.label);
        }
        if (_this.input.value) {
            _this.activeLabel();
        }
        _this.addToggleLabelListener(_this.input);
        if (options.removeColorOnFocus) {
            _this.addRemoveColorListener(_this.input);
        }
        return _this;
    }
    Input.prototype.activeLabel = function () {
        this.label.classList.add(Input.labelActiveClass);
    };
    Input.prototype.disableLabel = function () {
        this.label.classList.remove(Input.labelActiveClass);
    };
    Input.prototype.addToggleLabelListener = function (element, type) {
        var _this = this;
        if (type === void 0) { type = "blur"; }
        if (!element) {
            throw new Error("O elemento ouvinte de alternância do rótulo do input deve ser fornecido.");
        }
        element.addEventListener(type, function (e) {
            e.preventDefault();
            if (_this.input.value) {
                _this.activeLabel();
                return;
            }
            _this.disableLabel();
        });
    };
    Input.prototype.addRemoveColorListener = function (element, type) {
        if (type === void 0) { type = "focus"; }
        if (!element) {
            throw new Error("O elemento ouvinte de remoção da cor do input deve ser fornecido.");
        }
        element.addEventListener(type, function (e) {
            e.preventDefault();
            element.classList.remove("input_alert-color");
        });
    };
    Input.prototype.setLabel = function (text) {
        this.label.innerText = text;
    };
    Input.initFromHtmlAttribute = function (attributeName, labelAttributeName) {
        document.querySelectorAll("[" + attributeName + "]")
            .forEach(function (element) {
            var options;
            if (element.hasAttribute(labelAttributeName)) {
                options.label = element.getAttribute(labelAttributeName);
            }
            new Input(element, options);
        });
    };
    Input.labelActiveClass = "input--label_active";
    return Input;
}(_1.Component));
exports.default = Input;
},{".":7}],4:[function(require,module,exports){
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
},{".":7}],5:[function(require,module,exports){
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
},{".":7}],6:[function(require,module,exports){
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
            }
            lastScrollTop = scrollTop;
        });
    };
    Toolbar.initFromHtmlAttribute = function (attributeName) {
        document.querySelectorAll("[" + attributeName + "]")
            .forEach(function (element) { return new Toolbar(element); });
    };
    Toolbar._toolbarHideClass = "toolbar_hide";
    return Toolbar;
}(_1.Component));
exports.default = Toolbar;
},{".":7}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = require("./Component");
exports.Component = Component_1.default;
var Dialog_1 = require("./Dialog");
exports.Dialog = Dialog_1.default;
var Input_1 = require("./Input");
exports.Input = Input_1.default;
var NavigationDrawer_1 = require("./NavigationDrawer");
exports.NavigationDrawer = NavigationDrawer_1.default;
var Overlay_1 = require("./Overlay");
exports.Overlay = Overlay_1.default;
var Toolbar_1 = require("./Toolbar");
exports.Toolbar = Toolbar_1.default;
},{"./Component":1,"./Dialog":2,"./Input":3,"./NavigationDrawer":4,"./Overlay":5,"./Toolbar":6}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("./components");
exports.Dialog = components_1.Dialog;
exports.Input = components_1.Input;
exports.NavigationDrawer = components_1.NavigationDrawer;
exports.Overlay = components_1.Overlay;
exports.Toolbar = components_1.Toolbar;
document.addEventListener("DOMContentLoaded", function () {
    components_1.Dialog.initFromHtmlAttribute("x-dialog");
    components_1.Input.initFromHtmlAttribute("x-input", "x-input-label");
    components_1.NavigationDrawer.initFromHtmlAttribute("x-nav-drawer");
    components_1.Toolbar.initFromHtmlAttribute("x-toolbar");
});
},{"./components":7}]},{},[8])(8)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvY29tcG9uZW50cy9Db21wb25lbnQudHMiLCJzcmMvdHMvY29tcG9uZW50cy9EaWFsb2cudHMiLCJzcmMvdHMvY29tcG9uZW50cy9JbnB1dC50cyIsInNyYy90cy9jb21wb25lbnRzL05hdmlnYXRpb25EcmF3ZXIudHMiLCJzcmMvdHMvY29tcG9uZW50cy9PdmVybGF5LnRzIiwic3JjL3RzL2NvbXBvbmVudHMvVG9vbGJhci50cyIsInNyYy90cy9jb21wb25lbnRzL2luZGV4LnRzIiwic3JjL3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTtJQVVFLG1CQUFZLE9BQW9CO1FBRTlCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFFWixNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQsc0JBR1c7QUFHWDtJQUFvQywwQkFBUztJQU8zQyxnQkFBWSxPQUFvQjtRQUFoQyxZQUVFLGtCQUFNLE9BQU8sQ0FBQyxTQUdmO1FBR08sY0FBUSxHQUFZLFVBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUozQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBQ3ZDLENBQUM7SUFjTSxxQkFBSSxHQUFYLFVBQVksVUFBMEI7UUFBMUIsMkJBQUEsRUFBQSxpQkFBMEI7UUFFcEMsSUFBSSxVQUFVLEVBQUU7WUFFZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0Is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dUIseUJBQWlCLEdBQVcsY0FBYyxDQUFDO0lBaUNyRSxjQUFDO0NBcERELEFBb0RDLENBcERvQyxZQUFTLEdBb0Q3QztrQkFwRG9CLE9BQU87Ozs7QUNONUIseUNBQW9DO0FBU2xDLG9CQVRLLG1CQUFTLENBU0w7QUFSWCxtQ0FBOEI7QUFTNUIsaUJBVEssZ0JBQU0sQ0FTTDtBQVJSLGlDQUE0QjtBQVMxQixnQkFUSyxlQUFLLENBU0w7QUFSUCx1REFBa0Q7QUFTaEQsMkJBVEssMEJBQWdCLENBU0w7QUFSbEIscUNBQWdDO0FBUzlCLGtCQVRLLGlCQUFPLENBU0w7QUFSVCxxQ0FBZ0M7QUFTOUIsa0JBVEssaUJBQU8sQ0FTTDs7OztBQ2RULDJDQU1zQjtBQUdwQixpQkFSQSxtQkFBTSxDQVFBO0FBQ04sZ0JBUkEsa0JBQUssQ0FRQTtBQUNMLDJCQVJBLDZCQUFnQixDQVFBO0FBQ2hCLGtCQVJBLG9CQUFPLENBUUE7QUFDUCxrQkFSQSxvQkFBTyxDQVFBO0FBR1QsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBRTVDLG1CQUFNLENBQUMscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsa0JBQUssQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDeEQsNkJBQWdCLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkQsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM3QyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtIGNvbXBvbmVudGUuICovXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIENvbXBvbmVudCB7XHJcblxyXG4gIC8qKiBPYnTDqW0gbyBlbGVtZW50byBkbyBjb21wb25lbnRlLiAqL1xyXG4gIHB1YmxpYyByZWFkb25seSBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIENvbXBvbmVudC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZG8gY29tcG9uZW50ZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBkbyBjb21wb25lbnRlIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT3ZlcmxheVxyXG59IGZyb20gXCIuXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBkacOhbG9nby4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIERpYWxvZy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZG8gZGnDoWxvZ28uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpYWxvZ1wiKTtcclxuICB9XHJcblxyXG4gIC8qKiBPdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXkgPSBPdmVybGF5LmNyZWF0ZSgpO1xyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhYmVydHVyYSBkbyBkacOhbG9nby4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfZGlhbG9nT3BlbkNsYXNzOiBzdHJpbmcgPSBcImRpYWxvZ19vcGVuXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFicmUgbyBkacOhbG9nby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB1c2VPdmVybGF5IFVtIHNpbmFsaXphZG9yIGluZGljYW5kbyBzZSBkZXZlIHNlciB1dGlsaXphZG8gdW0gb3ZlcmxheSBuYSBhYmVydHVyYSBkbyBkacOhbG9nby4gTyBwYWRyw6NvIMOpXHJcbiAgICogXCJ0cnVlXCIuXHJcbiAgICovXHJcbiAgcHVibGljIG9wZW4odXNlT3ZlcmxheTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodXNlT3ZlcmxheSkge1xyXG5cclxuICAgICAgdGhpcy5fb3ZlcmxheS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoRGlhbG9nLl9kaWFsb2dPcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgYWJlcnR1cmEgZG8gZGnDoWxvZ28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImNsaWNrXCIpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nbyBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBlID0+IHtcclxuXHJcbiAgICAgIHRoaXMub3BlbigpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogRmVjaGEgbyBkacOhbG9nby4gKi9cclxuICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5fb3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoRGlhbG9nLl9kaWFsb2dPcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvLlxyXG4gICAqIEBwYXJhbSB0eXBlIE8gdGlwbyBkZSBldmVudG8uIE8gcGFkcsOjbyDDqSBcImNsaWNrXCIuXHJcbiAgICovXHJcbiAgcHVibGljIGFkZENsb3NlTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgRGlhbG9nLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLiBPcyBlbGVtZW50b3MgZGUgZGnDoWxvZ29cclxuICAgKiBkZXZlbSB0ZXIgdW0gaWRlbnRpZmljYWRvciBwYXJhIHRlcmVtIHN1YXMgaW5zdMOibmNpYXMgaW5pY2lhbGl6YWRhcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIE8gbm9tZSBkbyBhdHJpYnV0byBIVE1MLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgaW5pdEZyb21IdG1sQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9XWApXHJcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRpYWxvZyA9IG5ldyBEaWFsb2coZWxlbWVudCk7XHJcbiAgICAgICAgICBjb25zdCBkaWFsb2dJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3gtbGlzdGVuZXItb3Blbi1kaWFsb2c9XCIke2RpYWxvZ0lkfVwiXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZGlhbG9nLmFkZE9wZW5MaXN0ZW5lcihlbGVtZW50KSk7XHJcblxyXG4gICAgICAgICAgZGlhbG9nLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChgW3gtbGlzdGVuZXItY2xvc2UtZGlhbG9nXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZGlhbG9nLmFkZENsb3NlTGlzdGVuZXIoZWxlbWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuXCI7XHJcbmltcG9ydCB7IElucHV0T3B0aW9ucyB9IGZyb20gXCIuL29wdGlvbnNcIjtcclxuXHJcbi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtIGlucHV0LiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIC8qKiBPIGVsZW1lbnRvIGRvIGlucHV0LiAqL1xyXG4gIHJlYWRvbmx5IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAvKiogTyBlbGVtZW50byBkbyByw7N0dWxvIGRvIGlucHV0LiAqL1xyXG4gIHJlYWRvbmx5IGxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgSW5wdXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIHJlc3BvbnPDoXZlbCBwZWxvIG8gaW5wdXQuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgQXMgb3DDp8O1ZXMgZG8gaW5wdXQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IElucHV0T3B0aW9ucyA9IHsgcmVtb3ZlQ29sb3JPbkZvY3VzOiB0cnVlIH0pIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5wdXRcIikpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gcmVzcG9uc8OhdmVsIHBlbG8gaW5wdXQgbsOjbyBjb250w6ptIGEgY2xhc3NlICdpbnB1dCcuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtLWZpZWxkXCIpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbnB1dCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byByZXNwb25zw6F2ZWwgcGVsbyBvIGlucHV0IG7Do28gY29udMOpbSBvIGVsZW1lbnRvIGlucHV0IGNvbSBhIGNsYXNzZSAnaW5wdXQtLWZpZWxkJy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC0tbGFiZWxcIik7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxhYmVsKSB7XHJcblxyXG4gICAgICBpZiAoIW9wdGlvbnMubGFiZWwpIHtcclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgXCJPIGVsZW1lbnRvIHJlc3BvbnPDoXZlbCBwZWxvIGlucHV0IG7Do28gY29udMOpbSBvIGVsZW1lbnRvIGRvIHLDs3R1bG8gZG8gaW5wdXQgY29tIGEgY2xhc3NlIGBpbnB1dC0tbGFiZWxgLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRMYWJlbChvcHRpb25zLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSkge1xyXG5cclxuICAgICAgdGhpcy5hY3RpdmVMYWJlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkVG9nZ2xlTGFiZWxMaXN0ZW5lcih0aGlzLmlucHV0KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5yZW1vdmVDb2xvck9uRm9jdXMpIHtcclxuXHJcbiAgICAgIHRoaXMuYWRkUmVtb3ZlQ29sb3JMaXN0ZW5lcih0aGlzLmlucHV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBBIGNsYXNzZSBDU1MgZGUgYXRpdmHDp8OjbyBkbyByw7N0dWxvIGRvIGlucHV0LiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGxhYmVsQWN0aXZlQ2xhc3M6IHN0cmluZyA9IFwiaW5wdXQtLWxhYmVsX2FjdGl2ZVwiO1xyXG5cclxuICAvKiogQXRpdmEgbyBlbGVtZW50byBkbyByw7N0dWxvIGRvIGlucHV0LiAqL1xyXG4gIHByaXZhdGUgYWN0aXZlTGFiZWwoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKElucHV0LmxhYmVsQWN0aXZlQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqIERlc2F0aXZhIG8gZWxlbWVudG8gZG8gcsOzdHVsbyBkbyBpbnB1dC4gKi9cclxuICBwcml2YXRlIGRpc2FibGVMYWJlbCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoSW5wdXQubGFiZWxBY3RpdmVDbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGFsdGVybsOibmNpYSBkbyByw7N0dWxvIGRvIGlucHV0IHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGUgYWx0ZXJuw6JuY2lhIGRvIHLDs3R1bG8gZG8gaW5wdXQuXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiYmx1clwiLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkVG9nZ2xlTGFiZWxMaXN0ZW5lcihlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImJsdXJcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpbnRlIGRlIGFsdGVybsOibmNpYSBkbyByw7N0dWxvIGRvIGlucHV0IGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaW5wdXQudmFsdWUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVMYWJlbCgpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZGlzYWJsZUxhYmVsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgcmVtb8Onw6NvIGRhIGNvciBkbyBpbnB1dCBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgcmVtb8Onw6NvIGRhIGNvciBkbyBpbnB1dC5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJmb2N1c1wiLlxyXG4gICAqL1xyXG4gIGFkZFJlbW92ZUNvbG9yTGlzdGVuZXIoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCwgdHlwZTogc3RyaW5nID0gXCJmb2N1c1wiKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aW50ZSBkZSByZW1vw6fDo28gZGEgY29yIGRvIGlucHV0IGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5wdXRfYWxlcnQtY29sb3JcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZSBvIHLDs3R1bG8gZG8gaW5wdXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdGV4dCBPIHRleHRvIGRvIHLDs3R1bG8uXHJcbiAgICovXHJcbiAgc2V0TGFiZWwodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5sYWJlbC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6NuY2lhIGRlIElucHV0LCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgTyBub21lIGRvIGF0cmlidXRvIEhUTUwuXHJcbiAgICovXHJcbiAgc3RhdGljIGluaXRGcm9tSHRtbEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIGxhYmVsQXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zOiBJbnB1dE9wdGlvbnM7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShsYWJlbEF0dHJpYnV0ZU5hbWUpKSB7XHJcblxyXG4gICAgICAgICAgb3B0aW9ucy5sYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGxhYmVsQXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXcgSW5wdXQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPdmVybGF5XHJcbn0gZnJvbSBcIi5cIjtcclxuXHJcbi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25EcmF3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgTmF2aWdhdGlvbkRyYXdlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLWRyYXdlclwiKTtcclxuICB9XHJcblxyXG4gIC8qKiBPdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXkgPSBPdmVybGF5LmNyZWF0ZSgpO1xyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX29wZW5DbGFzczogc3RyaW5nID0gXCJuYXZpZ2F0aW9uLWRyYXdlcl9vcGVuXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFicmUgYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXNlT3ZlcmxheSBVbSBzaW5hbGl6YWRvciBpbmRpY2FuZG8gc2UgZGV2ZSBzZXIgdXRpbGl6YWRvIHVtIG92ZXJsYXkgbmEgYWJlcnR1cmEgZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLiBPXHJcbiAgICogcGFkcsOjbyDDqSBcInRydWVcIi5cclxuICAgKi9cclxuICBwdWJsaWMgb3Blbih1c2VPdmVybGF5OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh1c2VPdmVybGF5KSB7XHJcblxyXG4gICAgICB0aGlzLl9vdmVybGF5LnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChOYXZpZ2F0aW9uRHJhd2VyLl9vcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28gcGFyYSBldmVudG9zIGRvIHRpcG8gZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBvdXZpbnRlIGRlIGFiZXJ0dXJhIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRPcGVuTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZlY2hhIGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLiAqL1xyXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLl9vdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShOYXZpZ2F0aW9uRHJhd2VyLl9vcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8OjbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkQ2xvc2VMaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgdHlwZTogc3RyaW5nID0gXCJjbGlja1wiKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIG91dmllbnRlIGRlIGZlY2hhbWVudG8gZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgTmF2aWdhdGlvbkRyYXdlciwgYSBwYXJ0aXIgZG8gbm9tZSBkbyBhdHJpYnV0byBIVE1MIGVzcGVjaWZpY2Fkby4gT3MgZWxlbWVudG9zIGRlXHJcbiAgICogZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvIGRldmVtIHRlciB1bSBpZGVudGlmaWNhZG9yIHBhcmEgdGVyZW0gc3VhcyBpbnN0w6JuY2lhcyBpbmljaWFsaXphZGFzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgTyBub21lIGRvIGF0cmlidXRvIEhUTUwuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImlkXCIpKSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgbmF2RHJhd2VyID0gbmV3IE5hdmlnYXRpb25EcmF3ZXIoZWxlbWVudCk7XHJcbiAgICAgICAgICBjb25zdCBuYXZEcmF3ZXJJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgbmF2RHJhd2VyLmFkZENsb3NlTGlzdGVuZXIobmF2RHJhd2VyLl9vdmVybGF5LmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4LWxpc3RlbmVyLW9wZW4tbmF2LWRyYXdlcj1cIiR7bmF2RHJhd2VySWR9XCJdYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuYXZEcmF3ZXIuYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgICBuYXZEcmF3ZXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1jbG9zZS1uYXYtZHJhd2VyXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gbmF2RHJhd2VyLmFkZENsb3NlTGlzdGVuZXIoZWxlbWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBvdmVybGF5LiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIE92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhdGl2YcOnw6NvIGRvIG92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX292ZXJsYXlBY3RpdmVDbGFzczogc3RyaW5nID0gXCJvdmVybGF5X2FjdGl2ZVwiO1xyXG5cclxuICAvKipcclxuICAgKiBFeGliaSBvIG92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVsYXkgTyBkZWxheSBlbSBtaWxpc3NlZ3VuZG9zIGF0w6kgYSBleGliacOnw6NvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3coZGVsYXk6IG51bWJlciA9IDMwMCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoT3ZlcmxheS5fb3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT21pdGUgbyBvdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBhdMOpIGEgb21pc3PDo28gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBwdWJsaWMgaGlkZShkZWxheTogbnVtYmVyID0gMzAwKSB7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShPdmVybGF5Ll9vdmVybGF5QWN0aXZlQ2xhc3MpLCBkZWxheSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JpYSB1bSBvdmVybGF5LiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IE92ZXJsYXkge1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgT3ZlcmxheShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVG9vbGJhck9wdGlvbnNcclxufSBmcm9tIFwiLlwiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW1hIGJhcnJhIGRlIGZlcnJhbWVudGFzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIFRvb2xiYXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRhIGJhcnJhIGRlIGZlcnJhbWVudGFzLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIEFzIG9ww6fDtWVzIGRhIGJhcnJhIGRlIGZlcnJhbWVudGFzLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvcHRpb25zOiBUb29sYmFyT3B0aW9ucyA9IHsgaGlkZUluU2Nyb2xsOiB0cnVlIH0pIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5oaWRlSW5TY3JvbGwpIHtcclxuXHJcbiAgICAgIHRoaXMuaGlkZUluU2Nyb2xsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBvbWlzc8OjbyBkYSBiYXJyYSBkZSBmZXJyYW1lbnRhcy4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfdG9vbGJhckhpZGVDbGFzczogc3RyaW5nID0gXCJ0b29sYmFyX2hpZGVcIjtcclxuXHJcbiAgLyoqIE9taXRlIGEgYmFycmEgZGUgZmVycmFtZW50YXMgbmEgcm9sYWdlbSBkYSBww6FnaW5hLiAqL1xyXG4gIHB1YmxpYyBoaWRlSW5TY3JvbGwoKTogdm9pZCB7XHJcblxyXG4gICAgbGV0IGxhc3RTY3JvbGxUb3A6IG51bWJlciA9IDA7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wOiBudW1iZXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgaWYgKHNjcm9sbFRvcCA+IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgJiYgc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChUb29sYmFyLl90b29sYmFySGlkZUNsYXNzKTtcclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoVG9vbGJhci5fdG9vbGJhckhpZGVDbGFzcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBUb29sYmFyLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgTyBub21lIGRvIGF0cmlidXRvIEhUTUwuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuZXcgVG9vbGJhcihlbGVtZW50KSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkRyYXdlciBmcm9tIFwiLi9OYXZpZ2F0aW9uRHJhd2VyXCI7XHJcbmltcG9ydCBPdmVybGF5IGZyb20gXCIuL092ZXJsYXlcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4vVG9vbGJhclwiO1xyXG5pbXBvcnQgVG9vbGJhck9wdGlvbnMgZnJvbSBcIi4vVG9vbGJhck9wdGlvbnNcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIERpYWxvZyxcclxuICBJbnB1dCxcclxuICBOYXZpZ2F0aW9uRHJhd2VyLFxyXG4gIE92ZXJsYXksXHJcbiAgVG9vbGJhcixcclxuICBUb29sYmFyT3B0aW9uc1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIERpYWxvZyxcclxuICBJbnB1dCxcclxuICBOYXZpZ2F0aW9uRHJhd2VyLFxyXG4gIE92ZXJsYXksXHJcbiAgVG9vbGJhclxyXG59IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIElucHV0LFxyXG4gIE5hdmlnYXRpb25EcmF3ZXIsXHJcbiAgT3ZlcmxheSxcclxuICBUb29sYmFyXHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG4gIERpYWxvZy5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LWRpYWxvZ1wiKTtcclxuICBJbnB1dC5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LWlucHV0XCIsIFwieC1pbnB1dC1sYWJlbFwiKTtcclxuICBOYXZpZ2F0aW9uRHJhd2VyLmluaXRGcm9tSHRtbEF0dHJpYnV0ZShcIngtbmF2LWRyYXdlclwiKTtcclxuICBUb29sYmFyLmluaXRGcm9tSHRtbEF0dHJpYnV0ZShcIngtdG9vbGJhclwiKTtcclxufSk7XHJcbiJdfQ==
