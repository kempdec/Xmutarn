/*! Xmutarn v0.4.0 (https://github.com/vinivsl/Xmutarn.git) | Copyright 2018 Vinícius Lima | Licensed under MIT (https://github.com/vinivsl/Xmutarn/blob/master/LICENSE) */
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
        if (this.element.classList.contains("dropdown")) {
            this.element.classList.add("dropdown_active");
        }
        if (origin != null) {
            this.setOrigin(origin);
        }
        this.menu.classList.add("menu_open");
        return this.element;
    };
    DropdownMenu.prototype.close = function () {
        if (this.element.classList.contains("dropdown")) {
            this.element.classList.remove("dropdown_active");
        }
        this.menu.classList.remove("menu_open");
        return this.element;
    };
    DropdownMenu.prototype.toggle = function (origin) {
        if (this.element.classList.contains("dropdown")) {
            this.element.classList.toggle("dropdown_active");
        }
        if (origin != null) {
            this.setOrigin(origin);
        }
        this.menu.classList.toggle("menu_open");
        return this.element;
    };
    return DropdownMenu;
}());
document.querySelectorAll("[x-role='dropdown-menu']").forEach(function (element) {
    new DropdownMenu(element, element.getAttribute("x-origin"));
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

//# sourceMappingURL=xmutarn.js.map
