/*! Xmutarn v0.27.1 (https://github.com/vinivsl/Xmutarn.git) | Copyright 2019 Vinícius Lima | Licensed under MIT (https://github.com/vinivsl/Xmutarn/blob/master/LICENSE) */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.X = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Overlay_1 = require("./Overlay");
var Dialog = (function () {
    function Dialog(element) {
        this._overlay = Overlay_1.default.create();
        if (!element) {
            throw new Error("O elemento do diálogo deve ser fornecido.");
        }
        this._element = element;
        this._element.classList.add("dialog");
    }
    Object.defineProperty(Dialog.prototype, "element", {
        get: function () {
            return this._element;
        },
        enumerable: true,
        configurable: true
    });
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
}());
exports.default = Dialog;
},{"./Overlay":2}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog_1 = require("./Dialog");
exports.Dialog = Dialog_1.default;
var Overlay_1 = require("./Overlay");
exports.Overlay = Overlay_1.default;
document.addEventListener("DOMContentLoaded", function () {
    Dialog_1.default.initFromHtmlAttribute("x-dialog");
});
},{"./Dialog":1,"./Overlay":2}]},{},[3])(3)
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvRGlhbG9nLnRzIiwic3JjL3RzL092ZXJsYXkudHMiLCJzcmMvdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLHFDQUFnQztBQUdoQztJQVVFLGdCQUFZLE9BQW9CO1FBbUJ4QixhQUFRLEdBQVksaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQWpCM0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVaLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUM5RDtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBRXhCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBR0Qsc0JBQVcsMkJBQU87YUFBbEI7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFjTSxxQkFBSSxHQUFYLFVBQVksVUFBMEI7UUFBMUIsMkJBQUEsRUFBQSxpQkFBMEI7UUFFcEMsSUFBSSxVQUFVLEVBQUU7WUFFZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFRTSxnQ0FBZSxHQUF0QixVQUF1QixPQUFvQixFQUFFLElBQXNCO1FBQW5FLGlCQWFDO1FBYjRDLHFCQUFBLEVBQUEsY0FBc0I7UUFFakUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVaLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztTQUNuRjtRQUVELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsVUFBQSxDQUFDO1lBRTlCLEtBQUksQ0FBQyxJQUFJ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QUM7SUFDdEYsQ0FBQztJQUdhLGNBQU0sR0FBcEI7UUFFRSxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBELE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQTlCdUIsMkJBQW1CLEdBQVcsZ0JBQWdCLENBQUM7SUErQnpFLGNBQUM7Q0EzREQsQUEyREMsSUFBQTtrQkEzRG9CLE9BQU87Ozs7QUNENUIsbUNBQThCO0FBSTVCLGlCQUpLLGdCQUFNLENBSUw7QUFIUixxQ0FBZ0M7QUFJOUIsa0JBSkssaUJBQU8sQ0FJTDtBQUdULFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUU1QyxnQkFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IE92ZXJsYXkgZnJvbSBcIi4vT3ZlcmxheVwiO1xyXG5cclxuLyoqIFJlc3BvbnPDoXZlbCBwZWxvIGdlcmVuY2lhbWVudG8gZGUgdW0gZGnDoWxvZ28uICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyB7XHJcblxyXG4gIC8qKiBFbGVtZW50byBkbyBkacOhbG9nby4gKi9cclxuICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIERpYWxvZy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbGVtZW50IE8gZWxlbWVudG8gZG8gZGnDoWxvZ28uXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gZG8gZGnDoWxvZ28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcclxuXHJcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaWFsb2dcIik7XHJcbiAgfVxyXG5cclxuICAvKiogT2J0w6ltIG8gZWxlbWVudG8gZG8gZGnDoWxvZ28uICovXHJcbiAgcHVibGljIGdldCBlbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKiBPdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXkgPSBPdmVybGF5LmNyZWF0ZSgpO1xyXG5cclxuICAvKiogQ2xhc3NlIENTUyBkZSBhYmVydHVyYSBkbyBkacOhbG9nby4gKi9cclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfZGlhbG9nT3BlbkNsYXNzOiBzdHJpbmcgPSBcImRpYWxvZ19vcGVuXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFicmUgbyBkacOhbG9nby5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB1c2VPdmVybGF5IFVtIHNpbmFsaXphZG9yIGluZGljYW5kbyBzZSBkZXZlIHNlciB1dGlsaXphZG8gdW0gb3ZlcmxheSBuYSBhYmVydHVyYSBkbyBkacOhbG9nby4gTyBwYWRyw6NvIMOpXHJcbiAgICogXCJ0cnVlXCIuXHJcbiAgICovXHJcbiAgcHVibGljIG9wZW4odXNlT3ZlcmxheTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodXNlT3ZlcmxheSkge1xyXG5cclxuICAgICAgdGhpcy5fb3ZlcmxheS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoRGlhbG9nLl9kaWFsb2dPcGVuQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRpY2lvbmEgdW0gZWxlbWVudG8gb3V2aW50ZSBkZSBhYmVydHVyYSBkbyBkacOhbG9nbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgYWJlcnR1cmEgZG8gZGnDoWxvZ28uXHJcbiAgICogQHBhcmFtIHR5cGUgTyB0aXBvIGRlIGV2ZW50by4gTyBwYWRyw6NvIMOpIFwiY2xpY2tcIi5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkT3Blbkxpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImNsaWNrXCIpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aWVudGUgZGUgYWJlcnR1cmEgZG8gZGnDoWxvZ28gZGV2ZSBzZXIgZm9ybmVjaWRvLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZSA9PiB7XHJcblxyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIEZlY2hhIG8gZGnDoWxvZ28uICovXHJcbiAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG5cclxuICAgIHRoaXMuX292ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKERpYWxvZy5fZGlhbG9nT3BlbkNsYXNzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkaWNpb25hIHVtIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkbyBkacOhbG9nbyBwYXJhIGV2ZW50b3MgZG8gdGlwbyBlc3BlY2lmaWNhZG8uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZWxlbWVudCBPIGVsZW1lbnRvIG91dmludGUgZGUgZmVjaGFtZW50byBkbyBkacOhbG9nby5cclxuICAgKiBAcGFyYW0gdHlwZSBPIHRpcG8gZGUgZXZlbnRvLiBPIHBhZHLDo28gw6kgXCJjbGlja1wiLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhZGRDbG9zZUxpc3RlbmVyKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0eXBlOiBzdHJpbmcgPSBcImNsaWNrXCIpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnQpIHtcclxuXHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gb3V2aWVudGUgZGUgZmVjaGFtZW50byBkbyBkacOhbG9nbyBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBlID0+IHtcclxuXHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pY2lhbGl6YSB1bWEgbm92YSBpbnN0w6JuY2lhIGRlIERpYWxvZywgYSBwYXJ0aXIgZG8gbm9tZSBkbyBhdHJpYnV0byBIVE1MIGVzcGVjaWZpY2Fkby4gT3MgZWxlbWVudG9zIGRlIGRpw6Fsb2dvXHJcbiAgICogZGV2ZW0gdGVyIHVtIGlkZW50aWZpY2Fkb3IgcGFyYSB0ZXJlbSBzdWFzIGluc3TDom5jaWFzIGluaWNpYWxpemFkYXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZSBPIG5vbWUgZG8gYXRyaWJ1dG8gSFRNTC5cclxuICAgKi9cclxuICBwdWJsaWMgc3RhdGljIGluaXRGcm9tSHRtbEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBbJHthdHRyaWJ1dGVOYW1lfV1gKVxyXG4gICAgICAuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKFwiaWRcIikpIHtcclxuXHJcbiAgICAgICAgICBjb25zdCBkaWFsb2cgPSBuZXcgRGlhbG9nKGVsZW1lbnQpO1xyXG4gICAgICAgICAgY29uc3QgZGlhbG9nSWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG5cclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4LWxpc3RlbmVyLW9wZW4tZGlhbG9nPVwiJHtkaWFsb2dJZH1cIl1gKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGRpYWxvZy5hZGRPcGVuTGlzdGVuZXIoZWxlbWVudCkpO1xyXG5cclxuICAgICAgICAgIGRpYWxvZy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFt4LWxpc3RlbmVyLWNsb3NlLWRpYWxvZ11gKVxyXG4gICAgICAgICAgICAuZm9yRWFjaCgoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IGRpYWxvZy5hZGRDbG9zZUxpc3RlbmVyKGVsZW1lbnQpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCIvKiogUmVzcG9uc8OhdmVsIHBlbG8gZ2VyZW5jaWFtZW50byBkZSB1bSBvdmVybGF5LiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGF5IHtcclxuXHJcbiAgLyoqIEVsZW1lbnRvIGRvIG92ZXJsYXkuICovXHJcbiAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaWNpYWxpemEgdW1hIG5vdmEgaW5zdMOibmNpYSBkZSBPdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgTyBlbGVtZW50byBkbyBvdmVybGF5LlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk8gZWxlbWVudG8gZG8gb3ZlcmxheSBkZXZlIHNlciBmb3JuZWNpZG8uXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG5cclxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XHJcbiAgfVxyXG5cclxuICAvKiogT2J0w6ltIG8gZWxlbWVudG8gZG8gb3ZlcmxheS4gKi9cclxuICBwdWJsaWMgZ2V0IGVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIENsYXNzZSBDU1MgZGUgYXRpdmHDp8OjbyBkbyBvdmVybGF5LiAqL1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9vdmVybGF5QWN0aXZlQ2xhc3M6IHN0cmluZyA9IFwib3ZlcmxheV9hY3RpdmVcIjtcclxuXHJcbiAgLyoqXHJcbiAgICogRXhpYmkgbyBvdmVybGF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRlbGF5IE8gZGVsYXkgZW0gbWlsaXNzZWd1bmRvcyBhdMOpIGEgZXhpYmnDp8OjbyBkbyBvdmVybGF5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBzaG93KGRlbGF5OiBudW1iZXIgPSAzMDApIHtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKE92ZXJsYXkuX292ZXJsYXlBY3RpdmVDbGFzcyksIGRlbGF5KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9taXRlIG8gb3ZlcmxheS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkZWxheSBPIGRlbGF5IGVtIG1pbGlzc2VndW5kb3MgYXTDqSBhIG9taXNzw6NvIGRvIG92ZXJsYXkuXHJcbiAgICovXHJcbiAgcHVibGljIGhpZGUoZGVsYXk6IG51bWJlciA9IDMwMCkge1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoT3ZlcmxheS5fb3ZlcmxheUFjdGl2ZUNsYXNzKSwgZGVsYXkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIENyaWEgdW0gb3ZlcmxheS4gKi9cclxuICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBPdmVybGF5IHtcclxuXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IE92ZXJsYXkoZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XHJcbmltcG9ydCBPdmVybGF5IGZyb20gXCIuL092ZXJsYXlcIjtcclxuXHJcbmV4cG9ydCB7XHJcbiAgRGlhbG9nLFxyXG4gIE92ZXJsYXlcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHJcbiAgRGlhbG9nLmluaXRGcm9tSHRtbEF0dHJpYnV0ZShcIngtZGlhbG9nXCIpO1xyXG59KTtcclxuIl19
