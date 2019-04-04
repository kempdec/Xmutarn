/*! Xmutarn v0.27.1 (https://github.com/vinivsl/Xmutarn.git) | Copyright 2019 Vinícius Lima | Licensed under MIT (https://github.com/vinivsl/Xmutarn/blob/master/LICENSE) */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.X = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Overlay = (function () {
    function Overlay(element) {
        if (!element) {
            throw new Error("O elemento do overlay deve ser fornecido.");
        }
        this._element = element;
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
        return this.element;
    };
    Overlay.prototype.hide = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 300; }
        setTimeout(function () { return _this.element.classList.remove(Overlay._overlayActiveClass); }, delay);
        return this.element;
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
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Overlay_1 = require("./Overlay");
exports.Overlay = Overlay_1.default;
},{"./Overlay":1}]},{},[2])(2)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvT3ZlcmxheS50cyIsInNyYy90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7SUFVSSxpQkFBWSxPQUFvQjtRQUU1QixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQ2hFO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUdELHNCQUFXLDRCQUFPO2FBQWxCO1lBRUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBVU0sc0JBQUksR0FBWCxVQUFZLEtBQW1CO1FBQS9CLGlCQUtDO1FBTFcsc0JBQUEsRUFBQSxXQUFtQjtRQUUzQixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBdkQsQ0FBdUQsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVqRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQU9NLHNCQUFJLEdBQVgsVUFBWSxLQUFtQjtRQUEvQixpQkFLQztRQUxXLHNCQUFBLEVBQUEsV0FBbUI7UUFFM0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQTFELENBQTBELEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFcEYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFHYSxjQUFNLEdBQXBCO1FBRUksSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwRCxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFsQ3VCLDJCQUFtQixHQUFXLGdCQUFnQixDQUFDO0lBbUMzRSxjQUFDO0NBN0RELEFBNkRDLElBQUE7a0JBN0RvQixPQUFPOzs7O0FDRDVCLHFDQUFnQztBQUc1QixrQkFIRyxpQkFBTyxDQUdIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gb3ZlcmxheS4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSB7XHJcblxyXG4gICAgLyoqIEVsZW1lbnRvIGRvIG92ZXJsYXkuICovXHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBPdmVybGF5LlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIGRvIG92ZXJsYXkuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIGRvIG92ZXJsYXkgZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBPYnTDqW0gbyBlbGVtZW50byBkbyBvdmVybGF5LiAqL1xyXG4gICAgcHVibGljIGdldCBlbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIENsYXNzZSBDU1MgZGUgYXRpdmHDp8OjbyBkbyBvdmVybGF5LiAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX292ZXJsYXlBY3RpdmVDbGFzczogc3RyaW5nID0gXCJvdmVybGF5X2FjdGl2ZVwiO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXhpYmkgbyBvdmVybGF5LlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gZGVsYXkgTyBkZWxheSBlbSBtaWxpc3NlZ3VuZG9zIGF0w6kgYSBleGliacOnw6NvIGRvIG92ZXJsYXkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93KGRlbGF5OiBudW1iZXIgPSAzMDApOiBIVE1MRWxlbWVudCB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoT3ZlcmxheS5fb3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogT21pdGUgbyBvdmVybGF5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBkZWxheSBPIGRlbGF5IGVtIG1pbGlzc2VndW5kb3MgYXTDqSBhIG9taXNzw6NvIGRvIG92ZXJsYXkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBoaWRlKGRlbGF5OiBudW1iZXIgPSAzMDApOiBIVE1MRWxlbWVudCB7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoT3ZlcmxheS5fb3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDcmlhIHVtIG92ZXJsYXkuICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBPdmVybGF5IHtcclxuXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IE92ZXJsYXkoZWxlbWVudCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgT3ZlcmxheSBmcm9tIFwiLi9PdmVybGF5XCI7XHJcblxyXG5leHBvcnQge1xyXG4gICAgT3ZlcmxheVxyXG59OyJdfQ==
