(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Kodo"] = factory(require("react"));
	else
		root["Kodo"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _button = __webpack_require__(9);
	
	var _toast = __webpack_require__(13);
	
	var _toast2 = _interopRequireDefault(_toast);
	
	var _icon = __webpack_require__(15);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _dialog = __webpack_require__(16);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
		Button: _button.Button,
		Toast: _toast2.default,
		Icon: _icon2.default,
		Dialog: _dialog2.default
	};
	
	__webpack_require__(20);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _button = __webpack_require__(10);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
		Button: _button2.default
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(12);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 按钮常见有三个操作场景，确定（plain），默认（default），警告或者取消（warn）
	 */
	
	var propTypes = {
		component: _react.PropTypes.node, //	自定义的button组件
		size: _react.PropTypes.string, //	按钮大小
		type: _react.PropTypes.string, //	按钮的类型
		disabled: _react.PropTypes.bool //	是否禁用
	};
	
	var defaultProps = {
		size: 'normal',
		type: 'default',
		disabled: false
	};
	
	var Button = function (_React$Component) {
		_inherits(Button, _React$Component);
	
		function Button() {
			_classCallCheck(this, Button);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
		}
	
		_createClass(Button, [{
			key: 'render',
			value: function render() {
				var _props = this.props;
				var type = _props.type;
				var size = _props.size;
				var disabled = _props.disabled;
				var className = _props.className;
				var component = _props.component;
				var children = _props.children;
	
				var Component = component || (this.props.href ? 'a' : 'button');
				var css = (0, _classnames2.default)(_defineProperty({
					kodo_btn: true,
					kodo_btn_primary: type === 'primary',
					kodo_btn_default: type === 'default',
					kodo_btn_plain: type === 'plain',
					kodo_btn_warn: type === 'warn',
					kodo_btn_mini: size === 'small',
					kodo_btn_disabled: disabled
				}, className, className));
				return _react2.default.createElement(
					Component,
					_extends({}, this.props, {
						className: css
					}),
					children
				);
			}
		}]);
	
		return Button;
	}(_react2.default.Component);
	
	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;
	
	exports.default = Button;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(12);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mask = __webpack_require__(14);
	
	var _mask2 = _interopRequireDefault(_mask);
	
	var _icon = __webpack_require__(15);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  icon: _react.PropTypes.string,
	  show: _react.PropTypes.bool
	};
	
	var defaultProps = {
	  icon: '',
	  show: false
	};
	
	var Toast = function (_React$Component) {
	  _inherits(Toast, _React$Component);
	
	  function Toast() {
	    _classCallCheck(this, Toast);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Toast).apply(this, arguments));
	  }
	
	  _createClass(Toast, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var show = _props.show;
	      var children = _props.children;
	      var icon = _props.icon;
	
	
	      return _react2.default.createElement(
	        'div',
	        { style: { display: show ? 'block' : 'none' } },
	        _react2.default.createElement(_mask2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'kodo_toast' },
	          _react2.default.createElement(
	            'div',
	            { className: 'kodo_toast_position' },
	            _react2.default.createElement(_icon2.default, { value: icon }),
	            children
	          )
	        )
	      );
	    }
	  }]);
	
	  return Toast;
	}(_react2.default.Component);
	
	exports.default = Toast;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classnames = __webpack_require__(12);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function Mask(props) {
	  var type = props.type;
	
	  var css = (0, _classnames2.default)(_defineProperty({
	    kodo_mask_transparent: true
	  }, 'kodo_mask_' + type, !!type));
	  return React.createElement('div', { className: css });
	}
	
	exports.default = Mask;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(12);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  value: _react.PropTypes.string
	};
	
	var Icon = function (_React$Component) {
	  _inherits(Icon, _React$Component);
	
	  function Icon() {
	    _classCallCheck(this, Icon);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).apply(this, arguments));
	  }
	
	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var value = _props.value;
	      var children = _props.children;
	
	      if (!this.props.value) {
	        return null;
	      }
	      var css = (0, _classnames2.default)(_defineProperty({}, 'ion-' + value, true));
	      return _react2.default.createElement(
	        'i',
	        { className: css },
	        children
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react2.default.Component);
	
	exports.default = Icon;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(11);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(12);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mask = __webpack_require__(14);
	
	var _mask2 = _interopRequireDefault(_mask);
	
	var _Alert = __webpack_require__(17);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Confirm = __webpack_require__(19);
	
	var _Confirm2 = _interopRequireDefault(_Confirm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  type: _react.PropTypes.string,
	  show: _react.PropTypes.bool,
	  title: _react.PropTypes.string,
	  buttons: _react.PropTypes.array
	};
	
	var defaultProps = {
	  type: 'alert',
	  show: false,
	  title: '',
	  buttons: []
	};
	
	var Dialog = function (_React$Component) {
	  _inherits(Dialog, _React$Component);
	
	  function Dialog() {
	    _classCallCheck(this, Dialog);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).apply(this, arguments));
	  }
	
	  _createClass(Dialog, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var type = _props.type;
	      var show = _props.show;
	      var className = _props.className;
	      var title = _props.title;
	
	      var css = (0, _classnames2.default)(_defineProperty({
	        'kodo_dialog_alert': type === 'alert',
	        'kodo_dialog_confirm': type === 'confirm'
	      }, className, className));
	      var Component = type === 'alert' ? _Alert2.default : _Confirm2.default;
	      return _react2.default.createElement(
	        'div',
	        {
	          className: css,
	          style: { display: show ? 'block' : 'none' }
	        },
	        _react2.default.createElement(_mask2.default, { type: 'dialog' }),
	        _react2.default.createElement(Component, this.props)
	      );
	    }
	  }]);
	
	  return Dialog;
	}(_react2.default.Component);
	
	Dialog.propTypes = propTypes;
	Dialog.defaultProps = defaultProps;
	
	exports.default = Dialog;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _buttons = __webpack_require__(18);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Alert(props) {
	  var title = props.title;
	  var children = props.children;
	  var buttons = props.buttons;
	
	  return React.createElement(
	    "div",
	    { className: "kodo_dialog" },
	    React.createElement(
	      "div",
	      { className: "kodo_dialog_title" },
	      React.createElement(
	        "strong",
	        null,
	        title
	      )
	    ),
	    React.createElement(
	      "div",
	      { className: "kodo_dialog_container" },
	      children
	    ),
	    React.createElement(
	      "div",
	      { className: "kodo_dialog_footer" },
	      (0, _buttons2.default)(buttons)
	    )
	  );
	}
	
	exports.default = Alert;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function renderButtons(buttons) {
	  return buttons.map(function (action, idx) {
	    var label = action.label;
	
	    var type = action.type || 'plain';
	    return React.createElement(
	      "a",
	      _extends({}, action, {
	        type: type,
	        key: idx,
	        href: "javascript:;"
	      }),
	      label
	    );
	  });
	}
	
	exports.default = renderButtons;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _buttons = __webpack_require__(18);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Confirm(props) {
	  var title = props.title;
	  var children = props.children;
	  var buttons = props.buttons;
	
	  return React.createElement(
	    "div",
	    { className: "kodo_dialog" },
	    React.createElement(
	      "div",
	      { className: "kodo_dialog_title" },
	      React.createElement(
	        "strong",
	        null,
	        title
	      )
	    ),
	    React.createElement(
	      "div",
	      { className: "kodo_dialog_container" },
	      children
	    ),
	    React.createElement(
	      "div",
	      { className: "kodo_dialog_footer" },
	      (0, _buttons2.default)(buttons)
	    )
	  );
	}
	
	exports.default = Confirm;

/***/ },
/* 20 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;
//# sourceMappingURL=kodo.js.map