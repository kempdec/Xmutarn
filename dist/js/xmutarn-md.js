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
        this._element.classList.add("overlay");
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
}());
exports.default = Overlay;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Overlay_1 = require("./Overlay");
exports.Overlay = Overlay_1.default;
},{"./Overlay":1}]},{},[2])(2)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvT3ZlcmxheS50cyIsInNyYy90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQ0E7SUFVRSxpQkFBWSxPQUFvQjtRQUU5QixJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFFeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFHRCxzQkFBVyw0QkFBTzthQUFsQjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQVVNLHNCQUFJLEdBQVgsVUFBWSxLQUFtQjtRQUEvQixpQkFHQztRQUhXLHNCQUFBLEVBQUEsV0FBbUI7UUFFN0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQXZELENBQXVELEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQU9NLHNCQUFJLEdBQVgsVUFBWSxLQUFtQjtRQUEvQixpQkFHQztRQUhXLHNCQUFBLEVBQUEsV0FBbUI7UUFFN0IsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQTFELENBQTBELEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUdhLGNBQU0sR0FBcEI7UUFFRSxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBELE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQTlCdUIsMkJBQW1CLEdBQVcsZ0JBQWdCLENBQUM7SUErQnpFLGNBQUM7Q0EzREQsQUEyREMsSUFBQTtrQkEzRG9CLE9BQU87Ozs7QUNENUIscUNBQWdDO0FBRzVCLGtCQUhHLGlCQUFPLENBR0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBvdmVybGF5LiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IHtcclxuXHJcbiAgLyoqIEVsZW1lbnRvIGRvIG92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBPdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBkbyBvdmVybGF5LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gZG8gb3ZlcmxheSBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcbiAgfVxyXG5cclxuICAvKiogT2J0w6ltIG8gZWxlbWVudG8gZG8gb3ZlcmxheS4gKi9cclxuICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIENsYXNzZSBDU1MgZGUgYXRpdmHDp8OjbyBkbyBvdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9vdmVybGF5QWN0aXZlQ2xhc3M6IHN0cmluZyA9IFwib3ZlcmxheV9hY3RpdmVcIjtcclxuXHJcbiAgLyoqXHJcbiAgICogRXhpYmkgbyBvdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBhdMOpIGEgZXhpYmnDp8OjbyBkbyBvdmVybGF5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaG93KGRlbGF5OiBudW1iZXIgPSAzMDApIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKE92ZXJsYXkuX292ZXJsYXlBY3RpdmVDbGFzcyksIGRlbGF5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9taXRlIG8gb3ZlcmxheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZWxheSBPIGRlbGF5IGVtIG1pbGlzc2VndW5kb3MgYXTDqSBhIG9taXNzw6NvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgcHVibGljIGhpZGUoZGVsYXk6IG51bWJlciA9IDMwMCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoT3ZlcmxheS5fb3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyaWEgdW0gb3ZlcmxheS4gKi9cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBPdmVybGF5IHtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXkoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBPdmVybGF5IGZyb20gXCIuL092ZXJsYXlcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgICBPdmVybGF5XHJcbn07Il19
