/*! Xmutarn v0.28.0-beta (https://github.com/vinivsl/Xmutarn.git) | Copyright 2019 Vinícius Lima | Licensed under MIT (https://github.com/vinivsl/Xmutarn/blob/master/LICENSE) */
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.X = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }

          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }

        return n[i].exports;
      }

      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
        o(t[i]);
      }

      return o;
    }

    return r;
  }()({
    1: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Component = function Component(element) {
        _classCallCheck(this, Component);

        if (!element) {
          throw new Error("O elemento do componente deve ser fornecido.");
        }

        this.element = element;
      };

      exports["default"] = Component;
    }, {}],
    2: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _1 = require(".");

      var Dialog =
      /*#__PURE__*/
      function (_$Component) {
        _inherits(Dialog, _$Component);

        function Dialog(element) {
          var _this;

          _classCallCheck(this, Dialog);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(Dialog).call(this, element));
          _this.overlay = _1.Overlay.create();

          _this.element.classList.add("dialog");

          return _this;
        }

        _createClass(Dialog, [{
          key: "open",
          value: function open() {
            var useOverlay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (useOverlay) {
              this.overlay.show();
            }

            this.element.classList.add(Dialog.dialogOpenClass);
          }
        }, {
          key: "addOpenListener",
          value: function addOpenListener(element) {
            var _this2 = this;

            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "click";

            if (!element) {
              throw new Error("O elemento ouvinte de abertura do diálogo deve ser fornecido.");
            }

            element.addEventListener(type, function (e) {
              e.preventDefault();

              _this2.open();
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.overlay.hide();
            this.element.classList.remove(Dialog.dialogOpenClass);
          }
        }, {
          key: "addCloseListener",
          value: function addCloseListener(element) {
            var _this3 = this;

            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "click";

            if (!element) {
              throw new Error("O elemento ouviente de fechamento do diálogo deve ser fornecido.");
            }

            element.addEventListener(type, function (e) {
              e.preventDefault();

              _this3.close();
            });
          }
        }], [{
          key: "initFromHtmlAttribute",
          value: function initFromHtmlAttribute(attributeName) {
            document.querySelectorAll("[".concat(attributeName, "]")).forEach(function (element) {
              if (element.hasAttribute("id")) {
                var dialog = new Dialog(element);
                var dialogId = element.getAttribute("id");
                document.querySelectorAll("[x-listener-open-dialog=\"".concat(dialogId, "\"]")).forEach(function (element) {
                  return dialog.addOpenListener(element);
                });
                dialog.element.querySelectorAll("[x-listener-close-dialog]").forEach(function (element) {
                  return dialog.addCloseListener(element);
                });
              }
            });
          }
        }]);

        return Dialog;
      }(_1.Component);

      Dialog.dialogOpenClass = "dialog_open";
      exports["default"] = Dialog;
    }, {
      ".": 8
    }],
    3: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _1 = require(".");

      var Input =
      /*#__PURE__*/
      function (_$Component2) {
        _inherits(Input, _$Component2);

        function Input(element) {
          var _this4;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          _classCallCheck(this, Input);

          _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, element));
          Object.assign(Input.defaultOptions, options);
          element.classList.add("input");
          _this4.inputElement = element.querySelector(".input--field");

          if (!_this4.inputElement) {
            throw new Error("O elemento responsável pelo o input não contém o elemento input com a classe 'input--field'.");
          }

          _this4.labelElement = element.querySelector(".input--label");

          if (!_this4.labelElement) {
            if (!options.label) {
              throw new Error("O elemento responsável pelo input não contém o elemento do rótulo do input com a classe `input--label`.");
            }

            _this4.setLabel(options.label);
          }

          if (_this4.inputElement.value) {
            _this4.activeLabel();
          }

          _this4.addToggleLabelListener(_this4.inputElement);

          if (options.removeColorOnFocus) {
            _this4.addRemoveColorListener(_this4.inputElement);
          }

          return _this4;
        }

        _createClass(Input, [{
          key: "activeLabel",
          value: function activeLabel() {
            this.labelElement.classList.add(Input.labelActiveClass);
          }
        }, {
          key: "disableLabel",
          value: function disableLabel() {
            this.labelElement.classList.remove(Input.labelActiveClass);
          }
        }, {
          key: "addToggleLabelListener",
          value: function addToggleLabelListener(element) {
            var _this5 = this;

            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "blur";

            if (!element) {
              throw new Error("O elemento ouvinte de alternância do rótulo do input deve ser fornecido.");
            }

            element.addEventListener(type, function (e) {
              e.preventDefault();

              if (_this5.inputElement.value) {
                _this5.activeLabel();

                return;
              }

              _this5.disableLabel();
            });
          }
        }, {
          key: "addRemoveColorListener",
          value: function addRemoveColorListener(element) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "focus";

            if (!element) {
              throw new Error("O elemento ouvinte de remoção da cor do input deve ser fornecido.");
            }

            element.addEventListener(type, function (e) {
              e.preventDefault();
              element.classList.remove("input_alert-color");
            });
          }
        }, {
          key: "setLabel",
          value: function setLabel(text) {
            this.labelElement.innerText = text;
          }
        }], [{
          key: "initFromHtmlAttribute",
          value: function initFromHtmlAttribute(attributeName, labelAttributeName) {
            document.querySelectorAll("[".concat(attributeName, "]")).forEach(function (element) {
              var options;

              if (element.hasAttribute(labelAttributeName)) {
                options.label = element.getAttribute(labelAttributeName);
              }

              new Input(element, options);
            });
          }
        }]);

        return Input;
      }(_1.Component);

      Input.defaultOptions = {
        removeColorOnFocus: true
      };
      Input.labelActiveClass = "input--label_active";
      exports["default"] = Input;
    }, {
      ".": 8
    }],
    4: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _1 = require(".");

      var NavigationDrawer =
      /*#__PURE__*/
      function (_$Component3) {
        _inherits(NavigationDrawer, _$Component3);

        function NavigationDrawer(element) {
          var _this6;

          _classCallCheck(this, NavigationDrawer);

          _this6 = _possibleConstructorReturn(this, _getPrototypeOf(NavigationDrawer).call(this, element));
          _this6.overlay = _1.Overlay.create();

          _this6.element.classList.add("navigation-drawer");

          return _this6;
        }

        _createClass(NavigationDrawer, [{
          key: "open",
          value: function open() {
            var useOverlay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (useOverlay) {
              this.overlay.show();
            }

            this.element.classList.add(NavigationDrawer.openClass);
          }
        }, {
          key: "addOpenListener",
          value: function addOpenListener(element) {
            var _this7 = this;

            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "click";

            if (!element) {
              throw new Error("O elemento ouviente de abertura da gaveta de navegação deve ser fornecido.");
            }

            element.addEventListener(type, function (e) {
              e.preventDefault();

              _this7.open();
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.overlay.hide();
            this.element.classList.remove(NavigationDrawer.openClass);
          }
        }, {
          key: "addCloseListener",
          value: function addCloseListener(element) {
            var _this8 = this;

            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "click";

            if (!element) {
              throw new Error("O elemento ouviente de fechamento da gaveta de navegação deve ser fornecido.");
            }

            element.addEventListener(type, function (e) {
              e.preventDefault();

              _this8.close();
            });
          }
        }], [{
          key: "initFromHtmlAttribute",
          value: function initFromHtmlAttribute(attributeName) {
            document.querySelectorAll("[".concat(attributeName, "]")).forEach(function (element) {
              if (element.hasAttribute("id")) {
                var navDrawer = new NavigationDrawer(element);
                var navDrawerId = element.getAttribute("id");
                navDrawer.addCloseListener(navDrawer.overlay.element);
                document.querySelectorAll("[x-listener-open-nav-drawer=\"".concat(navDrawerId, "\"]")).forEach(function (element) {
                  return navDrawer.addOpenListener(element);
                });
                navDrawer.element.querySelectorAll("[x-listener-close-nav-drawer]").forEach(function (element) {
                  return navDrawer.addCloseListener(element);
                });
              }
            });
          }
        }]);

        return NavigationDrawer;
      }(_1.Component);

      NavigationDrawer.openClass = "navigation-drawer_open";
      exports["default"] = NavigationDrawer;
    }, {
      ".": 8
    }],
    5: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _1 = require(".");

      var Overlay =
      /*#__PURE__*/
      function (_$Component4) {
        _inherits(Overlay, _$Component4);

        function Overlay(element) {
          var _this9;

          _classCallCheck(this, Overlay);

          _this9 = _possibleConstructorReturn(this, _getPrototypeOf(Overlay).call(this, element));

          _this9.element.classList.add("overlay");

          return _this9;
        }

        _createClass(Overlay, [{
          key: "show",
          value: function show() {
            var _this10 = this;

            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
            setTimeout(function () {
              return _this10.element.classList.add(Overlay.overlayActiveClass);
            }, delay);
          }
        }, {
          key: "hide",
          value: function hide() {
            var _this11 = this;

            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
            setTimeout(function () {
              return _this11.element.classList.remove(Overlay.overlayActiveClass);
            }, delay);
          }
        }], [{
          key: "create",
          value: function create() {
            var element = document.createElement("div");
            document.querySelector("body").appendChild(element);
            return new Overlay(element);
          }
        }]);

        return Overlay;
      }(_1.Component);

      Overlay.overlayActiveClass = "overlay_active";
      exports["default"] = Overlay;
    }, {
      ".": 8
    }],
    6: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _1 = require(".");

      var Toast =
      /*#__PURE__*/
      function (_$Component5) {
        _inherits(Toast, _$Component5);

        function Toast(element) {
          var _this12;

          _classCallCheck(this, Toast);

          _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Toast).call(this, element));
          _this12.overlay = _1.Overlay.create();
          _this12.toasterElement = element.parentElement;

          if (!_this12.toasterElement.classList.contains(Toast.classes.toaster)) {
            throw new Error("O elemento do toaster do toast n\xE3o cont\xE9m a classe '".concat(Toast.classes.toaster, "'."));
          }

          _this12.contentElement = element.querySelector(".".concat(Toast.classes.content));

          if (!_this12.contentElement) {
            throw new Error("O elemento do conteúdo do toast não foi encontrado.");
          }

          _this12.messageContentElement = _this12.contentElement.querySelector(".".concat(Toast.classes.contentMessage));

          if (!_this12.messageContentElement) {
            throw new Error("O elemento da mensagem do conteúdo do toast não foi encontrado.");
          }

          return _this12;
        }

        _createClass(Toast, [{
          key: "open",
          value: function open() {
            var _this13 = this;

            var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
            setTimeout(function () {
              return _this13.element.classList.add(Toast.classes.thisActive);
            }, delay);
          }
        }, {
          key: "close",
          value: function close() {
            var _this14 = this;

            var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7000;
            setTimeout(function () {
              _this14.element.classList.remove(Toast.classes.thisActive);

              _this14.overlay.hide();
            }, timeout);
          }
        }, {
          key: "remove",
          value: function remove() {
            var _this15 = this;

            var timeout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7000;
            setTimeout(function () {
              _this15.close(0);

              setTimeout(function () {
                _this15.element.remove();

                _this15.toasterElement.remove();

                _this15.overlay.element.remove();
              }, 400);
            }, timeout);
          }
        }], [{
          key: "create",
          value: function create(message) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            Object.assign(options, Toast.optionsDefault);
            var toasterElement = document.createElement("aside");
            toasterElement.classList.add(Toast.classes.toaster);
            document.body.append(toasterElement);
            var element = document.createElement("article");
            element.classList.add(Toast.classes["this"]);
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
              element.classList.add("toast_color-".concat(options.color));
            }

            if (options.iconClasses) {
              var _iconElement$classLis;

              var iconElement = document.createElement("div");

              (_iconElement$classLis = iconElement.classList).add.apply(_iconElement$classLis, [Toast.classes.icon].concat(_toConsumableArray(options.iconClasses.split(" "))));

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
              } else {
                toast.close(options.timeout);
              }
            } else {
              toast.overlay.show();
            }

            return toast;
          }
        }]);

        return Toast;
      }(_1.Component);

      Toast.classes = {
        toaster: "toaster",
        "this": "toast",
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
      exports["default"] = Toast;
    }, {
      ".": 8
    }],
    7: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _1 = require(".");

      var Toolbar =
      /*#__PURE__*/
      function (_$Component6) {
        _inherits(Toolbar, _$Component6);

        function Toolbar(element) {
          var _this16;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          _classCallCheck(this, Toolbar);

          _this16 = _possibleConstructorReturn(this, _getPrototypeOf(Toolbar).call(this, element));
          Object.assign(Toolbar.defaultOptions, options);

          if (options.hideInScroll) {
            _this16.hideInScroll();
          }

          return _this16;
        }

        _createClass(Toolbar, [{
          key: "hideInScroll",
          value: function hideInScroll() {
            var _this17 = this;

            var lastScrollTop = 0;
            window.addEventListener("scroll", function () {
              var scrollTop = document.documentElement.scrollTop;

              if (scrollTop > _this17.element.clientHeight && scrollTop > lastScrollTop) {
                _this17.element.classList.add(Toolbar.toolbarHideClass);
              } else {
                _this17.element.classList.remove(Toolbar.toolbarHideClass);
              }

              lastScrollTop = scrollTop;
            });
          }
        }], [{
          key: "initFromHtmlAttribute",
          value: function initFromHtmlAttribute(attributeName) {
            document.querySelectorAll("[".concat(attributeName, "]")).forEach(function (element) {
              return new Toolbar(element);
            });
          }
        }]);

        return Toolbar;
      }(_1.Component);

      Toolbar.defaultOptions = {
        hideInScroll: true
      };
      Toolbar.toolbarHideClass = "toolbar_hide";
      exports["default"] = Toolbar;
    }, {
      ".": 8
    }],
    8: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var Component_1 = require("./Component");

      exports.Component = Component_1["default"];

      var Dialog_1 = require("./Dialog");

      exports.Dialog = Dialog_1["default"];

      var Input_1 = require("./Input");

      exports.Input = Input_1["default"];

      var NavigationDrawer_1 = require("./NavigationDrawer");

      exports.NavigationDrawer = NavigationDrawer_1["default"];

      var Overlay_1 = require("./Overlay");

      exports.Overlay = Overlay_1["default"];

      var Toast_1 = require("./Toast");

      exports.Toast = Toast_1["default"];

      var Toolbar_1 = require("./Toolbar");

      exports.Toolbar = Toolbar_1["default"];
    }, {
      "./Component": 1,
      "./Dialog": 2,
      "./Input": 3,
      "./NavigationDrawer": 4,
      "./Overlay": 5,
      "./Toast": 6,
      "./Toolbar": 7
    }],
    9: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

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
    }, {
      "./components": 8
    }]
  }, {}, [9])(9);
});