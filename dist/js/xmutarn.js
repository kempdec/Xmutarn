/*! Xmutarn v0.3.0 (https://github.com/vinivsl/Xmutarn.git) | Copyright 2018 Vinícius Lima | Licensed under MIT (https://github.com/vinivsl/Xmutarn/blob/master/LICENSE) */
var Input = (function () {
    function Input(element, labelText) {
        var _this = this;
        this.element = element;
        if (!element) {
            throw new Error("O primeiro argumento não foi fornecido.");
        }
        this.input = element.querySelector("input");
        if (!this.input) {
            throw new Error("O elemento 'input' não foi encontrado.");
        }
        this.label = element.querySelector(".input--label");
        if (!this.label && labelText) {
            this.setLabel(labelText);
        }
        else {
            throw new Error("O 'label' do input não foi encontrado ou o segundo argumento não foi fornecido.");
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

//# sourceMappingURL=xmutarn.js.map
