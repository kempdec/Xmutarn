/*! xmutarn v0.29.0 (https://github.com/viniciusxdl/xmutarn.git) | Copyright 2020 Vinícius Lima | Licensed under MIT */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.X = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
class Component {
    constructor(element) {
        this.element = element;
    }
}
exports.Component = Component;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const Component_1 = require("./Component");
class Dialog extends Component_1.Component {
    constructor(element) {
        super(element);
        this.overlay = _1.Overlay.create();
        this.element.classList.add("dialog");
    }
    open(useOverlay = true) {
        if (useOverlay) {
            this.overlay.show();
        }
        this.element.classList.add(Dialog.dialogOpenClass);
    }
    addOpenListener(element, type = "click") {
        if (!element) {
            throw new Error("O elemento ouvinte de abertura do diálogo deve ser fornecido.");
        }
        element.addEventListener(type, e => {
            e.preventDefault();
            this.open();
        });
    }
    close() {
        this.overlay.hide();
        this.element.classList.remove(Dialog.dialogOpenClass);
    }
    addCloseListener(element, type = "click") {
        if (!element) {
            throw new Error("O elemento ouviente de fechamento do diálogo deve ser fornecido.");
        }
        element.addEventListener(type, e => {
            e.preventDefault();
            this.close();
        });
    }
    static initFromHtmlAttribute(attributeName) {
        document.querySelectorAll(`[${attributeName}]`)
            .forEach((element) => {
            if (element.hasAttribute("id")) {
                const dialog = new Dialog(element);
                const dialogId = element.getAttribute("id");
                document.querySelectorAll(`[x-listener-open-dialog="${dialogId}"]`)
                    .forEach((element) => dialog.addOpenListener(element));
                dialog.element.querySelectorAll(`[x-listener-close-dialog]`)
                    .forEach((element) => dialog.addCloseListener(element));
            }
        });
    }
}
exports.default = Dialog;
Dialog.dialogOpenClass = "dialog_open";

},{".":8,"./Component":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputComponent = void 0;
const Component_1 = require("./Component");
class InputComponent extends Component_1.Component {
    constructor(element) {
        super(element);
        this.classes = {
            field: "input--field",
            label: "input--label",
            activeLabel: "input--label_active"
        };
        if (!element) {
            throw new Error("O primeiro argumento deve ser fornecido.");
        }
        this.field = element.querySelector(`.${this.classes.field}`);
        if (!this.field) {
            throw new Error(`Não foi possível encontrar um elemento com a classe '${this.classes.field}'`);
        }
        this._label = element.querySelector(`.${this.classes.label}`);
    }
    activeLabel() {
        this.label.classList.add(this.classes.activeLabel);
    }
    disableLabel() {
        this.label.classList.remove(this.classes.activeLabel);
    }
    toggleActiveLabel() {
        if (!this.field.value) {
            this.disableLabel();
            return;
        }
        this.activeLabel();
    }
    addActiveLabelToogle() {
        this.toggleActiveLabel();
        this.field.addEventListener("blur", () => this.toggleActiveLabel());
    }
    createLabel() {
        this._label = document.createElement("label");
        this.label.classList.add(this.classes.label);
        this.element.appendChild(this.label);
        this.addActiveLabelToogle();
    }
    get label() {
        if (!this._label) {
            this.createLabel();
        }
        return this._label;
    }
    setLabelText(text) {
        this.label.innerText = text;
    }
    static initFromHtml(attrName, labelAttrName) {
        const elements = document.querySelectorAll(`[${attrName}]`);
        for (let element of elements) {
            if (!element.hasAttribute(labelAttrName)) {
                throw new Error(`Não foi possível encontrar um elemento com o atributo '${labelAttrName}'.`);
            }
            const input = new InputComponent(element);
            const labelAttr = element.getAttribute(labelAttrName);
            input.setLabelText(labelAttr);
        }
    }
}
exports.InputComponent = InputComponent;

},{"./Component":1}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const Component_1 = require("./Component");
class NavigationDrawer extends Component_1.Component {
    constructor(element) {
        super(element);
        this.overlay = _1.Overlay.create();
        this.element.classList.add("navigation-drawer");
    }
    open(useOverlay = true) {
        if (useOverlay) {
            this.overlay.show();
        }
        this.element.classList.add(NavigationDrawer.openClass);
    }
    addOpenListener(element, type = "click") {
        if (!element) {
            throw new Error("O elemento ouviente de abertura da gaveta de navegação deve ser fornecido.");
        }
        element.addEventListener(type, e => {
            e.preventDefault();
            this.open();
        });
    }
    close() {
        this.overlay.hide();
        this.element.classList.remove(NavigationDrawer.openClass);
    }
    addCloseListener(element, type = "click") {
        if (!element) {
            throw new Error("O elemento ouviente de fechamento da gaveta de navegação deve ser fornecido.");
        }
        element.addEventListener(type, e => {
            e.preventDefault();
            this.close();
        });
    }
    static initFromHtmlAttribute(attributeName) {
        document.querySelectorAll(`[${attributeName}]`)
            .forEach((element) => {
            if (element.hasAttribute("id")) {
                const navDrawer = new NavigationDrawer(element);
                const navDrawerId = element.getAttribute("id");
                navDrawer.addCloseListener(navDrawer.overlay.element);
                document.querySelectorAll(`[x-listener-open-nav-drawer="${navDrawerId}"]`)
                    .forEach((element) => navDrawer.addOpenListener(element));
                navDrawer.element.querySelectorAll(`[x-listener-close-nav-drawer]`)
                    .forEach((element) => navDrawer.addCloseListener(element));
            }
        });
    }
}
exports.default = NavigationDrawer;
NavigationDrawer.openClass = "navigation-drawer_open";

},{".":8,"./Component":1}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("./Component");
class Overlay extends Component_1.Component {
    constructor(element) {
        super(element);
        this.element.classList.add("overlay");
    }
    show(delay = 300) {
        setTimeout(() => this.element.classList.add(Overlay.overlayActiveClass), delay);
    }
    hide(delay = 300) {
        setTimeout(() => this.element.classList.remove(Overlay.overlayActiveClass), delay);
    }
    static create() {
        const element = document.createElement("div");
        document.querySelector("body").appendChild(element);
        return new Overlay(element);
    }
}
exports.default = Overlay;
Overlay.overlayActiveClass = "overlay_active";

},{"./Component":1}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const Component_1 = require("./Component");
class Toast extends Component_1.Component {
    constructor(element) {
        super(element);
        this.overlay = _1.Overlay.create();
        this.toasterElement = element.parentElement;
        if (!this.toasterElement.classList.contains(Toast.classes.toaster)) {
            throw new Error(`O elemento do toaster do toast não contém a classe '${Toast.classes.toaster}'.`);
        }
        this.contentElement = element.querySelector(`.${Toast.classes.content}`);
        if (!this.contentElement) {
            throw new Error("O elemento do conteúdo do toast não foi encontrado.");
        }
        this.messageContentElement = this.contentElement.querySelector(`.${Toast.classes.contentMessage}`);
        if (!this.messageContentElement) {
            throw new Error("O elemento da mensagem do conteúdo do toast não foi encontrado.");
        }
    }
    open(delay = 500) {
        setTimeout(() => this.element.classList.add(Toast.classes.thisActive), delay);
    }
    close(timeout = 7000) {
        setTimeout(() => {
            this.element.classList.remove(Toast.classes.thisActive);
            this.overlay.hide();
        }, timeout);
    }
    remove(timeout = 7000) {
        setTimeout(() => {
            this.close(0);
            setTimeout(() => {
                this.element.remove();
                this.toasterElement.remove();
                this.overlay.element.remove();
            }, 400);
        }, timeout);
    }
    static create(message, options = null) {
        options = Object.assign(options, Toast.optionsDefault);
        const toasterElement = document.createElement("aside");
        toasterElement.classList.add(Toast.classes.toaster);
        document.body.append(toasterElement);
        const element = document.createElement("article");
        element.classList.add(Toast.classes.this);
        toasterElement.append(element);
        const contentElement = document.createElement("div");
        contentElement.classList.add(Toast.classes.content);
        element.append(contentElement);
        const messageContentElement = document.createElement("p");
        messageContentElement.classList.add(Toast.classes.contentMessage, Toast.classes.contentMessageTypography);
        messageContentElement.innerText = message;
        contentElement.append(messageContentElement);
        const toast = new Toast(element);
        if (options.autoOpen) {
            toast.open(options.delay);
        }
        if (options.color) {
            element.classList.add(`toast_color-${options.color}`);
        }
        if (options.iconClasses) {
            const iconElement = document.createElement("div");
            iconElement.classList.add(Toast.classes.icon, ...options.iconClasses.split(" "));
            element.prepend(iconElement);
        }
        if (options.title) {
            const titleContentElement = document.createElement("h1");
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
    }
}
exports.default = Toast;
Toast.classes = {
    toaster: "toaster",
    this: "toast",
    thisActive: "toast_active",
    icon: "toast--icon",
    content: "toast--content",
    contentTitle: "toast--content--title",
    contentTitleTypography: "typo-body-2",
    contentMessage: "toast--content--message",
    contentMessageSecondary: "toast--content--message_secondary",
    contentMessageTypography: "typo-body-2"
};
Toast.optionsDefault = {
    autoOpen: true,
    removeWhenClose: true
};

},{".":8,"./Component":1}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("./Component");
class Toolbar extends Component_1.Component {
    constructor(element, options = null) {
        super(element);
        options = Object.assign(Toolbar.defaultOptions, options);
        if (options.hideInScroll) {
            this.hideInScroll();
        }
    }
    hideInScroll() {
        let lastScrollTop = 0;
        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop;
            if (scrollTop > this.element.clientHeight && scrollTop > lastScrollTop) {
                this.element.classList.add(Toolbar.toolbarHideClass);
            }
            else {
                this.element.classList.remove(Toolbar.toolbarHideClass);
                if (this.element.classList.contains("bg-transparent") && scrollTop > this.element.clientHeight) {
                    this.element.classList.add(Toolbar._toolbarThemeColorClass);
                }
                else {
                    this.element.classList.remove(Toolbar._toolbarThemeColorClass);
                }
            }
            lastScrollTop = scrollTop;
        });
    }
    static initFromHtmlAttribute(attributeName) {
        document.querySelectorAll(`[${attributeName}]`)
            .forEach((element) => new Toolbar(element));
    }
}
exports.default = Toolbar;
Toolbar.defaultOptions = {
    hideInScroll: true
};
Toolbar.toolbarHideClass = "toolbar_hide";
Toolbar._toolbarThemeColorClass = "theme-bg-700";

},{"./Component":1}],8:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Toolbar = exports.Toast = exports.Overlay = exports.NavigationDrawer = exports.Dialog = void 0;
const Dialog_1 = __importDefault(require("./Dialog"));
exports.Dialog = Dialog_1.default;
const NavigationDrawer_1 = __importDefault(require("./NavigationDrawer"));
exports.NavigationDrawer = NavigationDrawer_1.default;
const Overlay_1 = __importDefault(require("./Overlay"));
exports.Overlay = Overlay_1.default;
const Toast_1 = __importDefault(require("./Toast"));
exports.Toast = Toast_1.default;
const Toolbar_1 = __importDefault(require("./Toolbar"));
exports.Toolbar = Toolbar_1.default;
__exportStar(require("./InputComponent"), exports);

},{"./Dialog":2,"./InputComponent":3,"./NavigationDrawer":4,"./Overlay":5,"./Toast":6,"./Toolbar":7}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccentThemeController = void 0;
const ThemeController_1 = require("./ThemeController");
class AccentThemeController extends ThemeController_1.ThemeController {
    constructor() {
        super("accent");
    }
    get current() {
        return super.current;
    }
    update(name) {
        super.update(name);
    }
}
exports.AccentThemeController = AccentThemeController;

},{"./ThemeController":12}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturedThemeController = void 0;
const ThemeController_1 = require("./ThemeController");
class FeaturedThemeController extends ThemeController_1.ThemeController {
    constructor() {
        super("featured");
    }
    get current() {
        return super.current;
    }
    update(name) {
        super.update(name);
    }
}
exports.FeaturedThemeController = FeaturedThemeController;

},{"./ThemeController":12}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainThemeController = void 0;
const ThemeController_1 = require("./ThemeController");
class MainThemeController extends ThemeController_1.ThemeController {
    constructor() {
        super("main");
    }
    get current() {
        return super.current;
    }
    update(name) {
        super.update(name);
    }
}
exports.MainThemeController = MainThemeController;

},{"./ThemeController":12}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeController = void 0;
class ThemeController {
    constructor(type) {
        this.html = document.querySelector("html");
        this.attrName = `x-${type}-theme`;
    }
    get current() {
        const attr = this.html.getAttribute(this.attrName);
        return attr;
    }
    update(name) {
        this.html.setAttribute(this.attrName, name);
    }
}
exports.ThemeController = ThemeController;

},{}],13:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./AccentThemeController"), exports);
__exportStar(require("./FeaturedThemeController"), exports);
__exportStar(require("./MainThemeController"), exports);
__exportStar(require("./ThemeController"), exports);

},{"./AccentThemeController":9,"./FeaturedThemeController":10,"./MainThemeController":11,"./ThemeController":12}],14:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("./components");
__exportStar(require("./components"), exports);
__exportStar(require("./controllers"), exports);
__exportStar(require("./models"), exports);
document.addEventListener("DOMContentLoaded", () => {
    components_1.Dialog.initFromHtmlAttribute("x-dialog");
    components_1.InputComponent.initFromHtml("x-input", "x-input-label");
    components_1.NavigationDrawer.initFromHtmlAttribute("x-nav-drawer");
    components_1.Toolbar.initFromHtmlAttribute("x-toolbar");
});

},{"./components":8,"./controllers":13,"./models":18}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccentTheme = void 0;
var AccentTheme;
(function (AccentTheme) {
    AccentTheme["red"] = "red";
    AccentTheme["pink"] = "pink";
    AccentTheme["purple"] = "purple";
    AccentTheme["deep-purple"] = "deep-purple";
    AccentTheme["indigo"] = "indigo";
    AccentTheme["blue"] = "blue";
    AccentTheme["light-blue"] = "light-blue";
    AccentTheme["cyan"] = "cyan";
    AccentTheme["teal"] = "teal";
    AccentTheme["green"] = "green";
    AccentTheme["light-green"] = "light-green";
    AccentTheme["lime"] = "lime";
    AccentTheme["yellow"] = "yellow";
    AccentTheme["amber"] = "amber";
    AccentTheme["orange"] = "orange";
    AccentTheme["deep-orange"] = "deep-orange";
})(AccentTheme = exports.AccentTheme || (exports.AccentTheme = {}));

},{}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturedTheme = void 0;
var FeaturedTheme;
(function (FeaturedTheme) {
    FeaturedTheme["red"] = "red";
    FeaturedTheme["pink"] = "pink";
    FeaturedTheme["purple"] = "purple";
    FeaturedTheme["deep-purple"] = "deep-purple";
    FeaturedTheme["indigo"] = "indigo";
    FeaturedTheme["blue"] = "blue";
    FeaturedTheme["light-blue"] = "light-blue";
    FeaturedTheme["cyan"] = "cyan";
    FeaturedTheme["teal"] = "teal";
    FeaturedTheme["green"] = "green";
    FeaturedTheme["light-green"] = "light-green";
    FeaturedTheme["lime"] = "lime";
    FeaturedTheme["yellow"] = "yellow";
    FeaturedTheme["amber"] = "amber";
    FeaturedTheme["orange"] = "orange";
    FeaturedTheme["deep-orange"] = "deep-orange";
    FeaturedTheme["brown"] = "brown";
    FeaturedTheme["grey"] = "grey";
    FeaturedTheme["blue-grey"] = "blue-grey";
})(FeaturedTheme = exports.FeaturedTheme || (exports.FeaturedTheme = {}));

},{}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainTheme = void 0;
var MainTheme;
(function (MainTheme) {
    MainTheme["light"] = "light";
    MainTheme["dark"] = "dark";
})(MainTheme = exports.MainTheme || (exports.MainTheme = {}));

},{}],18:[function(require,module,exports){
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./AccentTheme"), exports);
__exportStar(require("./FeaturedTheme"), exports);
__exportStar(require("./MainTheme"), exports);

},{"./AccentTheme":15,"./FeaturedTheme":16,"./MainTheme":17}]},{},[14])(14)
});
