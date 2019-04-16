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
        _this.overlay = _1.Overlay.create();
        _this.element.classList.add("dialog");
        return _this;
    }
    Dialog.prototype.open = function (useOverlay) {
        if (useOverlay === void 0) { useOverlay = true; }
        if (useOverlay) {
            this.overlay.show();
        }
        this.element.classList.add(Dialog.dialogOpenClass);
    };
    Dialog.prototype.addOpenListener = function (element, type) {
        var _this = this;
        if (type === void 0) { type = "click"; }
        if (!element) {
            throw new Error("O elemento ouvinte de abertura do diálogo deve ser fornecido.");
        }
        element.addEventListener(type, function (e) {
            e.preventDefault();
            _this.open();
        });
    };
    Dialog.prototype.close = function () {
        this.overlay.hide();
        this.element.classList.remove(Dialog.dialogOpenClass);
    };
    Dialog.prototype.addCloseListener = function (element, type) {
        var _this = this;
        if (type === void 0) { type = "click"; }
        if (!element) {
            throw new Error("O elemento ouviente de fechamento do diálogo deve ser fornecido.");
        }
        element.addEventListener(type, function (e) {
            e.preventDefault();
            _this.close();
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
    Dialog.dialogOpenClass = "dialog_open";
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
        element.classList.add("input");
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
        _this.overlay = _1.Overlay.create();
        _this.element.classList.add("navigation-drawer");
        return _this;
    }
    NavigationDrawer.prototype.open = function (useOverlay) {
        if (useOverlay === void 0) { useOverlay = true; }
        if (useOverlay) {
            this.overlay.show();
        }
        this.element.classList.add(NavigationDrawer.openClass);
    };
    NavigationDrawer.prototype.addOpenListener = function (element, type) {
        var _this = this;
        if (type === void 0) { type = "click"; }
        if (!element) {
            throw new Error("O elemento ouviente de abertura da gaveta de navegação deve ser fornecido.");
        }
        element.addEventListener(type, function (e) {
            e.preventDefault();
            _this.open();
        });
    };
    NavigationDrawer.prototype.close = function () {
        this.overlay.hide();
        this.element.classList.remove(NavigationDrawer.openClass);
    };
    NavigationDrawer.prototype.addCloseListener = function (element, type) {
        var _this = this;
        if (type === void 0) { type = "click"; }
        if (!element) {
            throw new Error("O elemento ouviente de fechamento da gaveta de navegação deve ser fornecido.");
        }
        element.addEventListener(type, function (e) {
            e.preventDefault();
            _this.close();
        });
    };
    NavigationDrawer.initFromHtmlAttribute = function (attributeName) {
        document.querySelectorAll("[" + attributeName + "]")
            .forEach(function (element) {
            if (element.hasAttribute("id")) {
                var navDrawer_1 = new NavigationDrawer(element);
                var navDrawerId = element.getAttribute("id");
                navDrawer_1.addCloseListener(navDrawer_1.overlay.element);
                document.querySelectorAll("[x-listener-open-nav-drawer=\"" + navDrawerId + "\"]")
                    .forEach(function (element) { return navDrawer_1.addOpenListener(element); });
                navDrawer_1.element.querySelectorAll("[x-listener-close-nav-drawer]")
                    .forEach(function (element) { return navDrawer_1.addCloseListener(element); });
            }
        });
    };
    NavigationDrawer.openClass = "navigation-drawer_open";
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
        setTimeout(function () { return _this.element.classList.add(Overlay.overlayActiveClass); }, delay);
    };
    Overlay.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 300; }
        setTimeout(function () { return _this.element.classList.remove(Overlay.overlayActiveClass); }, delay);
    };
    Overlay.create = function () {
        var element = document.createElement("div");
        document.querySelector("body").appendChild(element);
        return new Overlay(element);
    };
    Overlay.overlayActiveClass = "overlay_active";
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
                _this.element.classList.add(Toolbar.toolbarHideClass);
            }
            else {
                _this.element.classList.remove(Toolbar.toolbarHideClass);
            }
            lastScrollTop = scrollTop;
        });
    };
    Toolbar.initFromHtmlAttribute = function (attributeName) {
        document.querySelectorAll("[" + attributeName + "]")
            .forEach(function (element) { return new Toolbar(element); });
    };
    Toolbar.toolbarHideClass = "toolbar_hide";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvY29tcG9uZW50cy9Db21wb25lbnQudHMiLCJzcmMvdHMvY29tcG9uZW50cy9EaWFsb2cudHMiLCJzcmMvdHMvY29tcG9uZW50cy9JbnB1dC50cyIsInNyYy90cy9jb21wb25lbnRzL05hdmlnYXRpb25EcmF3ZXIudHMiLCJzcmMvdHMvY29tcG9uZW50cy9PdmVybGF5LnRzIiwic3JjL3RzL2NvbXBvbmVudHMvVG9vbGJhci50cyIsInNyYy90cy9jb21wb25lbnRzL2luZGV4LnRzIiwic3JjL3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNDQTtJQVVFLG1CQUFZLE9BQW9CO1FBRTlCLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFFWixNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7U0FDakU7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQsc0JBR1c7QUFHWDtJQUFvQywwQkFBUztJQU8zQyxnQkFBWSxPQUFvQjtRQUFoQyxZQUVFLGtCQUFNLE9BQU8sQ0FBQyxTQUdmO1FBR08sYUFBTyxHQUFZLFVBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUoxQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBQ3ZDLENBQUM7SUFjRCxxQkFBSSxHQUFKLFVBQUssVUFBMEI7UUFBMUIsMkJBQUEsRUFBQSxpQkFBMEI7UUFFN0IsSUFBSSxVQUFVLEVBQUU7WUFFZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBUUQsZ0NBQWUsR0FBZixVQUFnQixPQUFvQixFQUFFLElBQXNCO1FBQTVELGlCQWFDO1FBYnFDLHFCQUFBLEVBQUEsY0FBc0I7UUFFMUQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVaLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztTQUNsRjtRQUVELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsVUFBQSxDQUFDO1lBRTlCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVuQixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxzQkFBSyxHQUFMO1FBRUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVwQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFRRCxpQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBb0IsRUFBRSxJQUFzQjtRQUE3RCxpQkFhQztRQWJzQyxxQkFBQSxFQUFBLGNBQXNCO1FBRTNELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFFWixNQUFNLElBQUksS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDckY7UUFFRCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFVBQUEsQ0FBQztZQUU5QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBUU0sNEJBQXFCLEdBQTVCLFVBQTZCLGFBQXFCO1FBRWhELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFJLGFBQWEsTUFBRyxDQUFDO2FBQzVDLE9BQU8sQ0FBQyxVQUFDLE9BQW9CO1lBRTVCLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFFOUIsSUFBTSxRQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25DLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRTVDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQywrQkFBNEIsUUFBUSxRQUFJLENBQUM7cUJBQ2hFLE9BQU8sQ0FBQyxVQUFDLE9BQW9CLElBQUssT0FBQSxRQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7Z0JBRXRFLFFBQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUM7cUJBQ3pELE9BQU8sQ0FBQyxVQUFDLE9BQW9CLElBQUssT0FBQSxRQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQzthQUN4RTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTNGdUIsc0JBQWUsR0FBVyxhQUFhLENBQUM7SUE0RmxFLGFBQUM7Q0E5R0QsQUE4R0MsQ0E5R21DLFlBQVMsR0E4RzVDO2tCQTlHb0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOM0Isc0JBQThCO0FBSTlCO0lBQW1DLHlCQUFTO0lBYzFDLGVBQVksT0FBb0IsRUFBRSxPQUFvRDtRQUFwRCx3QkFBQSxFQUFBLFlBQTBCLGtCQUFrQixFQUFFLElBQUksRUFBRTtRQUF0RixZQUVFLGtCQUFNLE9BQU8sQ0FBQyxTQW1DZjtRQWpDQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUvQixLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUU7WUFFZixNQUFNLElBQUksS0FBSyxDQUFDLDhGQUE4RixDQUFDLENBQUM7U0FDakg7UUFFRCxLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLEVBQUU7WUFFZixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFFbEIsTUFBTSxJQUFJLEtBQUssQ0FDYix5R0FBeUcsQ0FBQyxDQUFDO2FBQzlHO1lBRUQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFFRCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO1lBRXBCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtRQUVELEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEMsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7WUFFOUIsS0FBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7SUFDSCxDQUFDO0lBTU8sMkJBQVcsR0FBbkI7UUFFRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUdPLDRCQUFZLEdBQXBCO1FBRUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFRTyxzQ0FBc0IsR0FBOUIsVUFBK0IsT0FBeUIsRUFBRSxJQUFxQjtRQUEvRSxpQkFvQkM7UUFwQnlELHFCQUFBLEVBQUEsYUFBcUI7UUFFN0UsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVaLE1BQU0sSUFBSSxLQUFLLENBQUMsMEVBQTBFLENBQUMsQ0FBQztTQUM3RjtRQUVELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsVUFBQSxDQUFDO1lBRTlCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVuQixJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUVwQixLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRW5CLE9BQU87YUFDUjtZQUVELEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFRRCxzQ0FBc0IsR0FBdEIsVUFBdUIsT0FBeUIsRUFBRSxJQUFzQjtRQUF0QixxQkFBQSxFQUFBLGNBQXNCO1FBRXRFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7U0FDdEY7UUFFRCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFVBQUEsQ0FBQztZQUU5QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFPRCx3QkFBUSxHQUFSLFVBQVMsSUFBWTtRQUVuQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQU9NLDJCQUFxQixHQUE1QixVQUE2QixhQUFxQixFQUFFLGtCQUEwQjtRQUU1RSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBSSxhQUFhLE1BQUcsQ0FBQzthQUM1QyxPQUFPLENBQUMsVUFBQyxPQUFvQjtZQUU1QixJQUFJLE9BQXFCLENBQUM7WUFFMUIsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLEVBQUU7Z0JBRTVDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2FBQzFEO1lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTNGdUIsc0JBQWdCLEdBQVcscUJBQXFCLENBQUM7SUE0RjNFLFlBQUM7Q0FsSkQsQUFrSkMsQ0FsSmtDLFlBQVMsR0FrSjNDO2tCQWxKb0IsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMUIsc0JBR1c7QUFHWDtJQUE4QyxvQ0FBUztJQU9yRCwwQkFBWSxPQUFvQjtRQUFoQyxZQUVFLGtCQUFNLE9BQU8sQ0FBQyxTQUdmO1FBR08sYUFBTyxHQUFZLFVBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUoxQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQztJQWNELCtCQUFJLEdBQUosVUFBSyxVQUEwQjtRQUExQiwyQkFBQSxFQUFBLGlCQUEwQjtRQUU3QixJQUFJLFVBQVUsRUFBRTtZQUVkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQVFELDBDQUFlLEdBQWYsVUFBZ0IsT0FBb0IsRUFBRSxJQUFzQjtRQUE1RCxpQkFhQztRQWJxQyxxQkFBQSxFQUFBLGNBQXNCO1FBRTFELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFFWixNQUFNLElBQUksS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUM7U0FDL0Y7UUFFRCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFVBQUEsQ0FBQztZQUU5QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsZ0NBQUssR0FBTDtRQUVFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFRRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBb0IsRUFBRSxJQUFzQjtRQUE3RCxpQkFhQztRQWJzQyxxQkFBQSxFQUFBLGNBQXNCO1FBRTNELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFFWixNQUFNLElBQUksS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUM7U0FDakc7UUFFRCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLFVBQUEsQ0FBQztZQUU5QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFbkIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBUU0sc0NBQXFCLEdBQTVCLFVBQTZCLGFBQXFCO1FBRWhELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFJLGFBQWEsTUFBRyxDQUFDO2FBQzVDLE9BQU8sQ0FBQyxVQUFDLE9BQW9CO1lBRTVCLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFFOUIsSUFBTSxXQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFL0MsV0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXRELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxtQ0FBZ0MsV0FBVyxRQUFJLENBQUM7cUJBQ3ZFLE9BQU8sQ0FBQyxVQUFDLE9BQW9CLElBQUssT0FBQSxXQUFTLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7Z0JBRXpFLFdBQVMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsK0JBQStCLENBQUM7cUJBQ2hFLE9BQU8sQ0FBQyxVQUFDLE9BQW9CLElBQUssT0FBQSxXQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQzthQUMzRTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTdGdUIsMEJBQVMsR0FBVyx3QkFBd0IsQ0FBQztJQThGdkUsdUJBQUM7Q0FoSEQsQUFnSEMsQ0FoSDZDLFlBQVMsR0FnSHREO2tCQWhIb0IsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05yQyxzQkFBOEI7QUFHOUI7SUFBcUMsMkJBQVM7SUFPNUMsaUJBQVksT0FBb0I7UUFBaEMsWUFFRSxrQkFBTSxPQUFPLENBQUMsU0FHZjtRQURDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7SUFDeEMsQ0FBQztJQVVELHNCQUFJLEdBQUosVUFBSyxLQUFtQjtRQUF4QixpQkFHQztRQUhJLHNCQUFBLEVBQUEsV0FBbUI7UUFFdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEVBQXRELENBQXNELEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQU9ELHNCQUFJLEdBQUosVUFBSyxLQUFtQjtRQUF4QixpQkFHQztRQUhJLHNCQUFBLEVBQUEsV0FBbUI7UUFFdEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEVBQXpELENBQXlELEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUdNLGNBQU0sR0FBYjtRQUVFLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFOUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBOUJ1QiwwQkFBa0IsR0FBVyxnQkFBZ0IsQ0FBQztJQStCeEUsY0FBQztDQTlDRCxBQThDQyxDQTlDb0MsWUFBUyxHQThDN0M7a0JBOUNvQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0g1QixzQkFBOEI7QUFJOUI7SUFBcUMsMkJBQVM7SUFRNUMsaUJBQVksT0FBb0IsRUFBRSxPQUFnRDtRQUFoRCx3QkFBQSxFQUFBLFlBQTRCLFlBQVksRUFBRSxJQUFJLEVBQUU7UUFBbEYsWUFFRSxrQkFBTSxPQUFPLENBQUMsU0FNZjtRQUpDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUV4QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7O0lBQ0gsQ0FBQztJQU1ELDhCQUFZLEdBQVo7UUFBQSxpQkFrQkM7UUFoQkMsSUFBSSxhQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7WUFFaEMsSUFBTSxTQUFTLEdBQVcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7WUFFN0QsSUFBSSxTQUFTLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksU0FBUyxHQUFHLGFBQWEsRUFBRTtnQkFFdEUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUVMLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUN6RDtZQUVELGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBT00sNkJBQXFCLEdBQTVCLFVBQTZCLGFBQXFCO1FBRWhELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFJLGFBQWEsTUFBRyxDQUFDO2FBQzVDLE9BQU8sQ0FBQyxVQUFDLE9BQW9CLElBQUssT0FBQSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFoQ3VCLHdCQUFnQixHQUFXLGNBQWMsQ0FBQztJQWlDcEUsY0FBQztDQXBERCxBQW9EQyxDQXBEb0MsWUFBUyxHQW9EN0M7a0JBcERvQixPQUFPOzs7O0FDSjVCLHlDQUFvQztBQVFsQyxvQkFSSyxtQkFBUyxDQVFMO0FBUFgsbUNBQThCO0FBUTVCLGlCQVJLLGdCQUFNLENBUUw7QUFQUixpQ0FBNEI7QUFRMUIsZ0JBUkssZUFBSyxDQVFMO0FBUFAsdURBQWtEO0FBUWhELDJCQVJLLDBCQUFnQixDQVFMO0FBUGxCLHFDQUFnQztBQVE5QixrQkFSSyxpQkFBTyxDQVFMO0FBUFQscUNBQWdDO0FBUTlCLGtCQVJLLGlCQUFPLENBUUw7Ozs7QUNiVCwyQ0FNc0I7QUFHcEIsaUJBUkEsbUJBQU0sQ0FRQTtBQUNOLGdCQVJBLGtCQUFLLENBUUE7QUFDTCwyQkFSQSw2QkFBZ0IsQ0FRQTtBQUNoQixrQkFSQSxvQkFBTyxDQVFBO0FBQ1Asa0JBUkEsb0JBQU8sQ0FRQTtBQUdULFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUU1QyxtQkFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLGtCQUFLLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3hELDZCQUFnQixDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3ZELG9CQUFPLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBjb21wb25lbnRlLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQge1xyXG5cclxuICAvKiogT2J0w6ltIG8gZWxlbWVudG8gZG8gY29tcG9uZW50ZS4gKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBDb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIGNvbXBvbmVudGUuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gZG8gY29tcG9uZW50ZSBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE92ZXJsYXlcclxufSBmcm9tIFwiLlwiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gZGnDoWxvZ28uICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBEaWFsb2cuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIGRpw6Fsb2dvLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaWFsb2dcIik7XHJcbiAgfVxyXG5cclxuICAvKiogT3ZlcmxheS4gKi9cclxuICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkgPSBPdmVybGF5LmNyZWF0ZSgpO1xyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhYmVydHVyYSBkbyBkacOhbG9nby4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBkaWFsb2dPcGVuQ2xhc3M6IHN0cmluZyA9IFwiZGlhbG9nX29wZW5cIjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWJyZSBvIGRpw6Fsb2dvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZU92ZXJsYXkgVW0gc2luYWxpemFkb3IgaW5kaWNhbmRvIHNlIGRldmUgc2VyIHV0aWxpemFkbyB1bSBvdmVybGF5IG5hIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvLiBPIHBhZHLDo28gw6lcclxuICAgKiBcInRydWVcIi5cclxuICAgKi9cclxuICBvcGVuKHVzZU92ZXJsYXk6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHVzZU92ZXJsYXkpIHtcclxuXHJcbiAgICAgIHRoaXMub3ZlcmxheS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoRGlhbG9nLmRpYWxvZ09wZW5DbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIGFkZE9wZW5MaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgdHlwZTogc3RyaW5nID0gXCJjbGlja1wiKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIG91dmludGUgZGUgYWJlcnR1cmEgZG8gZGnDoWxvZ28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZlY2hhIG8gZGnDoWxvZ28uICovXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5vdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShEaWFsb2cuZGlhbG9nT3BlbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkbyBkacOhbG9nbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkbyBkacOhbG9nby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIGFkZENsb3NlTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgRGlhbG9nLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLiBPcyBlbGVtZW50b3MgZGUgZGnDoWxvZ29cclxuICAgKiBkZXZlbSB0ZXIgdW0gaWRlbnRpZmljYWRvciBwYXJhIHRlcmVtIHN1YXMgaW5zdMOibmNpYXMgaW5pY2lhbGl6YWRhcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIE8gbm9tZSBkbyBhdHJpYnV0byBIVE1MLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImlkXCIpKSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgZGlhbG9nID0gbmV3IERpYWxvZyhlbGVtZW50KTtcclxuICAgICAgICAgIGNvbnN0IGRpYWxvZ0lkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1vcGVuLWRpYWxvZz1cIiR7ZGlhbG9nSWR9XCJdYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBkaWFsb2cuYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgICBkaWFsb2cuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1jbG9zZS1kaWFsb2ddYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBkaWFsb2cuYWRkQ2xvc2VMaXN0ZW5lcihlbGVtZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgSW5wdXRPcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gaW5wdXQuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIE8gZWxlbWVudG8gZG8gaW5wdXQuICovXHJcbiAgcmVhZG9ubHkgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIC8qKiBPIGVsZW1lbnRvIGRvIHLDs3R1bG8gZG8gaW5wdXQuICovXHJcbiAgcmVhZG9ubHkgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBJbnB1dC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gcmVzcG9uc8OhdmVsIHBlbG8gbyBpbnB1dC5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyBBcyBvcMOnw7VlcyBkbyBpbnB1dC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgb3B0aW9uczogSW5wdXRPcHRpb25zID0geyByZW1vdmVDb2xvck9uRm9jdXM6IHRydWUgfSkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtLWZpZWxkXCIpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbnB1dCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byByZXNwb25zw6F2ZWwgcGVsbyBvIGlucHV0IG7Do28gY29udMOpbSBvIGVsZW1lbnRvIGlucHV0IGNvbSBhIGNsYXNzZSAnaW5wdXQtLWZpZWxkJy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC0tbGFiZWxcIik7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxhYmVsKSB7XHJcblxyXG4gICAgICBpZiAoIW9wdGlvbnMubGFiZWwpIHtcclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgXCJPIGVsZW1lbnRvIHJlc3BvbnPDoXZlbCBwZWxvIGlucHV0IG7Do28gY29udMOpbSBvIGVsZW1lbnRvIGRvIHLDs3R1bG8gZG8gaW5wdXQgY29tIGEgY2xhc3NlIGBpbnB1dC0tbGFiZWxgLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRMYWJlbChvcHRpb25zLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSkge1xyXG5cclxuICAgICAgdGhpcy5hY3RpdmVMYWJlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkVG9nZ2xlTGFiZWxMaXN0ZW5lcih0aGlzLmlucHV0KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5yZW1vdmVDb2xvck9uRm9jdXMpIHtcclxuXHJcbiAgICAgIHRoaXMuYWRkUmVtb3ZlQ29sb3JMaXN0ZW5lcih0aGlzLmlucHV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBBIGNsYXNzZSBDU1MgZGUgYXRpdmHDp8OjbyBkbyByw7N0dWxvIGRvIGlucHV0LiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGxhYmVsQWN0aXZlQ2xhc3M6IHN0cmluZyA9IFwiaW5wdXQtLWxhYmVsX2FjdGl2ZVwiO1xyXG5cclxuICAvKiogQXRpdmEgbyBlbGVtZW50byBkbyByw7N0dWxvIGRvIGlucHV0LiAqL1xyXG4gIHByaXZhdGUgYWN0aXZlTGFiZWwoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKElucHV0LmxhYmVsQWN0aXZlQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqIERlc2F0aXZhIG8gZWxlbWVudG8gZG8gcsOzdHVsbyBkbyBpbnB1dC4gKi9cclxuICBwcml2YXRlIGRpc2FibGVMYWJlbCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoSW5wdXQubGFiZWxBY3RpdmVDbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGFsdGVybsOibmNpYSBkbyByw7N0dWxvIGRvIGlucHV0IHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGUgYWx0ZXJuw6JuY2lhIGRvIHLDs3R1bG8gZG8gaW5wdXQuXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiYmx1clwiLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkVG9nZ2xlTGFiZWxMaXN0ZW5lcihlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImJsdXJcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpbnRlIGRlIGFsdGVybsOibmNpYSBkbyByw7N0dWxvIGRvIGlucHV0IGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaW5wdXQudmFsdWUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVMYWJlbCgpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZGlzYWJsZUxhYmVsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgcmVtb8Onw6NvIGRhIGNvciBkbyBpbnB1dCBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgcmVtb8Onw6NvIGRhIGNvciBkbyBpbnB1dC5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJmb2N1c1wiLlxyXG4gICAqL1xyXG4gIGFkZFJlbW92ZUNvbG9yTGlzdGVuZXIoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCwgdHlwZTogc3RyaW5nID0gXCJmb2N1c1wiKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aW50ZSBkZSByZW1vw6fDo28gZGEgY29yIGRvIGlucHV0IGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5wdXRfYWxlcnQtY29sb3JcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZSBvIHLDs3R1bG8gZG8gaW5wdXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdGV4dCBPIHRleHRvIGRvIHLDs3R1bG8uXHJcbiAgICovXHJcbiAgc2V0TGFiZWwodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5sYWJlbC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6NuY2lhIGRlIElucHV0LCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgTyBub21lIGRvIGF0cmlidXRvIEhUTUwuXHJcbiAgICovXHJcbiAgc3RhdGljIGluaXRGcm9tSHRtbEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIGxhYmVsQXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zOiBJbnB1dE9wdGlvbnM7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShsYWJlbEF0dHJpYnV0ZU5hbWUpKSB7XHJcblxyXG4gICAgICAgICAgb3B0aW9ucy5sYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGxhYmVsQXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXcgSW5wdXQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPdmVybGF5XHJcbn0gZnJvbSBcIi5cIjtcclxuXHJcbi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25EcmF3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgTmF2aWdhdGlvbkRyYXdlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLWRyYXdlclwiKTtcclxuICB9XHJcblxyXG4gIC8qKiBPdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSA9IE92ZXJsYXkuY3JlYXRlKCk7XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIGFiZXJ0dXJhIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBvcGVuQ2xhc3M6IHN0cmluZyA9IFwibmF2aWdhdGlvbi1kcmF3ZXJfb3BlblwiO1xyXG5cclxuICAvKipcclxuICAgKiBBYnJlIGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZU92ZXJsYXkgVW0gc2luYWxpemFkb3IgaW5kaWNhbmRvIHNlIGRldmUgc2VyIHV0aWxpemFkbyB1bSBvdmVybGF5IG5hIGFiZXJ0dXJhIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby4gT1xyXG4gICAqIHBhZHLDo28gw6kgXCJ0cnVlXCIuXHJcbiAgICovXHJcbiAgb3Blbih1c2VPdmVybGF5OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh1c2VPdmVybGF5KSB7XHJcblxyXG4gICAgICB0aGlzLm92ZXJsYXkuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKE5hdmlnYXRpb25EcmF3ZXIub3BlbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgYWJlcnR1cmEgZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBhZGRPcGVuTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZlY2hhIGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLiAqL1xyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMub3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTmF2aWdhdGlvbkRyYXdlci5vcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8OjbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBhZGRDbG9zZUxpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImNsaWNrXCIpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aWVudGUgZGUgZmVjaGFtZW50byBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBOYXZpZ2F0aW9uRHJhd2VyLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLiBPcyBlbGVtZW50b3MgZGVcclxuICAgKiBnYXZldGEgZGUgbmF2ZWdhw6fDo28gZGV2ZW0gdGVyIHVtIGlkZW50aWZpY2Fkb3IgcGFyYSB0ZXJlbSBzdWFzIGluc3TDom5jaWFzIGluaWNpYWxpemFkYXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSBPIG5vbWUgZG8gYXRyaWJ1dG8gSFRNTC5cclxuICAgKi9cclxuICBzdGF0aWMgaW5pdEZyb21IdG1sQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9XWApXHJcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IG5hdkRyYXdlciA9IG5ldyBOYXZpZ2F0aW9uRHJhd2VyKGVsZW1lbnQpO1xyXG4gICAgICAgICAgY29uc3QgbmF2RHJhd2VySWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG5cclxuICAgICAgICAgIG5hdkRyYXdlci5hZGRDbG9zZUxpc3RlbmVyKG5hdkRyYXdlci5vdmVybGF5LmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4LWxpc3RlbmVyLW9wZW4tbmF2LWRyYXdlcj1cIiR7bmF2RHJhd2VySWR9XCJdYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuYXZEcmF3ZXIuYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgICBuYXZEcmF3ZXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1jbG9zZS1uYXYtZHJhd2VyXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gbmF2RHJhd2VyLmFkZENsb3NlTGlzdGVuZXIoZWxlbWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBvdmVybGF5LiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIE92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhdGl2YcOnw6NvIGRvIG92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgb3ZlcmxheUFjdGl2ZUNsYXNzOiBzdHJpbmcgPSBcIm92ZXJsYXlfYWN0aXZlXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4aWJpIG8gb3ZlcmxheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZWxheSBPIGRlbGF5IGVtIG1pbGlzc2VndW5kb3MgYXTDqSBhIGV4aWJpw6fDo28gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBzaG93KGRlbGF5OiBudW1iZXIgPSAzMDApIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKE92ZXJsYXkub3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT21pdGUgbyBvdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBhdMOpIGEgb21pc3PDo28gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBoaWRlKGRlbGF5OiBudW1iZXIgPSAzMDApIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE92ZXJsYXkub3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyaWEgdW0gb3ZlcmxheS4gKi9cclxuICBzdGF0aWMgY3JlYXRlKCk6IE92ZXJsYXkge1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgT3ZlcmxheShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgVG9vbGJhck9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bWEgYmFycmEgZGUgZmVycmFtZW50YXMuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgVG9vbGJhci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGEgYmFycmEgZGUgZmVycmFtZW50YXMuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgQXMgb3DDp8O1ZXMgZGEgYmFycmEgZGUgZmVycmFtZW50YXMuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFRvb2xiYXJPcHRpb25zID0geyBoaWRlSW5TY3JvbGw6IHRydWUgfSkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmhpZGVJblNjcm9sbCkge1xyXG5cclxuICAgICAgdGhpcy5oaWRlSW5TY3JvbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIG9taXNzw6NvIGRhIGJhcnJhIGRlIGZlcnJhbWVudGFzLiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRvb2xiYXJIaWRlQ2xhc3M6IHN0cmluZyA9IFwidG9vbGJhcl9oaWRlXCI7XHJcblxyXG4gIC8qKiBPbWl0ZSBhIGJhcnJhIGRlIGZlcnJhbWVudGFzIG5hIHJvbGFnZW0gZGEgcMOhZ2luYS4gKi9cclxuICBoaWRlSW5TY3JvbGwoKTogdm9pZCB7XHJcblxyXG4gICAgbGV0IGxhc3RTY3JvbGxUb3A6IG51bWJlciA9IDA7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wOiBudW1iZXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgaWYgKHNjcm9sbFRvcCA+IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgJiYgc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChUb29sYmFyLnRvb2xiYXJIaWRlQ2xhc3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShUb29sYmFyLnRvb2xiYXJIaWRlQ2xhc3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgVG9vbGJhciwgYSBwYXJ0aXIgZG8gbm9tZSBkbyBhdHJpYnV0byBIVE1MIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIE8gbm9tZSBkbyBhdHJpYnV0byBIVE1MLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuZXcgVG9vbGJhcihlbGVtZW50KSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkRyYXdlciBmcm9tIFwiLi9OYXZpZ2F0aW9uRHJhd2VyXCI7XHJcbmltcG9ydCBPdmVybGF5IGZyb20gXCIuL092ZXJsYXlcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIi4vVG9vbGJhclwiO1xyXG5cclxuZXhwb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRGlhbG9nLFxyXG4gIElucHV0LFxyXG4gIE5hdmlnYXRpb25EcmF3ZXIsXHJcbiAgT3ZlcmxheSxcclxuICBUb29sYmFyXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIElucHV0LFxyXG4gIE5hdmlnYXRpb25EcmF3ZXIsXHJcbiAgT3ZlcmxheSxcclxuICBUb29sYmFyXHJcbn0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IHtcclxuICBEaWFsb2csXHJcbiAgSW5wdXQsXHJcbiAgTmF2aWdhdGlvbkRyYXdlcixcclxuICBPdmVybGF5LFxyXG4gIFRvb2xiYXJcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbiAgRGlhbG9nLmluaXRGcm9tSHRtbEF0dHJpYnV0ZShcIngtZGlhbG9nXCIpO1xyXG4gIElucHV0LmluaXRGcm9tSHRtbEF0dHJpYnV0ZShcIngtaW5wdXRcIiwgXCJ4LWlucHV0LWxhYmVsXCIpO1xyXG4gIE5hdmlnYXRpb25EcmF3ZXIuaW5pdEZyb21IdG1sQXR0cmlidXRlKFwieC1uYXYtZHJhd2VyXCIpO1xyXG4gIFRvb2xiYXIuaW5pdEZyb21IdG1sQXR0cmlidXRlKFwieC10b29sYmFyXCIpO1xyXG59KTtcclxuIl19
