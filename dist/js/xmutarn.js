/*! Xmutarn v0.27.0 (https://github.com/vinivsl/Xmutarn.git) | Copyright 2019 Vinícius Lima | Licensed under MIT (https://github.com/vinivsl/Xmutarn/blob/master/LICENSE) */
var Overlay = (function () {
    function Overlay(element) {
        this.element = element;
        if (!element) {
            throw new Error("O primeiro argumento deve ser fornecido.");
        }
        element.classList.add("overlay");
    }
    Overlay.prototype.show = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 300; }
        setTimeout(function () { return _this.element.classList.add(Overlay._overlayActiveClass); }, delay);
        return this.element;
    };
    Overlay.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 300; }
        setTimeout(function () { return _this.element.classList.remove(Overlay._overlayActiveClass); }, delay);
        return this.element;
    };
    Overlay.createOverlay = function () {
        var element = document.createElement("div");
        document.querySelector("body").appendChild(element);
        return new Overlay(element);
    };
    Overlay._overlayActiveClass = "overlay_active";
    return Overlay;
}());
var Dialog = (function () {
    function Dialog(element) {
        this.element = element;
        this._overlay = Overlay.createOverlay();
        if (!element) {
            throw new Error("O primeiro argumento deve ser fornecido.");
        }
        element.classList.add("dialog");
    }
    Dialog.prototype.open = function () {
        this._overlay.show();
        this.element.classList.add(Dialog._dialogOpenClass);
    };
    Dialog.prototype.close = function () {
        this._overlay.hide();
        this.element.classList.remove(Dialog._dialogOpenClass);
    };
    Dialog._dialogOpenClass = "dialog_open";
    return Dialog;
}());
var DropdownMenuOrigin;
(function (DropdownMenuOrigin) {
    DropdownMenuOrigin["TopRight"] = "top-right";
    DropdownMenuOrigin["TopRightPartial"] = "top-right-partial";
    DropdownMenuOrigin["TopLeft"] = "top-left";
    DropdownMenuOrigin["TopLeftPartial"] = "top-left-partial";
    DropdownMenuOrigin["TopStart"] = "top-start";
    DropdownMenuOrigin["TopStartPartial"] = "top-start-partial";
    DropdownMenuOrigin["TopEnd"] = "top-end";
    DropdownMenuOrigin["TopEndPartial"] = "top-end-partial";
    DropdownMenuOrigin["BottomRight"] = "bottom-right";
    DropdownMenuOrigin["BottomRightPartial"] = "bottom-right-partial";
    DropdownMenuOrigin["BottomLeft"] = "bottom-left";
    DropdownMenuOrigin["BottomLeftPartial"] = "bottom-left-partial";
    DropdownMenuOrigin["BottomStart"] = "bottom-start";
    DropdownMenuOrigin["BottomStartPartial"] = "bottom-start-partial";
    DropdownMenuOrigin["BottomEnd"] = "bottom-end";
    DropdownMenuOrigin["BottomEndPartial"] = "bottom-end-partial";
})(DropdownMenuOrigin || (DropdownMenuOrigin = {}));
var DropdownMenu = (function () {
    function DropdownMenu(element, origin) {
        if (origin === void 0) { origin = DropdownMenuOrigin.TopRight; }
        var _this = this;
        this.element = element;
        if (!element) {
            throw new Error("O primeiro argumento deve ser fornecido.");
        }
        this.menu =
            element.nextElementSibling.classList.contains("menu") ? element.nextElementSibling : undefined;
        if (!this.menu) {
            throw new Error("Nenhum elemento imediatamente próximo, com a classe 'menu', foi encontrado.");
        }
        if (origin != null) {
            this.menu.classList.add("menu_origin-" + origin.toLowerCase().replace("-partial", ""));
        }
        this.menu.addEventListener("click", function (e) { return e.stopPropagation(); });
        var definedOrigin = false;
        element.addEventListener("click", function (e) {
            _this.toggle();
            if (definedOrigin === false && origin != null) {
                _this.setOrigin(origin);
                definedOrigin = true;
            }
            e.stopPropagation();
            e.preventDefault();
        });
        document.addEventListener("click", function () { return _this.close(); });
    }
    DropdownMenu.prototype.setOrigin = function (origin) {
        if (origin === void 0) { origin = DropdownMenuOrigin.TopRight; }
        var top, left;
        if (origin === DropdownMenuOrigin.TopRight ||
            origin === DropdownMenuOrigin.TopLeft ||
            origin === DropdownMenuOrigin.TopStart ||
            origin === DropdownMenuOrigin.TopEnd) {
            top = this.element.offsetTop + this.element.offsetHeight;
        }
        if (origin === DropdownMenuOrigin.TopRightPartial ||
            origin === DropdownMenuOrigin.TopLeftPartial ||
            origin === DropdownMenuOrigin.TopStartPartial ||
            origin === DropdownMenuOrigin.TopEndPartial) {
            top = this.element.offsetTop;
        }
        if (origin === DropdownMenuOrigin.BottomRight ||
            origin === DropdownMenuOrigin.BottomLeft ||
            origin === DropdownMenuOrigin.BottomStart ||
            origin === DropdownMenuOrigin.BottomEnd) {
            top = this.element.offsetTop - this.menu.offsetHeight;
        }
        if (origin === DropdownMenuOrigin.BottomRightPartial ||
            origin === DropdownMenuOrigin.BottomLeftPartial ||
            origin === DropdownMenuOrigin.BottomStartPartial ||
            origin === DropdownMenuOrigin.BottomEndPartial) {
            top = this.element.offsetTop - this.menu.offsetHeight + this.element.offsetHeight;
        }
        if (origin === DropdownMenuOrigin.TopRight ||
            origin === DropdownMenuOrigin.TopRightPartial ||
            origin === DropdownMenuOrigin.BottomRight ||
            origin === DropdownMenuOrigin.BottomRightPartial) {
            left = this.element.offsetLeft + (this.element.offsetWidth - this.menu.offsetWidth);
        }
        if (origin === DropdownMenuOrigin.TopLeft ||
            origin === DropdownMenuOrigin.TopLeftPartial ||
            origin === DropdownMenuOrigin.BottomLeft ||
            origin === DropdownMenuOrigin.BottomLeftPartial) {
            left = this.element.offsetLeft;
        }
        if (origin === DropdownMenuOrigin.TopStart ||
            origin === DropdownMenuOrigin.TopStartPartial ||
            origin === DropdownMenuOrigin.BottomStart ||
            origin === DropdownMenuOrigin.BottomStartPartial) {
            left = this.element.offsetLeft - this.menu.offsetWidth;
        }
        if (origin === DropdownMenuOrigin.TopEnd ||
            origin === DropdownMenuOrigin.TopEndPartial ||
            origin === DropdownMenuOrigin.BottomEnd ||
            origin === DropdownMenuOrigin.BottomEndPartial) {
            left = this.element.offsetLeft + this.element.offsetHeight;
        }
        this.menu.style.top = top + "px";
        this.menu.style.left = left + "px";
        return this.element;
    };
    DropdownMenu.prototype.open = function (origin) {
        if (this.element.classList.contains(DropdownMenu._dropdownClass)) {
            this.element.classList.add(DropdownMenu._dropdownActiveClass);
        }
        if (origin != null) {
            this.setOrigin(origin);
        }
        this.menu.classList.add(DropdownMenu._menuOpenClass);
        return this.element;
    };
    DropdownMenu.prototype.close = function () {
        if (this.element.classList.contains(DropdownMenu._dropdownClass)) {
            this.element.classList.remove(DropdownMenu._dropdownActiveClass);
        }
        this.menu.classList.remove(DropdownMenu._menuOpenClass);
        return this.element;
    };
    DropdownMenu.prototype.toggle = function (origin) {
        if (this.element.classList.contains(DropdownMenu._dropdownClass)) {
            this.element.classList.toggle(DropdownMenu._dropdownActiveClass);
        }
        if (origin != null) {
            this.setOrigin(origin);
        }
        this.menu.classList.toggle(DropdownMenu._menuOpenClass);
        return this.element;
    };
    DropdownMenu._dropdownClass = "dropdown";
    DropdownMenu._dropdownActiveClass = "dropdown_active";
    DropdownMenu._menuOpenClass = "menu_open";
    return DropdownMenu;
}());
document.querySelectorAll("[x-role='dropdown-menu']").forEach(function (element) {
    var origin = element.getAttribute("x-origin");
    if (origin) {
        new DropdownMenu(element, origin);
    }
    else {
        new DropdownMenu(element);
    }
});
var Input = (function () {
    function Input(element, labelText, removeColorOnFocus) {
        var _this = this;
        this.element = element;
        if (!element) {
            throw new Error("O primeiro argumento não foi fornecido.");
        }
        if (removeColorOnFocus == null) {
            removeColorOnFocus = true;
        }
        this.input = element.querySelector("input");
        if (!this.input) {
            throw new Error("O elemento 'input' não foi encontrado.");
        }
        this.label = element.querySelector(".input--label");
        if (!this.label && !labelText) {
            throw new Error("O 'label' do input não foi encontrado ou o segundo argumento não foi fornecido.");
        }
        if (!this.label && labelText) {
            this.setLabel(labelText);
        }
        if (this.input.value) {
            this._activeLabel();
        }
        this.input.addEventListener("blur", function () {
            if (_this.input.value) {
                _this._activeLabel();
            }
            else {
                _this._disableLabel();
            }
        });
        if (removeColorOnFocus) {
            this.input.addEventListener("focus", function () { return element.classList.remove("input_alert-color"); });
        }
    }
    Input.prototype._activeLabel = function () {
        this.label.classList.add(Input._labelActiveClass);
    };
    Input.prototype._disableLabel = function () {
        this.label.classList.remove(Input._labelActiveClass);
    };
    Input.prototype.setLabel = function (text) {
        if (!this.label) {
            this.label = document.createElement("label");
            this.label.classList.add("input--label");
            this.element.appendChild(this.label);
        }
        this.label.innerText = text;
    };
    Input._labelActiveClass = "input--label_active";
    return Input;
}());
document.querySelectorAll("[x-role='input']").forEach(function (element) {
    new Input(element, element.getAttribute("x-label-text"));
});
var NavigationDrawer = (function () {
    function NavigationDrawer(element) {
        var _this = this;
        this.element = element;
        this._overlay = Overlay.createOverlay();
        if (!element) {
            throw new Error("O primeiro argumento deve ser fornecido.");
        }
        element.classList.add("navigation-drawer");
        this._overlay.element.addEventListener("click", function () { return _this.close(); });
    }
    NavigationDrawer.prototype.open = function () {
        this._overlay.show();
        this.element.classList.add(NavigationDrawer._navigationDrawerOpenClass);
    };
    NavigationDrawer.prototype.close = function () {
        this._overlay.hide();
        this.element.classList.remove(NavigationDrawer._navigationDrawerOpenClass);
    };
    NavigationDrawer._navigationDrawerOpenClass = "navigation-drawer_open";
    return NavigationDrawer;
}());
document.querySelectorAll("[x-open-nav-drawer-id]").forEach(function (element) {
    var attributeValue = element.attributes.getNamedItem("x-open-nav-drawer-id").value;
    var navDrawer = new NavigationDrawer(document.querySelector("#" + attributeValue.replace("#", "")));
    element.addEventListener("click", function (e) {
        navDrawer.open();
        e.preventDefault();
    });
});
var ToastColor;
(function (ToastColor) {
    ToastColor["FeaturedColor"] = "featured";
    ToastColor["AccentColor"] = "accent";
    ToastColor["SuccessColor"] = "success";
    ToastColor["AlertColor"] = "alert";
    ToastColor["WarningColor"] = "warning";
})(ToastColor || (ToastColor = {}));
var Toast = (function () {
    function Toast(message, title, color, iconClasses, delay, timeout) {
        var _a;
        var _this = this;
        if (!message) {
            throw new Error("O primeiro argumento deve ser fornecido.");
        }
        if (delay && typeof delay != "number") {
            throw new Error("O quinto argumento deve ser do tipo 'number'.");
        }
        if (timeout && typeof timeout != "number") {
            throw new Error("O sexto argumento deve ser do tipo 'number'.");
        }
        var toastColors = Object.keys(ToastColor).map(function (x) { return ToastColor[x]; });
        if (color && toastColors.indexOf(color) == -1) {
            throw new Error("A cor '" + color + "' n\u00E3o est\u00E1 dispon\u00EDvel.");
        }
        this.element = document.querySelector("#" + Toast._toasterId);
        if (!this.element) {
            this.element = document.createElement("section");
            this.element.setAttribute("id", Toast._toasterId);
            this.element.classList.add("toaster");
            document.querySelector("body").appendChild(this.element);
        }
        this.toast = document.createElement("article");
        this.toast.classList.add("toast");
        if (color) {
            this.toast.classList.add("toast_color-" + color);
        }
        if (iconClasses) {
            var toastIcon = document.createElement("div");
            (_a = toastIcon.classList).add.apply(_a, ["toast--icon"].concat(iconClasses.split(" ")));
            this.toast.appendChild(toastIcon);
        }
        var toastContent = document.createElement("div");
        toastContent.classList.add("toast--content");
        this.toast.appendChild(toastContent);
        if (title) {
            var toastContentTitle = document.createElement("h1");
            toastContentTitle.classList.add("toast--content--title", "typography-body-2");
            toastContentTitle.innerText = title;
            toastContent.appendChild(toastContentTitle);
        }
        var toastContentMessage = document.createElement("p");
        toastContentMessage.classList.add("toast--content--message", "typography-body-2");
        toastContentMessage.innerText = message;
        if (title) {
            toastContentMessage.classList.add("toast--content--message_secondary");
        }
        toastContent.appendChild(toastContentMessage);
        this.open(delay);
        setTimeout(function () { return _this.close(timeout); }, delay);
    }
    Toast.prototype.open = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 0; }
        setTimeout(function () {
            var activeToast = _this.element.querySelector(".toast");
            if (activeToast) {
                activeToast.classList.remove(Toast._toastActiveClass);
                Toast._overlay.hide();
            }
            setTimeout(function () {
                if (activeToast) {
                    activeToast.remove();
                }
                _this.element.appendChild(_this.toast);
                setTimeout(function () { return _this.toast.classList.add(Toast._toastActiveClass); }, 100);
            }, Toast._timeoutToastDisable);
        }, delay);
    };
    Toast.prototype.close = function (timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 7000; }
        if (timeout != 0) {
            setTimeout(function () {
                _this.toast.classList.remove(Toast._toastActiveClass);
                setTimeout(function () { return _this.toast.remove(); }, Toast._timeoutToastDisable);
            }, timeout);
        }
        else {
            Toast._overlay.show();
        }
    };
    Toast._toasterId = "toaster";
    Toast._toastActiveClass = "toast_active";
    Toast._timeoutToastDisable = 400;
    Toast._overlay = Overlay.createOverlay();
    return Toast;
}());
var Toolbar = (function () {
    function Toolbar(element) {
        if (!element) {
            throw new Error("O primeiro argumento deve ser fornecido.");
        }
        var lastScrollTop = 0;
        window.addEventListener("scroll", function () {
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop > element.clientHeight && scrollTop > lastScrollTop) {
                element.classList.add(Toolbar._toolbarHideClass);
            }
            else {
                element.classList.remove(Toolbar._toolbarHideClass);
            }
            lastScrollTop = scrollTop;
        });
    }
    Toolbar._toolbarHideClass = "toolbar_hide";
    return Toolbar;
}());
document.querySelectorAll("[x-role='toolbar']").forEach(function (element) {
    new Toolbar(element);
});

//# sourceMappingURL=xmutarn.js.map
