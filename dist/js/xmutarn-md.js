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
},{".":8}],3:[function(require,module,exports){
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
},{".":8}],4:[function(require,module,exports){
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
},{".":8}],5:[function(require,module,exports){
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
},{".":8}],6:[function(require,module,exports){
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
var Toast = (function (_super) {
    __extends(Toast, _super);
    function Toast(element) {
        var _this = _super.call(this, element) || this;
        _this.overlay = _1.Overlay.create();
        _this.toasterElement = element.parentElement;
        if (!_this.toasterElement.classList.contains(Toast.classes.toaster)) {
            throw new Error("O elemento do toaster do toast n\u00E3o cont\u00E9m a classe '" + Toast.classes.toaster + "'.");
        }
        _this.contentElement = element.querySelector("." + Toast.classes.content);
        if (!_this.contentElement) {
            throw new Error("O elemento do conteúdo do toast não foi encontrado.");
        }
        _this.messageContentElement = _this.contentElement.querySelector("." + Toast.classes.contentMessage);
        if (!_this.messageContentElement) {
            throw new Error("O elemento da mensagem do conteúdo do toast não foi encontrado.");
        }
        return _this;
    }
    Toast.prototype.open = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 500; }
        setTimeout(function () { return _this.element.classList.add(Toast.classes.thisActive); }, delay);
    };
    Toast.prototype.close = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 7000; }
        setTimeout(function () {
            _this.element.classList.remove(Toast.classes.thisActive);
            _this.overlay.hide();
        }, timeout);
    };
    Toast.prototype.remove = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 7000; }
        setTimeout(function () {
            _this.close(0);
            setTimeout(function () {
                _this.element.remove();
                _this.toasterElement.remove();
                _this.overlay.element.remove();
            }, 400);
        }, timeout);
    };
    Toast.create = function (message, options) {
        var _a;
        if (options === void 0) { options = Toast.optionsDefault; }
        var toasterElement = document.createElement("aside");
        toasterElement.classList.add(Toast.classes.toaster);
        document.body.append(toasterElement);
        var element = document.createElement("article");
        element.classList.add(Toast.classes.this);
        toasterElement.append(element);
        var contentElement = document.createElement("div");
        contentElement.classList.add(Toast.classes.content);
        element.append(contentElement);
        var messageContentElement = document.createElement("p");
        messageContentElement.classList.add(Toast.classes.contentMessage, Toast.classes.contentMessageTypography);
        messageContentElement.innerText = message;
        contentElement.append(messageContentElement);
        var toast = new Toast(element);
        if (options.autoOpen) {
            toast.open(options.delay);
        }
        if (options.color) {
            element.classList.add("toast_color-" + options.color);
        }
        if (options.iconClasses) {
            var iconElement = document.createElement("div");
            (_a = iconElement.classList).add.apply(_a, [Toast.classes.icon].concat(options.iconClasses.split(" ")));
            element.prepend(iconElement);
        }
        if (options.title) {
            var titleContentElement = document.createElement("h1");
            titleContentElement.classList.add(Toast.classes.contentTitle, Toast.classes.contentTitleTypography);
            titleContentElement.innerText = options.title;
            contentElement.prepend(titleContentElement);
            messageContentElement.classList.add(Toast.classes.contentMessageSecondary);
        }
        if (options.timeout === undefined || options.timeout > 0) {
            if (options.removeWhenClose) {
                toast.remove(options.timeout);
            }
            else {
                toast.close(options.timeout);
            }
        }
        else {
            toast.overlay.show();
        }
        return toast;
    };
    Toast.classes = {
        toaster: "toaster",
        this: "toast",
        thisActive: "toast_active",
        icon: "toast--icon",
        content: "toast--content",
        contentTitle: "toast--content--title",
        contentTitleTypography: "typography-body-2",
        contentMessage: "toast--content--message",
        contentMessageSecondary: "toast--content--message_secondary",
        contentMessageTypography: "typography-body-2"
    };
    Toast.optionsDefault = {
        autoOpen: true,
        removeWhenClose: true
    };
    return Toast;
}(_1.Component));
exports.default = Toast;
},{".":8}],7:[function(require,module,exports){
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
},{".":8}],8:[function(require,module,exports){
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
var Toast_1 = require("./Toast");
exports.Toast = Toast_1.default;
var Toolbar_1 = require("./Toolbar");
exports.Toolbar = Toolbar_1.default;
},{"./Component":1,"./Dialog":2,"./Input":3,"./NavigationDrawer":4,"./Overlay":5,"./Toast":6,"./Toolbar":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var components_1 = require("./components");
exports.Dialog = components_1.Dialog;
exports.Input = components_1.Input;
exports.NavigationDrawer = components_1.NavigationDrawer;
exports.Overlay = components_1.Overlay;
exports.Toast = components_1.Toast;
exports.Toolbar = components_1.Toolbar;
document.addEventListener("DOMContentLoaded", function () {
    components_1.Dialog.initFromHtmlAttribute("x-dialog");
    components_1.Input.initFromHtmlAttribute("x-input", "x-input-label");
    components_1.NavigationDrawer.initFromHtmlAttribute("x-nav-drawer");
    components_1.Toolbar.initFromHtmlAttribute("x-toolbar");
});
},{"./components":8}]},{},[9])(9)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvY29tcG9uZW50cy9Db21wb25lbnQudHMiLCJzcmMvdHMvY29tcG9uZW50cy9EaWFsb2cudHMiLCJzcmMvdHMvY29tcG9uZW50cy9JbnB1dC50cyIsInNyYy90cy9jb21wb25lbnRzL05hdmlnYXRpb25EcmF3ZXIudHMiLCJzcmMvdHMvY29tcG9uZW50cy9PdmVybGF5LnRzIiwic3JjL3RzL2NvbXBvbmVudHMvVG9hc3QudHMiLCJzcmMvdHMvY29tcG9uZW50cy9Ub29sYmFyLnRzIiwic3JjL3RzL2NvbXBvbmVudHMvaW5kZXgudHMiLCJzcmMvdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBO0lBVUUsbUJBQVksT0FBb0I7UUFFOUIsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVaLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztTQUNqRTtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFDSCxnQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRCxzQkFHVztBQUdYO0lBQW9DLDBCQUFTO0lBTzNDLGdCQUFZLE9BQW9CO1FBQWhDLFlBRUUsa0JBQU0sT0FBTyxDQUFDLFNBR2Y7UUFHTyxhQUFPLEdBQVksVUFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBSjFDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFDdkMsQ0FBQztJQWNELHFCQUFJLEdBQUosVUFBSyxVQUEwQjtRQUExQiwyQkFBQSxFQUFBLGlCQUEwQjtRQUU3QixJQUFJLFVBQVUsRUFBRTtZQUVkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FB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QWMsQ0FBQyxDQUFDO0lBQ3ZELG9CQUFPLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBjb21wb25lbnRlLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDb21wb25lbnQge1xyXG5cclxuICAvKiogT2J0w6ltIG8gZWxlbWVudG8gZG8gY29tcG9uZW50ZS4gKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBDb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIGNvbXBvbmVudGUuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gZG8gY29tcG9uZW50ZSBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE92ZXJsYXlcclxufSBmcm9tIFwiLlwiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gZGnDoWxvZ28uICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBEaWFsb2cuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIGRpw6Fsb2dvLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaWFsb2dcIik7XHJcbiAgfVxyXG5cclxuICAvKiogT3ZlcmxheS4gKi9cclxuICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkgPSBPdmVybGF5LmNyZWF0ZSgpO1xyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhYmVydHVyYSBkbyBkacOhbG9nby4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBkaWFsb2dPcGVuQ2xhc3M6IHN0cmluZyA9IFwiZGlhbG9nX29wZW5cIjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWJyZSBvIGRpw6Fsb2dvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZU92ZXJsYXkgVW0gc2luYWxpemFkb3IgaW5kaWNhbmRvIHNlIGRldmUgc2VyIHV0aWxpemFkbyB1bSBvdmVybGF5IG5hIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvLiBPIHBhZHLDo28gw6lcclxuICAgKiBcInRydWVcIi5cclxuICAgKi9cclxuICBvcGVuKHVzZU92ZXJsYXk6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHVzZU92ZXJsYXkpIHtcclxuXHJcbiAgICAgIHRoaXMub3ZlcmxheS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoRGlhbG9nLmRpYWxvZ09wZW5DbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGFiZXJ0dXJhIGRvIGRpw6Fsb2dvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIGFkZE9wZW5MaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgdHlwZTogc3RyaW5nID0gXCJjbGlja1wiKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIG91dmludGUgZGUgYWJlcnR1cmEgZG8gZGnDoWxvZ28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZlY2hhIG8gZGnDoWxvZ28uICovXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5vdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShEaWFsb2cuZGlhbG9nT3BlbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkbyBkacOhbG9nbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkbyBkacOhbG9nby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIGFkZENsb3NlTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBmZWNoYW1lbnRvIGRvIGRpw6Fsb2dvIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgRGlhbG9nLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLiBPcyBlbGVtZW50b3MgZGUgZGnDoWxvZ29cclxuICAgKiBkZXZlbSB0ZXIgdW0gaWRlbnRpZmljYWRvciBwYXJhIHRlcmVtIHN1YXMgaW5zdMOibmNpYXMgaW5pY2lhbGl6YWRhcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIE8gbm9tZSBkbyBhdHJpYnV0byBIVE1MLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImlkXCIpKSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgZGlhbG9nID0gbmV3IERpYWxvZyhlbGVtZW50KTtcclxuICAgICAgICAgIGNvbnN0IGRpYWxvZ0lkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1vcGVuLWRpYWxvZz1cIiR7ZGlhbG9nSWR9XCJdYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBkaWFsb2cuYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgICBkaWFsb2cuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1jbG9zZS1kaWFsb2ddYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBkaWFsb2cuYWRkQ2xvc2VMaXN0ZW5lcihlbGVtZW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgSW5wdXRPcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gaW5wdXQuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIE8gZWxlbWVudG8gZG8gaW5wdXQuICovXHJcbiAgcmVhZG9ubHkgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIC8qKiBPIGVsZW1lbnRvIGRvIHLDs3R1bG8gZG8gaW5wdXQuICovXHJcbiAgcmVhZG9ubHkgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBJbnB1dC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gcmVzcG9uc8OhdmVsIHBlbG8gbyBpbnB1dC5cclxuICAgKiBAcGFyYW0gb3B0aW9ucyBBcyBvcMOnw7VlcyBkbyBpbnB1dC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCwgb3B0aW9uczogSW5wdXRPcHRpb25zID0geyByZW1vdmVDb2xvck9uRm9jdXM6IHRydWUgfSkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtLWZpZWxkXCIpO1xyXG5cclxuICAgIGlmICghdGhpcy5pbnB1dCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byByZXNwb25zw6F2ZWwgcGVsbyBvIGlucHV0IG7Do28gY29udMOpbSBvIGVsZW1lbnRvIGlucHV0IGNvbSBhIGNsYXNzZSAnaW5wdXQtLWZpZWxkJy5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5sYWJlbCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dC0tbGFiZWxcIik7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxhYmVsKSB7XHJcblxyXG4gICAgICBpZiAoIW9wdGlvbnMubGFiZWwpIHtcclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgXCJPIGVsZW1lbnRvIHJlc3BvbnPDoXZlbCBwZWxvIGlucHV0IG7Do28gY29udMOpbSBvIGVsZW1lbnRvIGRvIHLDs3R1bG8gZG8gaW5wdXQgY29tIGEgY2xhc3NlIGBpbnB1dC0tbGFiZWxgLlwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZXRMYWJlbChvcHRpb25zLmxhYmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pbnB1dC52YWx1ZSkge1xyXG5cclxuICAgICAgdGhpcy5hY3RpdmVMYWJlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWRkVG9nZ2xlTGFiZWxMaXN0ZW5lcih0aGlzLmlucHV0KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5yZW1vdmVDb2xvck9uRm9jdXMpIHtcclxuXHJcbiAgICAgIHRoaXMuYWRkUmVtb3ZlQ29sb3JMaXN0ZW5lcih0aGlzLmlucHV0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBBIGNsYXNzZSBDU1MgZGUgYXRpdmHDp8OjbyBkbyByw7N0dWxvIGRvIGlucHV0LiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGxhYmVsQWN0aXZlQ2xhc3M6IHN0cmluZyA9IFwiaW5wdXQtLWxhYmVsX2FjdGl2ZVwiO1xyXG5cclxuICAvKiogQXRpdmEgbyBlbGVtZW50byBkbyByw7N0dWxvIGRvIGlucHV0LiAqL1xyXG4gIHByaXZhdGUgYWN0aXZlTGFiZWwoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5sYWJlbC5jbGFzc0xpc3QuYWRkKElucHV0LmxhYmVsQWN0aXZlQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqIERlc2F0aXZhIG8gZWxlbWVudG8gZG8gcsOzdHVsbyBkbyBpbnB1dC4gKi9cclxuICBwcml2YXRlIGRpc2FibGVMYWJlbCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLmxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoSW5wdXQubGFiZWxBY3RpdmVDbGFzcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBvdXZpbnRlIGRlIGFsdGVybsOibmNpYSBkbyByw7N0dWxvIGRvIGlucHV0IHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGUgYWx0ZXJuw6JuY2lhIGRvIHLDs3R1bG8gZG8gaW5wdXQuXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiYmx1clwiLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYWRkVG9nZ2xlTGFiZWxMaXN0ZW5lcihlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImJsdXJcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpbnRlIGRlIGFsdGVybsOibmNpYSBkbyByw7N0dWxvIGRvIGlucHV0IGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuaW5wdXQudmFsdWUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVMYWJlbCgpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZGlzYWJsZUxhYmVsKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgcmVtb8Onw6NvIGRhIGNvciBkbyBpbnB1dCBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgcmVtb8Onw6NvIGRhIGNvciBkbyBpbnB1dC5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJmb2N1c1wiLlxyXG4gICAqL1xyXG4gIGFkZFJlbW92ZUNvbG9yTGlzdGVuZXIoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCwgdHlwZTogc3RyaW5nID0gXCJmb2N1c1wiKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aW50ZSBkZSByZW1vw6fDo28gZGEgY29yIGRvIGlucHV0IGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaW5wdXRfYWxlcnQtY29sb3JcIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZSBvIHLDs3R1bG8gZG8gaW5wdXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdGV4dCBPIHRleHRvIGRvIHLDs3R1bG8uXHJcbiAgICovXHJcbiAgc2V0TGFiZWwodGV4dDogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5sYWJlbC5pbm5lclRleHQgPSB0ZXh0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6NuY2lhIGRlIElucHV0LCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgTyBub21lIGRvIGF0cmlidXRvIEhUTUwuXHJcbiAgICovXHJcbiAgc3RhdGljIGluaXRGcm9tSHRtbEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsIGxhYmVsQXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGxldCBvcHRpb25zOiBJbnB1dE9wdGlvbnM7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShsYWJlbEF0dHJpYnV0ZU5hbWUpKSB7XHJcblxyXG4gICAgICAgICAgb3B0aW9ucy5sYWJlbCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGxhYmVsQXR0cmlidXRlTmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXcgSW5wdXQoZWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPdmVybGF5XHJcbn0gZnJvbSBcIi5cIjtcclxuXHJcbi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25EcmF3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgTmF2aWdhdGlvbkRyYXdlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLWRyYXdlclwiKTtcclxuICB9XHJcblxyXG4gIC8qKiBPdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSA9IE92ZXJsYXkuY3JlYXRlKCk7XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIGFiZXJ0dXJhIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBvcGVuQ2xhc3M6IHN0cmluZyA9IFwibmF2aWdhdGlvbi1kcmF3ZXJfb3BlblwiO1xyXG5cclxuICAvKipcclxuICAgKiBBYnJlIGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVzZU92ZXJsYXkgVW0gc2luYWxpemFkb3IgaW5kaWNhbmRvIHNlIGRldmUgc2VyIHV0aWxpemFkbyB1bSBvdmVybGF5IG5hIGFiZXJ0dXJhIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby4gT1xyXG4gICAqIHBhZHLDo28gw6kgXCJ0cnVlXCIuXHJcbiAgICovXHJcbiAgb3Blbih1c2VPdmVybGF5OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh1c2VPdmVybGF5KSB7XHJcblxyXG4gICAgICB0aGlzLm92ZXJsYXkuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKE5hdmlnYXRpb25EcmF3ZXIub3BlbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgYWJlcnR1cmEgZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvIHBhcmEgZXZlbnRvcyBkbyB0aXBvIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBhZGRPcGVuTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZlY2hhIGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLiAqL1xyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMub3ZlcmxheS5oaWRlKCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoTmF2aWdhdGlvbkRyYXdlci5vcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8OjbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBhZGRDbG9zZUxpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImNsaWNrXCIpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aWVudGUgZGUgZmVjaGFtZW50byBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBOYXZpZ2F0aW9uRHJhd2VyLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLiBPcyBlbGVtZW50b3MgZGVcclxuICAgKiBnYXZldGEgZGUgbmF2ZWdhw6fDo28gZGV2ZW0gdGVyIHVtIGlkZW50aWZpY2Fkb3IgcGFyYSB0ZXJlbSBzdWFzIGluc3TDom5jaWFzIGluaWNpYWxpemFkYXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSBPIG5vbWUgZG8gYXRyaWJ1dG8gSFRNTC5cclxuICAgKi9cclxuICBzdGF0aWMgaW5pdEZyb21IdG1sQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWU6IHN0cmluZyk6IHZvaWQge1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFske2F0dHJpYnV0ZU5hbWV9XWApXHJcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJpZFwiKSkge1xyXG5cclxuICAgICAgICAgIGNvbnN0IG5hdkRyYXdlciA9IG5ldyBOYXZpZ2F0aW9uRHJhd2VyKGVsZW1lbnQpO1xyXG4gICAgICAgICAgY29uc3QgbmF2RHJhd2VySWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG5cclxuICAgICAgICAgIG5hdkRyYXdlci5hZGRDbG9zZUxpc3RlbmVyKG5hdkRyYXdlci5vdmVybGF5LmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4LWxpc3RlbmVyLW9wZW4tbmF2LWRyYXdlcj1cIiR7bmF2RHJhd2VySWR9XCJdYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuYXZEcmF3ZXIuYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgICBuYXZEcmF3ZXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1jbG9zZS1uYXYtZHJhd2VyXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gbmF2RHJhd2VyLmFkZENsb3NlTGlzdGVuZXIoZWxlbWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBvdmVybGF5LiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIE92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhdGl2YcOnw6NvIGRvIG92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgb3ZlcmxheUFjdGl2ZUNsYXNzOiBzdHJpbmcgPSBcIm92ZXJsYXlfYWN0aXZlXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4aWJpIG8gb3ZlcmxheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZWxheSBPIGRlbGF5IGVtIG1pbGlzc2VndW5kb3MgYXTDqSBhIGV4aWJpw6fDo28gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBzaG93KGRlbGF5OiBudW1iZXIgPSAzMDApIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKE92ZXJsYXkub3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT21pdGUgbyBvdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBhdMOpIGEgb21pc3PDo28gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBoaWRlKGRlbGF5OiBudW1iZXIgPSAzMDApIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKE92ZXJsYXkub3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyaWEgdW0gb3ZlcmxheS4gKi9cclxuICBzdGF0aWMgY3JlYXRlKCk6IE92ZXJsYXkge1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgT3ZlcmxheShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdmVybGF5IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgVG9hc3RPcHRpb25zIH0gZnJvbSBcIi4vb3B0aW9uc1wiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gdG9hc3QuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIENsYXNzZXMgQ1NTIGRvIHRvYXN0LiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGNsYXNzZXMgPSB7XHJcblxyXG4gICAgLyoqIENsYXNzZSBDU1MgZG8gdG9hc3RlciBkbyB0b2FzdC4gKi9cclxuICAgIHRvYXN0ZXI6IFwidG9hc3RlclwiLFxyXG5cclxuICAgIC8qKiBDbGFzc2UgQ1NTIGRvIHRvYXN0LiAqL1xyXG4gICAgdGhpczogXCJ0b2FzdFwiLFxyXG5cclxuICAgIC8qKiBDbGFzc2UgQ1NTIGRlIGF0aXZhw6fDo28gZG8gdG9hc3QuICovXHJcbiAgICB0aGlzQWN0aXZlOiBcInRvYXN0X2FjdGl2ZVwiLFxyXG5cclxuICAgIC8qKiBDbGFzc2UgQ1NTIGRvIMOtY29uZSBkbyB0b2FzdC4gKi9cclxuICAgIGljb246IFwidG9hc3QtLWljb25cIixcclxuXHJcbiAgICAvKiogQ2xhc3NlIENTUyBkbyBjb250ZcO6ZG8gZG8gdG9hc3QuICovXHJcbiAgICBjb250ZW50OiBcInRvYXN0LS1jb250ZW50XCIsXHJcblxyXG4gICAgLyoqIENsYXNzZSBDU1MgZG8gdMOtdHVsbyBkbyBjb250ZcO6ZG8gZG8gdG9hc3QuICovXHJcbiAgICBjb250ZW50VGl0bGU6IFwidG9hc3QtLWNvbnRlbnQtLXRpdGxlXCIsXHJcblxyXG4gICAgLyoqIENsYXNzZSBDU1MgZGEgdGlwb2dyYWZpYSBkbyB0w610dWxvIGRvIGNvbnRlw7pkbyBkbyB0b2FzdC4gKi9cclxuICAgIGNvbnRlbnRUaXRsZVR5cG9ncmFwaHk6IFwidHlwb2dyYXBoeS1ib2R5LTJcIixcclxuXHJcbiAgICAvKiogQ2xhc3NlIENTUyBkYSBtZW5zYWdlbSBkbyBjb250ZcO6ZG8gZG8gdG9hc3QuICovXHJcbiAgICBjb250ZW50TWVzc2FnZTogXCJ0b2FzdC0tY29udGVudC0tbWVzc2FnZVwiLFxyXG5cclxuICAgIC8qKiBDbGFzc2UgQ1NTIGRhIHZhcmlhbnRlICdzZWNvbmRhcnknIGRhIG1lbnNhZ2VtIGRvIGNvbnRlw7pkbyBkbyB0b2FzdC4gKi9cclxuICAgIGNvbnRlbnRNZXNzYWdlU2Vjb25kYXJ5OiBcInRvYXN0LS1jb250ZW50LS1tZXNzYWdlX3NlY29uZGFyeVwiLFxyXG5cclxuICAgIC8qKiBDbGFzc2UgQ1NTIGRhIHRpcG9ncmFmaWEgZGEgbWVuc2FnZW0gZG8gY29udGXDumRvIGRvIHRvYXN0LiAqL1xyXG4gICAgY29udGVudE1lc3NhZ2VUeXBvZ3JhcGh5OiBcInR5cG9ncmFwaHktYm9keS0yXCJcclxuICB9O1xyXG5cclxuICAvKiogRWxlbWVudG8gZG8gdG9hc3RlciBkbyB0b2FzdC4gKi9cclxuICByZWFkb25seSB0b2FzdGVyRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKiBFbGVtZW50byBkbyBjb250ZcO6ZG8gZG8gdG9hc3QuICovXHJcbiAgcmVhZG9ubHkgY29udGVudEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAvKiogRWxlbWVudG8gZGEgbWVuc2FnZW0gZG8gY29udGXDumRvIGRvIHRvYXN0LiAqL1xyXG4gIHJlYWRvbmx5IG1lc3NhZ2VDb250ZW50RWxlbWVudDogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBUb2FzdC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZG8gdG9hc3QuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLnRvYXN0ZXJFbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICghdGhpcy50b2FzdGVyRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoVG9hc3QuY2xhc3Nlcy50b2FzdGVyKSkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPIGVsZW1lbnRvIGRvIHRvYXN0ZXIgZG8gdG9hc3QgbsOjbyBjb250w6ltIGEgY2xhc3NlICcke1RvYXN0LmNsYXNzZXMudG9hc3Rlcn0nLmApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGVudEVsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke1RvYXN0LmNsYXNzZXMuY29udGVudH1gKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuY29udGVudEVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gZG8gY29udGXDumRvIGRvIHRvYXN0IG7Do28gZm9pIGVuY29udHJhZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubWVzc2FnZUNvbnRlbnRFbGVtZW50ID0gdGhpcy5jb250ZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtUb2FzdC5jbGFzc2VzLmNvbnRlbnRNZXNzYWdlfWApO1xyXG5cclxuICAgIGlmICghdGhpcy5tZXNzYWdlQ29udGVudEVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gZGEgbWVuc2FnZW0gZG8gY29udGXDumRvIGRvIHRvYXN0IG7Do28gZm9pIGVuY29udHJhZG8uXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWJyZSBvIHRvYXN0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBwYXJhIGFiZXJ0dXJhIGRvIHRvYXN0LiBPIHBhZHLDo28gw6kgXCI1MDBcIi5cclxuICAgKi9cclxuICBvcGVuKGRlbGF5OiBudW1iZXIgPSA1MDApOiB2b2lkIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFRvYXN0LmNsYXNzZXMudGhpc0FjdGl2ZSksIGRlbGF5KTtcclxuICB9XHJcblxyXG4gIC8qKiBPdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgb3ZlcmxheTogT3ZlcmxheSA9IE92ZXJsYXkuY3JlYXRlKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZlY2hhIG8gdG9hc3QgZSBvIG92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdGltZW91dCBPIHRpbWVvdXQgZW0gbWlsaXNzZWd1bmRvcyBwYXJhIGZlY2hhbWVudG8gZG8gdG9hc3QuIE8gcGFkcsOjbyDDqSBcIjcwMDBcIi5cclxuICAgKi9cclxuICBjbG9zZSh0aW1lb3V0OiBudW1iZXIgPSA3MDAwKTogdm9pZCB7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShUb2FzdC5jbGFzc2VzLnRoaXNBY3RpdmUpO1xyXG5cclxuICAgICAgdGhpcy5vdmVybGF5LmhpZGUoKTtcclxuICAgIH0sIHRpbWVvdXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmVjaGEgZSByZW1vdmUgbyB0b2FzdCBlIG8gb3ZlcmxheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB0aW1lb3V0IE8gdGltZW91dCBlbSBtaWxpc3NlZ3VuZG9zIHBhcmEgbyBmZWNoYW1lbnRvIGUgcmVtb8Onw6NvIGRvIHRvYXN0LiBPIHBhZHLDo28gw6kgXCI3MDAwXCIuXHJcbiAgICovXHJcbiAgcmVtb3ZlKHRpbWVvdXQ6IG51bWJlciA9IDcwMDApOiB2b2lkIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuY2xvc2UoMCk7XHJcblxyXG4gICAgICAvLyBhZ3VhcmRhIDQwMG1zLCBwYXJhIHF1ZSBvIHRvYXN0IHNlamEgY29tcGxldGFtZW50ZSBlc2NvbmRpZG8gZSByZW1vdmUtbyBlbSBzZWd1aWRhLlxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMudG9hc3RlckVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5LmVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgIH0sIDQwMCk7XHJcbiAgICB9LCB0aW1lb3V0KTtcclxuICB9XHJcblxyXG4gIC8qKiBPcMOnw7VlcyBwYWRyw6NvIGRvIHRvYXN0LiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IG9wdGlvbnNEZWZhdWx0OiBUb2FzdE9wdGlvbnMgPSB7XHJcbiAgICBhdXRvT3BlbjogdHJ1ZSxcclxuICAgIHJlbW92ZVdoZW5DbG9zZTogdHJ1ZVxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENyaWEgdW0gdG9hc3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWVzc2FnZSBBIG1lbnNhZ2VtIGRvIHRvYXN0LlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIEFzIG9ww6fDtWVzIGRvIHRvYXN0LlxyXG4gICAqL1xyXG4gIHN0YXRpYyBjcmVhdGUobWVzc2FnZTogc3RyaW5nLCBvcHRpb25zOiBUb2FzdE9wdGlvbnMgPSBUb2FzdC5vcHRpb25zRGVmYXVsdCk6IFRvYXN0IHtcclxuXHJcbiAgICAvKiogRWxlbWVudG8gZG8gdG9hc3RlciBkbyB0b2FzdC4gKi9cclxuICAgIGNvbnN0IHRvYXN0ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFzaWRlXCIpO1xyXG5cclxuICAgIHRvYXN0ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoVG9hc3QuY2xhc3Nlcy50b2FzdGVyKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRvYXN0ZXJFbGVtZW50KTtcclxuXHJcbiAgICAvKiogRWxlbWVudG8gZG8gdG9hc3QuICovXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XHJcblxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFRvYXN0LmNsYXNzZXMudGhpcyk7XHJcbiAgICB0b2FzdGVyRWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XHJcblxyXG4gICAgLyoqIEVsZW1lbnRvIGRvIGNvbnRlw7pkbyBkbyB0b2FzdC4gKi9cclxuICAgIGNvbnN0IGNvbnRlbnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBjb250ZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFRvYXN0LmNsYXNzZXMuY29udGVudCk7XHJcbiAgICBlbGVtZW50LmFwcGVuZChjb250ZW50RWxlbWVudCk7XHJcblxyXG4gICAgLyoqIEVsZW1lbnRvIGRhIG1lbnNhZ2VtIGRvIGNvbnRlw7pkbyBkbyB0b2FzdC4gKi9cclxuICAgIGNvbnN0IG1lc3NhZ2VDb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICAgIG1lc3NhZ2VDb250ZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFRvYXN0LmNsYXNzZXMuY29udGVudE1lc3NhZ2UsIFRvYXN0LmNsYXNzZXMuY29udGVudE1lc3NhZ2VUeXBvZ3JhcGh5KTtcclxuICAgIG1lc3NhZ2VDb250ZW50RWxlbWVudC5pbm5lclRleHQgPSBtZXNzYWdlO1xyXG4gICAgY29udGVudEVsZW1lbnQuYXBwZW5kKG1lc3NhZ2VDb250ZW50RWxlbWVudCk7XHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3QoZWxlbWVudCk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuYXV0b09wZW4pIHtcclxuXHJcbiAgICAgIHRvYXN0Lm9wZW4ob3B0aW9ucy5kZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuY29sb3IpIHtcclxuXHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgdG9hc3RfY29sb3ItJHtvcHRpb25zLmNvbG9yfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLmljb25DbGFzc2VzKSB7XHJcblxyXG4gICAgICAvKiogRWxlbWVudG8gZG8gw61jb25lIGRvIHRvYXN0LiAqL1xyXG4gICAgICBjb25zdCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICBpY29uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFRvYXN0LmNsYXNzZXMuaWNvbiwgLi4ub3B0aW9ucy5pY29uQ2xhc3Nlcy5zcGxpdChcIiBcIikpO1xyXG4gICAgICBlbGVtZW50LnByZXBlbmQoaWNvbkVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcHRpb25zLnRpdGxlKSB7XHJcblxyXG4gICAgICAvKiogRWxlbWVudG8gZG8gdMOtdHVsbyBkbyB0b2FzdC4gKi9cclxuICAgICAgY29uc3QgdGl0bGVDb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHJcbiAgICAgIHRpdGxlQ29udGVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChUb2FzdC5jbGFzc2VzLmNvbnRlbnRUaXRsZSwgVG9hc3QuY2xhc3Nlcy5jb250ZW50VGl0bGVUeXBvZ3JhcGh5KTtcclxuICAgICAgdGl0bGVDb250ZW50RWxlbWVudC5pbm5lclRleHQgPSBvcHRpb25zLnRpdGxlO1xyXG4gICAgICBjb250ZW50RWxlbWVudC5wcmVwZW5kKHRpdGxlQ29udGVudEVsZW1lbnQpO1xyXG5cclxuICAgICAgbWVzc2FnZUNvbnRlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoVG9hc3QuY2xhc3Nlcy5jb250ZW50TWVzc2FnZVNlY29uZGFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9wdGlvbnMudGltZW91dCA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudGltZW91dCA+IDApIHtcclxuXHJcbiAgICAgIGlmIChvcHRpb25zLnJlbW92ZVdoZW5DbG9zZSkge1xyXG5cclxuICAgICAgICB0b2FzdC5yZW1vdmUob3B0aW9ucy50aW1lb3V0KTtcclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgdG9hc3QuY2xvc2Uob3B0aW9ucy50aW1lb3V0KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHRvYXN0Lm92ZXJsYXkuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0b2FzdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi5cIjtcclxuaW1wb3J0IHsgVG9vbGJhck9wdGlvbnMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bWEgYmFycmEgZGUgZmVycmFtZW50YXMuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgVG9vbGJhci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGEgYmFycmEgZGUgZmVycmFtZW50YXMuXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgQXMgb3DDp8O1ZXMgZGEgYmFycmEgZGUgZmVycmFtZW50YXMuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IFRvb2xiYXJPcHRpb25zID0geyBoaWRlSW5TY3JvbGw6IHRydWUgfSkge1xyXG5cclxuICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgIGlmIChvcHRpb25zLmhpZGVJblNjcm9sbCkge1xyXG5cclxuICAgICAgdGhpcy5oaWRlSW5TY3JvbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBDbGFzc2UgQ1NTIGRlIG9taXNzw6NvIGRhIGJhcnJhIGRlIGZlcnJhbWVudGFzLiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHRvb2xiYXJIaWRlQ2xhc3M6IHN0cmluZyA9IFwidG9vbGJhcl9oaWRlXCI7XHJcblxyXG4gIC8qKiBPbWl0ZSBhIGJhcnJhIGRlIGZlcnJhbWVudGFzIG5hIHJvbGFnZW0gZGEgcMOhZ2luYS4gKi9cclxuICBoaWRlSW5TY3JvbGwoKTogdm9pZCB7XHJcblxyXG4gICAgbGV0IGxhc3RTY3JvbGxUb3A6IG51bWJlciA9IDA7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wOiBudW1iZXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgaWYgKHNjcm9sbFRvcCA+IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgJiYgc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChUb29sYmFyLnRvb2xiYXJIaWRlQ2xhc3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShUb29sYmFyLnRvb2xiYXJIaWRlQ2xhc3MpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYXN0U2Nyb2xsVG9wID0gc2Nyb2xsVG9wO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgVG9vbGJhciwgYSBwYXJ0aXIgZG8gbm9tZSBkbyBhdHJpYnV0byBIVE1MIGVzcGVjaWZpY2Fkby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIE8gbm9tZSBkbyBhdHJpYnV0byBIVE1MLlxyXG4gICAqL1xyXG4gIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuZXcgVG9vbGJhcihlbGVtZW50KSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkRyYXdlciBmcm9tIFwiLi9OYXZpZ2F0aW9uRHJhd2VyXCI7XHJcbmltcG9ydCBPdmVybGF5IGZyb20gXCIuL092ZXJsYXlcIjtcclxuaW1wb3J0IFRvYXN0IGZyb20gXCIuL1RvYXN0XCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL1Rvb2xiYXJcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIERpYWxvZyxcclxuICBJbnB1dCxcclxuICBOYXZpZ2F0aW9uRHJhd2VyLFxyXG4gIE92ZXJsYXksXHJcbiAgVG9hc3QsXHJcbiAgVG9vbGJhclxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIERpYWxvZyxcclxuICBJbnB1dCxcclxuICBOYXZpZ2F0aW9uRHJhd2VyLFxyXG4gIE92ZXJsYXksXHJcbiAgVG9hc3QsXHJcbiAgVG9vbGJhclxyXG59IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIElucHV0LFxyXG4gIE5hdmlnYXRpb25EcmF3ZXIsXHJcbiAgT3ZlcmxheSxcclxuICBUb2FzdCxcclxuICBUb29sYmFyXHJcbn07XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblxyXG4gIERpYWxvZy5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LWRpYWxvZ1wiKTtcclxuICBJbnB1dC5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LWlucHV0XCIsIFwieC1pbnB1dC1sYWJlbFwiKTtcclxuICBOYXZpZ2F0aW9uRHJhd2VyLmluaXRGcm9tSHRtbEF0dHJpYnV0ZShcIngtbmF2LWRyYXdlclwiKTtcclxuICBUb29sYmFyLmluaXRGcm9tSHRtbEF0dHJpYnV0ZShcIngtdG9vbGJhclwiKTtcclxufSk7XHJcbiJdfQ==
