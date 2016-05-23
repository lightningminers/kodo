(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Kodo"] = factory(require("react"));
	else
		root["Kodo"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
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
	
	var _button = __webpack_require__(1);
	
	var _button2 = _interopRequireDefault(_button);
	
	var _toast = __webpack_require__(4);
	
	var _toast2 = _interopRequireDefault(_toast);
	
	var _icon = __webpack_require__(5);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	var _dialog = __webpack_require__(6);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	var _header = __webpack_require__(13);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
		Button: _button2.default,
		Toast: _toast2.default,
		Icon: _icon2.default,
		Dialog: _dialog2.default,
		Header: _header2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
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
		component: _react.PropTypes.node,
		size: _react.PropTypes.string,
		type: _react.PropTypes.string,
		disabled: _react.PropTypes.bool
	};
	
	var defaultProps = {
		size: 'normal', // full small
		type: 'btn',
		disabled: false,
		tag: 'button'
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
				var _classNames;
	
				var _props = this.props;
				var type = _props.type;
				var size = _props.size;
				var disabled = _props.disabled;
				var className = _props.className;
				var children = _props.children;
				var href = _props.href;
				var tag = _props.tag;
	
				var Component = href ? 'a' : tag;
				var defaultClass = type === 'btn' ? type : 'btn-' + type;
				var css = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, defaultClass, true), _defineProperty(_classNames, className, className), _defineProperty(_classNames, 'btn-s', size === 'small'), _defineProperty(_classNames, 'full-width btn-m', size === 'full'), _defineProperty(_classNames, 'disabled', disabled), _classNames));
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
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _icon = __webpack_require__(5);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
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
	      var className = _props.className;
	
	      var css = (0, _classnames2.default)(_defineProperty({
	        'toast-wrap': true,
	        'active': show
	      }, className, className));
	      return _react2.default.createElement(
	        'section',
	        {
	          className: css
	        },
	        _react2.default.createElement(
	          'div',
	          { className: 'toast' },
	          _react2.default.createElement(
	            'p',
	            { className: 'toast-txt' },
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  value: _react.PropTypes.string,
	  status: _react.PropTypes.string
	};
	
	var defaultProps = {
	  value: '',
	  status: ''
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
	      var _classNames;
	
	      var _props = this.props;
	      var value = _props.value;
	      var children = _props.children;
	      var status = _props.status;
	      var className = _props.className;
	      var methods = _props.methods;
	
	      if (!this.props.value) {
	        return null;
	      }
	      var css = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'icon-' + value, true), _defineProperty(_classNames, status, !!status), _defineProperty(_classNames, className, className), _classNames));
	      return _react2.default.createElement(
	        'i',
	        _extends({}, methods, {
	          className: css
	        }),
	        children
	      );
	    }
	  }]);
	
	  return Icon;
	}(_react2.default.Component);
	
	exports.default = Icon;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _mask = __webpack_require__(7);
	
	var _mask2 = _interopRequireDefault(_mask);
	
	var _Alert = __webpack_require__(8);
	
	var _Alert2 = _interopRequireDefault(_Alert);
	
	var _Confirm = __webpack_require__(12);
	
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
	        'dialog-wrap': true,
	        'active': show
	      }, className, className));
	      var Component = type === 'alert' ? _Alert2.default : _Confirm2.default;
	      return _react2.default.createElement(
	        'section',
	        {
	          className: css
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function Mask(props) {
	  var type = props.type;
	
	  var css = (0, _classnames2.default)(_defineProperty({
	    'overlay active': true
	  }, 'overlay-' + type, !!type));
	  return React.createElement('div', { className: css });
	}
	
	exports.default = Mask;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _buttons = __webpack_require__(9);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	var _NoTitle = __webpack_require__(10);
	
	var _NoTitle2 = _interopRequireDefault(_NoTitle);
	
	var _ExistTitle = __webpack_require__(11);
	
	var _ExistTitle2 = _interopRequireDefault(_ExistTitle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Alert(props) {
	  var title = props.title;
	  var children = props.children;
	  var buttons = props.buttons;
	  var show = props.show;
	
	  var ContentNode = title ? _ExistTitle2.default : _NoTitle2.default;
	  return React.createElement(
	    'div',
	    { className: 'dialog', style: { display: show ? 'block' : 'none' } },
	    React.createElement(ContentNode, { title: title, children: children }),
	    React.createElement(
	      'footer',
	      { className: 'dialog-ft ft--full' },
	      (0, _buttons2.default)(buttons)
	    )
	  );
	}
	
	exports.default = Alert;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function renderButtons(buttons) {
	  return buttons.map(function (action, idx) {
	    var _classNames;
	
	    var label = action.label;
	    var className = action.className;
	
	    var css = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'ft-btn', true), _defineProperty(_classNames, className, className), _classNames));
	    return React.createElement(
	      'span',
	      _extends({}, action, {
	        className: css,
	        key: idx
	      }),
	      label
	    );
	  });
	}
	
	exports.default = renderButtons;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function NoTitle(_ref) {
	  var title = _ref.title;
	  var children = _ref.children;
	
	  return React.createElement(
	    "div",
	    { className: "dialog-bd" },
	    React.createElement(
	      "p",
	      { className: "bd-txt" },
	      children
	    )
	  );
	}
	
	exports.default = NoTitle;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function ExistTitle(_ref) {
	  var title = _ref.title;
	  var children = _ref.children;
	
	  return React.createElement(
	    "div",
	    { className: "dialog-bd" },
	    React.createElement(
	      "h3",
	      { className: "bd-tt" },
	      title
	    ),
	    React.createElement(
	      "p",
	      { className: "bd-txt txt--left" },
	      children
	    )
	  );
	}
	
	exports.default = ExistTitle;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _buttons = __webpack_require__(9);
	
	var _buttons2 = _interopRequireDefault(_buttons);
	
	var _NoTitle = __webpack_require__(10);
	
	var _NoTitle2 = _interopRequireDefault(_NoTitle);
	
	var _ExistTitle = __webpack_require__(11);
	
	var _ExistTitle2 = _interopRequireDefault(_ExistTitle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Confirm(props) {
	  var title = props.title;
	  var children = props.children;
	  var buttons = props.buttons;
	  var show = props.show;
	
	  var ContentNode = title ? _ExistTitle2.default : _NoTitle2.default;
	  return React.createElement(
	    'div',
	    { className: 'dialog', style: { display: show ? 'block' : 'none' } },
	    React.createElement(ContentNode, { title: title, children: children }),
	    React.createElement(
	      'footer',
	      { className: 'dialog-ft' },
	      (0, _buttons2.default)(buttons)
	    )
	  );
	}
	
	exports.default = Confirm;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Selector = __webpack_require__(14);
	
	var _Selector2 = _interopRequireDefault(_Selector);
	
	var _LeftItem = __webpack_require__(17);
	
	var _LeftItem2 = _interopRequireDefault(_LeftItem);
	
	var _RightItem = __webpack_require__(18);
	
	var _RightItem2 = _interopRequireDefault(_RightItem);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  title: _react.PropTypes.string,
	  modal: _react.PropTypes.string,
	  tags: _react.PropTypes.array,
	  complex: _react.PropTypes.array,
	  leftItem: _react.PropTypes.object,
	  rightItem: _react.PropTypes.array
	};
	
	var defaultProps = {
	  title: '', //标题
	  tags: [], // 选项标题
	  complex: [], //复合标题
	  modal: 'normal', //mutil
	  leftItem: {
	    icon: 'v-left',
	    text: '',
	    methods: {}
	  },
	  rightItem: [{
	    idx: '1',
	    icon: 'dots',
	    text: '',
	    methods: {}
	  }]
	};
	
	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);
	
	  function Header() {
	    _classCallCheck(this, Header);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	  }
	
	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var leftItem = _props.leftItem;
	      var style = _props.style;
	      var rightItem = _props.rightItem;
	      var methods = leftItem.methods;
	
	      return _react2.default.createElement(
	        'header',
	        {
	          style: style,
	          className: 'header'
	        },
	        _react2.default.createElement(
	          'div',
	          _extends({}, methods, {
	            className: 'header-left'
	          }),
	          _react2.default.createElement(_LeftItem2.default, { leftItem: leftItem })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'header-right' },
	          (0, _RightItem2.default)(rightItem)
	        ),
	        _react2.default.createElement(_Selector2.default, this.props)
	      );
	    }
	  }]);
	
	  return Header;
	}(_react2.default.Component);
	
	Header.propTypes = propTypes;
	Header.defaultProps = defaultProps;
	
	exports.default = Header;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Tags = __webpack_require__(15);
	
	var _Tags2 = _interopRequireDefault(_Tags);
	
	var _ComplexTitle = __webpack_require__(16);
	
	var _ComplexTitle2 = _interopRequireDefault(_ComplexTitle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Selector(props) {
	  var title = props.title;
	  var tags = props.tags;
	  var children = props.children;
	  var modal = props.modal;
	  var complex = props.complex;
	
	  var css = (0, _classnames2.default)({
	    'page-tt': title && modal === 'normal' || complex && complex.length,
	    'page-tabs-tt': tags && tags.length && !title,
	    'page-mutil-tt': modal === 'mutil'
	  });
	  var Component = !title && tags && tags.length ? _Tags2.default : _ComplexTitle2.default;
	  var select = title ? title : Component(props);
	  return React.createElement(
	    'h1',
	    {
	      className: css
	    },
	    select
	  );
	}
	
	exports.default = Selector;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function Tags(props) {
	  var tags = props.tags;
	
	  console.log(tags);
	  if (!tags.length || !tags) {
	    return null;
	  }
	  return tags.map(function (action, idx) {
	    var active = action.active;
	    var text = action.text;
	    var methods = action.methods;
	
	    var css = (0, _classnames2.default)({
	      'tt-option': true,
	      'active': active
	    });
	    return React.createElement(
	      'span',
	      _extends({}, methods, {
	        key: idx,
	        className: css
	      }),
	      text
	    );
	  });
	}
	
	exports.default = Tags;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ComplexTitle(props) {
	  var complex = props.complex;
	
	  if (!complex && !complex.length) {
	    return null;
	  }
	  return complex.map(function (action, idx) {
	    var type = action.type;
	    var text = action.text;
	
	    var css = (0, _classnames2.default)({
	      'tt-l': type === 'big',
	      'tt-s': type === 'small'
	    });
	    return React.createElement(
	      'span',
	      {
	        key: idx,
	        className: css
	      },
	      text
	    );
	  });
	}
	
	exports.default = ComplexTitle;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _icon = __webpack_require__(5);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function LeftItem(props) {
	  var leftItem = props.leftItem;
	  var icon = leftItem.icon;
	  var text = leftItem.text;
	
	  if (icon) {
	    return React.createElement(_icon2.default, {
	      value: icon,
	      className: "header-icon js-back"
	    });
	  } else {
	    if (text) {
	      return React.createElement(
	        "span",
	        {
	          className: "header-btn"
	        },
	        text
	      );
	    } else {
	      return React.createElement(
	        "span",
	        { className: "header-mix" },
	        React.createElement(_icon2.default, {
	          value: icon
	        }),
	        React.createElement(
	          "span",
	          { className: "mix-txt" },
	          text
	        )
	      );
	    }
	  }
	  return null;
	}
	
	exports.default = LeftItem;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _icon = __webpack_require__(5);
	
	var _icon2 = _interopRequireDefault(_icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function RightItem(props) {
	  var rightItem = props;
	  if (!rightItem && !rightItem.length) {
	    return null;
	  }
	  var Component = rightItem.map(function (action, idx) {
	    var icon = action.icon;
	    var text = action.text;
	    var methods = action.methods;
	
	    if (icon) {
	      return React.createElement(_icon2.default, {
	        methods: methods,
	        key: idx,
	        value: icon,
	        className: "header-icon"
	      });
	    } else {
	      if (text) {
	        return React.createElement(
	          "span",
	          _extends({}, methods, {
	            key: idx,
	            className: "header-btn"
	          }),
	          text
	        );
	      }
	    }
	    return null;
	  });
	  return Component;
	}
	
	exports.default = RightItem;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=kodo.js.map