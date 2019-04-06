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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvY29tcG9uZW50cy9Db21wb25lbnQudHMiLCJzcmMvdHMvY29tcG9uZW50cy9EaWFsb2cudHMiLCJzcmMvdHMvY29tcG9uZW50cy9OYXZpZ2F0aW9uRHJhd2VyLnRzIiwic3JjL3RzL2NvbXBvbmVudHMvT3ZlcmxheS50cyIsInNyYy90cy9jb21wb25lbnRzL1Rvb2xiYXIudHMiLCJzcmMvdHMvY29tcG9uZW50cy9pbmRleC50cyIsInNyYy90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7SUFVRSxtQkFBWSxPQUFvQjtRQUU5QixJQUFJLENBQUMsT0FBTyxFQUFFO1lBRVosTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUdELHNCQUFXLDhCQUFPO2FBQWxCO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0gsZ0JBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkQsc0JBR1c7QUFHWDtJQUFvQywwQkFBUztJQU8zQyxnQkFBWSxPQUFvQjtRQUFoQyxZQUVFLGtCQUFNLE9BQU8sQ0FBQyxTQUdmO1FBR08sY0FBUSxHQUFZLFVBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUozQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBQ3ZDLENBQUM7SUFjTSxxQkFBSSxHQUFYLFVBQVksVUFBMEI7UUFBMUIsMkJBQUEsRUFBQSxpQkFBMEI7UUFFcEMsSUFBSSxVQUFVLEVBQUU7WUFFZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFRTSxnQ0FBZSxHQUF0QixVQUF1QixPQUFvQixFQUFFLElBQXNCO1FBQW5FLGlCQWFDO1FBYjRDLHFCQUFBLEVBQUEsY0FBc0I7UUFFakUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVaLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztTQUNuRjtRQUVELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsVUFBQSxDQUFDO1lBRTlCLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVaLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHTSxzQkFBSyxHQUFaO1FBRUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVyQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQVFNLGlDQUFnQixHQUF2QixVQUF3QixPQUFvQixFQUFFLElBQXNCO1FBQXBFLGlCQWFDO1FBYjZDLHFCQUFBLEVBQUEsY0FBc0I7UUFFbEUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVaLE1BQU0sSUFBSSxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQztTQUNyRjtRQUVELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsVUFBQSxDQUFDO1lBRTlCLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUViLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFRYSw0QkFBcUIsR0FBbkMsVUFBb0MsYUFBcUI7UUFFdkQsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQUksYUFBYSxNQUFHLENBQUM7YUFDNUMsT0FBTyxDQUFDLFVBQUMsT0FBb0I7WUFFNUIsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUU5QixJQUFNLFFBQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFNUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLCtCQUE0QixRQUFRLFFBQUksQ0FBQztxQkFDaEUsT0FBTyxDQUFDLFVBQUMsT0FBb0IsSUFBSyxPQUFBLFFBQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztnQkFFdEUsUUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQztxQkFDekQsT0FBTyxDQUFDLFVBQUMsT0FBb0IsSUFBSyxPQUFBLFFBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0Z1Qix1QkFBZ0IsR0FBVyxhQUFhLENBQUM7SUE0Rm5FLGFBQUM7Q0E5R0QsQUE4R0MsQ0E5R21DLFlBQVMsR0E4RzVDO2tCQTlHb0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOM0Isc0JBR1c7QUFHWDtJQUE4QyxvQ0FBUztJQU9yRCwwQkFBWSxPQUFvQjtRQUFoQyxZQUVFLGtCQUFNLE9BQU8sQ0FBQyxTQUdmO1FBR08sY0FBUSxHQUFZLFVBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUozQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQztJQWNNLCtCQUFJLEdBQVgsVUFBWSxVQUEwQjtRQUExQiwyQkFBQSxFQUFBLGlCQUEwQjtRQUVwQyxJQUFJLFVBQVUsRUFBRTtZQUVkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVFNLDBDQUFlLEdBQXRCLFVBQXVCLE9BQW9CLEVBQUUsSUFBc0I7UUFBbkUsaUJBYUM7UUFiNEMscUJBQUEsRUFBQSxjQUFzQjtRQUVqRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRVosTUFBTSxJQUFJLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO1NBQy9GO1FBRUQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxVQUFBLENBQUM7WUFFOUIsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRVosQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdNLGdDQUFLLEdBQVo7UUFFRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBUU0sMkNBQWdCLEdBQXZCLFVBQXdCLE9BQW9CLEVBQUUsSUFBc0I7UUFBcEUsaUJBYUM7UUFiNkMscUJBQUEsRUFBQSxjQUFzQjtRQUVsRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRVosTUFBTSxJQUFJLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO1NBQ2pHO1FBRUQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxVQUFBLENBQUM7WUFFOUIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQVFhLHNDQUFxQixHQUFuQyxVQUFvQyxhQUFxQjtRQUV2RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBSSxhQUFhLE1BQUcsQ0FBQzthQUM1QyxPQUFPLENBQUMsVUFBQyxPQUFvQjtZQUU1QixJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBRTlCLElBQU0sV0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hELElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRS9DLFdBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV2RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsbUNBQWdDLFdBQVcsUUFBSSxDQUFDO3FCQUN2RSxPQUFPLENBQUMsVUFBQyxPQUFvQixJQUFLLE9BQUEsV0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDO2dCQUV6RSxXQUFTLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLCtCQUErQixDQUFDO3FCQUNoRSxPQUFPLENBQUMsVUFBQyxPQUFvQixJQUFLLE9BQUEsV0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7YUFDM0U7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE3RnVCLDJCQUFVLEdBQVcsd0JBQXdCLENBQUM7SUE4RnhFLHVCQUFDO0NBaEhELEFBZ0hDLENBaEg2QyxZQUFTLEdBZ0h0RDtrQkFoSG9CLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOckMsc0JBQThCO0FBRzlCO0lBQXFDLDJCQUFTO0lBTzVDLGlCQUFZLE9BQW9CO1FBQWhDLFlBRUUsa0JBQU0sT0FBTyxDQUFDLFNBR2Y7UUFEQyxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7O0lBQ3hDLENBQUM7SUFVTSxzQkFBSSxHQUFYLFVBQVksS0FBbUI7UUFBL0IsaUJBR0M7UUFIVyxzQkFBQSxFQUFBLFdBQW1CO1FBRTdCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUF2RCxDQUF1RCxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFPTSxzQkFBSSxHQUFYLFVBQVksS0FBbUI7UUFBL0IsaUJBR0M7UUFIVyxzQkFBQSxFQUFBLFdBQW1CO1FBRTdCLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUExRCxDQUEwRCxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFHYSxjQUFNLEdBQXBCO1FBRUUsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwRCxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUE5QnVCLDJCQUFtQixHQUFXLGdCQUFnQixDQUFDO0lBK0J6RSxjQUFDO0NBOUNELEFBOENDLENBOUNvQyxZQUFTLEdBOEM3QztrQkE5Q29CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDVCLHNCQUdXO0FBR1g7SUFBcUMsMkJBQVM7SUFRNUMsaUJBQVksT0FBb0IsRUFBRSxPQUFnRDtRQUFoRCx3QkFBQSxFQUFBLFlBQTRCLFlBQVksRUFBRSxJQUFJLEVBQUU7UUFBbEYsWUFFRSxrQkFBTSxPQUFPLENBQUMsU0FNZjtRQUpDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUV4QixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7O0lBQ0gsQ0FBQztJQU1NLDhCQUFZLEdBQW5CO1FBQUEsaUJBa0JDO1FBaEJDLElBQUksYUFBYSxHQUFXLENBQUMsQ0FBQztRQUU5QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1lBRWhDLElBQU0sU0FBUyxHQUFXLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1lBRTdELElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLFNBQVMsR0FBRyxhQUFhLEVBQUU7Z0JBRXRFLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUN2RDtpQkFBTTtnQkFFTCxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDMUQ7WUFFRCxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQU9hLDZCQUFxQixHQUFuQyxVQUFvQyxhQUFxQjtRQUV2RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBSSxhQUFhLE1BQUcsQ0FBQzthQUM1QyxPQUFPLENBQUMsVUFBQyxPQUFvQjtZQUU1QixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuQ3VCLHlCQUFpQixHQUFXLGNBQWMsQ0FBQztJQW9DckUsY0FBQztDQXZERCxBQXVEQyxDQXZEb0MsWUFBUyxHQXVEN0M7a0JBdkRvQixPQUFPOzs7O0FDTjVCLHlDQUFvQztBQVFsQyxvQkFSSyxtQkFBUyxDQVFMO0FBUFgsbUNBQThCO0FBUTVCLGlCQVJLLGdCQUFNLENBUUw7QUFQUix1REFBa0Q7QUFRaEQsMkJBUkssMEJBQWdCLENBUUw7QUFQbEIscUNBQWdDO0FBUTlCLGtCQVJLLGlCQUFPLENBUUw7QUFQVCxxQ0FBZ0M7QUFROUIsa0JBUkssaUJBQU8sQ0FRTDs7OztBQ1pULDJDQUtzQjtBQUdwQixpQkFQQSxtQkFBTSxDQU9BO0FBQ04sMkJBUEEsNkJBQWdCLENBT0E7QUFDaEIsa0JBUEEsb0JBQU8sQ0FPQTtBQUNQLGtCQVBBLG9CQUFPLENBT0E7QUFHVCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUU7SUFFNUMsbUJBQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6Qyw2QkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2RCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gY29tcG9uZW50ZS4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqIEVsZW1lbnRvIGRvIGNvbXBvbmVudGUuICovXHJcbiAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBDb21wb25lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIGNvbXBvbmVudGUuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gZG8gY29tcG9uZW50ZSBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIE9idMOpbSBvIGVsZW1lbnRvIGRvIGNvbXBvbmVudGUuICovXHJcbiAgcHVibGljIGdldCBlbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT3ZlcmxheVxyXG59IGZyb20gXCIuXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBkacOhbG9nby4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIERpYWxvZy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZG8gZGnDoWxvZ28uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpYWxvZ1wiKTtcclxuICB9XHJcblxyXG4gIC8qKiBPdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXkgPSBPdmVybGF5LmNyZWF0ZSgpO1xyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhYmVydHVyYSBkbyBkacOhbG9nby4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfZGlhbG9nT3BlbkNsYXNzOiBzdHJpbmcgPSBcImRpYWxvZ19vcGVuXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFicmUgbyBkacOhbG9nby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB1c2VPdmVybGF5IFVtIHNpbmFsaXphZG9yIGluZGljYW5kbyBzZSBkZXZlIHNlciB1dGlsaXphZG8gdW0gb3ZlcmxheSBuYSBhYmVydHVyYSBkbyBkacOhbG9nby4gTyBwYWRyw6NvIMOpXHJcbiAgICogXCJ0cnVlXCIuXHJcbiAgICovXHJcbiAgcHVibGljIG9wZW4odXNlT3ZlcmxheTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodXNlT3ZlcmxheSkge1xyXG5cclxuICAgICAgdGhpcy5fb3ZlcmxheS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoRGlhbG9nLl9kaWFsb2dPcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgYWJlcnR1cmEgZG8gZGnDoWxvZ28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImNsaWNrXCIpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aWVudGUgZGUgYWJlcnR1cmEgZG8gZGnDoWxvZ28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZlY2hhIG8gZGnDoWxvZ28uICovXHJcbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKERpYWxvZy5fZGlhbG9nT3BlbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkbyBkacOhbG9nbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkbyBkacOhbG9nby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRDbG9zZUxpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImNsaWNrXCIpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aWVudGUgZGUgZmVjaGFtZW50byBkbyBkacOhbG9nbyBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBlID0+IHtcclxuXHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIERpYWxvZywgYSBwYXJ0aXIgZG8gbm9tZSBkbyBhdHJpYnV0byBIVE1MIGVzcGVjaWZpY2Fkby4gT3MgZWxlbWVudG9zIGRlIGRpw6Fsb2dvXHJcbiAgICogZGV2ZW0gdGVyIHVtIGlkZW50aWZpY2Fkb3IgcGFyYSB0ZXJlbSBzdWFzIGluc3TDom5jaWFzIGluaWNpYWxpemFkYXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSBPIG5vbWUgZG8gYXRyaWJ1dG8gSFRNTC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGluaXRGcm9tSHRtbEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHthdHRyaWJ1dGVOYW1lfV1gKVxyXG4gICAgICAuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiaWRcIikpIHtcclxuXHJcbiAgICAgICAgICBjb25zdCBkaWFsb2cgPSBuZXcgRGlhbG9nKGVsZW1lbnQpO1xyXG4gICAgICAgICAgY29uc3QgZGlhbG9nSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG5cclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4LWxpc3RlbmVyLW9wZW4tZGlhbG9nPVwiJHtkaWFsb2dJZH1cIl1gKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGRpYWxvZy5hZGRPcGVuTGlzdGVuZXIoZWxlbWVudCkpO1xyXG5cclxuICAgICAgICAgIGRpYWxvZy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4LWxpc3RlbmVyLWNsb3NlLWRpYWxvZ11gKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGRpYWxvZy5hZGRDbG9zZUxpc3RlbmVyKGVsZW1lbnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPdmVybGF5XHJcbn0gZnJvbSBcIi5cIjtcclxuXHJcbi8qKiBSZXNwb25zw6F2ZWwgcGVsbyBnZXJlbmNpYW1lbnRvIGRlIHVtYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb25EcmF3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgTmF2aWdhdGlvbkRyYXdlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJuYXZpZ2F0aW9uLWRyYXdlclwiKTtcclxuICB9XHJcblxyXG4gIC8qKiBPdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXkgPSBPdmVybGF5LmNyZWF0ZSgpO1xyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX29wZW5DbGFzczogc3RyaW5nID0gXCJuYXZpZ2F0aW9uLWRyYXdlcl9vcGVuXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFicmUgYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXNlT3ZlcmxheSBVbSBzaW5hbGl6YWRvciBpbmRpY2FuZG8gc2UgZGV2ZSBzZXIgdXRpbGl6YWRvIHVtIG92ZXJsYXkgbmEgYWJlcnR1cmEgZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLiBPXHJcbiAgICogcGFkcsOjbyDDqSBcInRydWVcIi5cclxuICAgKi9cclxuICBwdWJsaWMgb3Blbih1c2VPdmVybGF5OiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xyXG5cclxuICAgIGlmICh1c2VPdmVybGF5KSB7XHJcblxyXG4gICAgICB0aGlzLl9vdmVybGF5LnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChOYXZpZ2F0aW9uRHJhd2VyLl9vcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28gcGFyYSBldmVudG9zIGRvIHRpcG8gZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBvdXZpbnRlIGRlIGFiZXJ0dXJhIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8Ojby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRPcGVuTGlzdGVuZXIoZWxlbWVudDogSFRNTEVsZW1lbnQsIHR5cGU6IHN0cmluZyA9IFwiY2xpY2tcIik6IHZvaWQge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG5cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTyBlbGVtZW50byBvdXZpZW50ZSBkZSBhYmVydHVyYSBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZlY2hhIGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvLiAqL1xyXG4gIHB1YmxpYyBjbG9zZSgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLl9vdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShOYXZpZ2F0aW9uRHJhd2VyLl9vcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBmZWNoYW1lbnRvIGRhIGdhdmV0YSBkZSBuYXZlZ2HDp8OjbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkYSBnYXZldGEgZGUgbmF2ZWdhw6fDo28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkQ2xvc2VMaXN0ZW5lcihlbGVtZW50OiBIVE1MRWxlbWVudCwgdHlwZTogc3RyaW5nID0gXCJjbGlja1wiKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcblxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIG91dmllbnRlIGRlIGZlY2hhbWVudG8gZGEgZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvIGRldmUgc2VyIGZvcm5lY2lkby5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGUgPT4ge1xyXG5cclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG5cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgTmF2aWdhdGlvbkRyYXdlciwgYSBwYXJ0aXIgZG8gbm9tZSBkbyBhdHJpYnV0byBIVE1MIGVzcGVjaWZpY2Fkby4gT3MgZWxlbWVudG9zIGRlXHJcbiAgICogZ2F2ZXRhIGRlIG5hdmVnYcOnw6NvIGRldmVtIHRlciB1bSBpZGVudGlmaWNhZG9yIHBhcmEgdGVyZW0gc3VhcyBpbnN0w6JuY2lhcyBpbmljaWFsaXphZGFzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgTyBub21lIGRvIGF0cmlidXRvIEhUTUwuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZShcImlkXCIpKSB7XHJcblxyXG4gICAgICAgICAgY29uc3QgbmF2RHJhd2VyID0gbmV3IE5hdmlnYXRpb25EcmF3ZXIoZWxlbWVudCk7XHJcbiAgICAgICAgICBjb25zdCBuYXZEcmF3ZXJJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgbmF2RHJhd2VyLmFkZENsb3NlTGlzdGVuZXIobmF2RHJhd2VyLl9vdmVybGF5LmVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4LWxpc3RlbmVyLW9wZW4tbmF2LWRyYXdlcj1cIiR7bmF2RHJhd2VySWR9XCJdYClcclxuICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiBuYXZEcmF3ZXIuYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQpKTtcclxuXHJcbiAgICAgICAgICBuYXZEcmF3ZXIuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbeC1saXN0ZW5lci1jbG9zZS1uYXYtZHJhd2VyXWApXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gbmF2RHJhd2VyLmFkZENsb3NlTGlzdGVuZXIoZWxlbWVudCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuXCI7XHJcblxyXG4vKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBvdmVybGF5LiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIE92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhdGl2YcOnw6NvIGRvIG92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX292ZXJsYXlBY3RpdmVDbGFzczogc3RyaW5nID0gXCJvdmVybGF5X2FjdGl2ZVwiO1xyXG5cclxuICAvKipcclxuICAgKiBFeGliaSBvIG92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVsYXkgTyBkZWxheSBlbSBtaWxpc3NlZ3VuZG9zIGF0w6kgYSBleGliacOnw6NvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3coZGVsYXk6IG51bWJlciA9IDMwMCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoT3ZlcmxheS5fb3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT21pdGUgbyBvdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBhdMOpIGEgb21pc3PDo28gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBwdWJsaWMgaGlkZShkZWxheTogbnVtYmVyID0gMzAwKSB7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShPdmVybGF5Ll9vdmVybGF5QWN0aXZlQ2xhc3MpLCBkZWxheSk7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JpYSB1bSBvdmVybGF5LiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IE92ZXJsYXkge1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgT3ZlcmxheShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgVG9vbGJhck9wdGlvbnNcclxufSBmcm9tIFwiLlwiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW1hIGJhcnJhIGRlIGZlcnJhbWVudGFzLiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIFRvb2xiYXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRhIGJhcnJhIGRlIGZlcnJhbWVudGFzLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIEFzIG9ww6fDtWVzIGRhIGJhcnJhIGRlIGZlcnJhbWVudGFzLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvcHRpb25zOiBUb29sYmFyT3B0aW9ucyA9IHsgaGlkZUluU2Nyb2xsOiB0cnVlIH0pIHtcclxuXHJcbiAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICBpZiAob3B0aW9ucy5oaWRlSW5TY3JvbGwpIHtcclxuXHJcbiAgICAgIHRoaXMuaGlkZUluU2Nyb2xsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBvbWlzc8OjbyBkYSBiYXJyYSBkZSBmZXJyYW1lbnRhcy4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfdG9vbGJhckhpZGVDbGFzczogc3RyaW5nID0gXCJ0b29sYmFyX2hpZGVcIjtcclxuXHJcbiAgLyoqIE9taXRlIGEgYmFycmEgZGUgZmVycmFtZW50YXMgbmEgcm9sYWdlbSBkYSBww6FnaW5hLiAqL1xyXG4gIHB1YmxpYyBoaWRlSW5TY3JvbGwoKTogdm9pZCB7XHJcblxyXG4gICAgbGV0IGxhc3RTY3JvbGxUb3A6IG51bWJlciA9IDA7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG5cclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wOiBudW1iZXIgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuICAgICAgaWYgKHNjcm9sbFRvcCA+IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQgJiYgc2Nyb2xsVG9wID4gbGFzdFNjcm9sbFRvcCkge1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChUb29sYmFyLl90b29sYmFySGlkZUNsYXNzKTtcclxuICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoVG9vbGJhci5fdG9vbGJhckhpZGVDbGFzcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGxUb3A7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBUb29sYmFyLCBhIHBhcnRpciBkbyBub21lIGRvIGF0cmlidXRvIEhUTUwgZXNwZWNpZmljYWRvLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWUgTyBub21lIGRvIGF0cmlidXRvIEhUTUwuXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBpbml0RnJvbUh0bWxBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgWyR7YXR0cmlidXRlTmFtZX1dYClcclxuICAgICAgLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcblxyXG4gICAgICAgIG5ldyBUb29sYmFyKGVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IERpYWxvZyBmcm9tIFwiLi9EaWFsb2dcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25EcmF3ZXIgZnJvbSBcIi4vTmF2aWdhdGlvbkRyYXdlclwiO1xyXG5pbXBvcnQgT3ZlcmxheSBmcm9tIFwiLi9PdmVybGF5XCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCIuL1Rvb2xiYXJcIjtcclxuaW1wb3J0IFRvb2xiYXJPcHRpb25zIGZyb20gXCIuL1Rvb2xiYXJPcHRpb25zXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBEaWFsb2csXHJcbiAgTmF2aWdhdGlvbkRyYXdlcixcclxuICBPdmVybGF5LFxyXG4gIFRvb2xiYXIsXHJcbiAgVG9vbGJhck9wdGlvbnNcclxufTtcclxuIiwiaW1wb3J0IHtcclxuICBEaWFsb2csXHJcbiAgTmF2aWdhdGlvbkRyYXdlcixcclxuICBPdmVybGF5LFxyXG4gIFRvb2xiYXJcclxufSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQge1xyXG4gIERpYWxvZyxcclxuICBOYXZpZ2F0aW9uRHJhd2VyLFxyXG4gIE92ZXJsYXksXHJcbiAgVG9vbGJhclxyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG5cclxuICBEaWFsb2cuaW5pdEZyb21IdG1sQXR0cmlidXRlKFwieC1kaWFsb2dcIik7XHJcbiAgTmF2aWdhdGlvbkRyYXdlci5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LW5hdi1kcmF3ZXJcIik7XHJcbiAgVG9vbGJhci5pbml0RnJvbUh0bWxBdHRyaWJ1dGUoXCJ4LXRvb2xiYXJcIik7XHJcbn0pO1xyXG4iXX0=
