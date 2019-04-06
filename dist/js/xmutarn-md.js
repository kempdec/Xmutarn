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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvT3ZlcmxheS50cyIsInNyYy90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7SUFVRSxpQkFBWSxPQUFvQjtRQUU5QixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUdELHNCQUFXLDRCQUFPO2FBQWxCO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBVU0sc0JBQUksR0FBWCxVQUFZLEtBQW1CO1FBQS9CLGlCQUtDO1FBTFcsc0JBQUEsRUFBQSxXQUFtQjtRQUU3QixVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFBdkQsQ0FBdUQsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVqRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQU9NLHNCQUFJLEdBQVgsVUFBWSxLQUFtQjtRQUEvQixpQkFLQztRQUxXLHNCQUFBLEVBQUEsV0FBbUI7UUFFN0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQTFELENBQTBELEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFcEYsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFHYSxjQUFNLEdBQXBCO1FBRUUsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVwRCxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFsQ3VCLDJCQUFtQixHQUFXLGdCQUFnQixDQUFDO0lBbUN6RSxjQUFDO0NBN0RELEFBNkRDLElBQUE7a0JBN0RvQixPQUFPOzs7O0FDRDVCLHFDQUFnQztBQUc1QixrQkFIRyxpQkFBTyxDQUdIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gb3ZlcmxheS4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSB7XHJcblxyXG4gIC8qKiBFbGVtZW50byBkbyBvdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBJbmljaWFsaXphIHVtYSBub3ZhIGluc3TDom5jaWEgZGUgT3ZlcmxheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG5cclxuICAgIGlmICghZWxlbWVudCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPIGVsZW1lbnRvIGRvIG92ZXJsYXkgZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKiBPYnTDqW0gbyBlbGVtZW50byBkbyBvdmVybGF5LiAqL1xyXG4gIHB1YmxpYyBnZXQgZWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhdGl2YcOnw6NvIGRvIG92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgX292ZXJsYXlBY3RpdmVDbGFzczogc3RyaW5nID0gXCJvdmVybGF5X2FjdGl2ZVwiO1xyXG5cclxuICAvKipcclxuICAgKiBFeGliaSBvIG92ZXJsYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGVsYXkgTyBkZWxheSBlbSBtaWxpc3NlZ3VuZG9zIGF0w6kgYSBleGliacOnw6NvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3coZGVsYXk6IG51bWJlciA9IDMwMCk6IEhUTUxFbGVtZW50IHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKE92ZXJsYXkuX292ZXJsYXlBY3RpdmVDbGFzcyksIGRlbGF5KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT21pdGUgbyBvdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBhdMOpIGEgb21pc3PDo28gZG8gb3ZlcmxheS5cclxuICAgKi9cclxuICBwdWJsaWMgaGlkZShkZWxheTogbnVtYmVyID0gMzAwKTogSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoT3ZlcmxheS5fb3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvKiogQ3JpYSB1bSBvdmVybGF5LiAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlKCk6IE92ZXJsYXkge1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgT3ZlcmxheShlbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IE92ZXJsYXkgZnJvbSBcIi4vT3ZlcmxheVwiO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIE92ZXJsYXlcclxufTsiXX0=
