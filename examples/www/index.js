webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _router = __webpack_require__(243);
	
	var _router2 = _interopRequireDefault(_router);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  App 启动
	_router2.default.start();

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactRouter = __webpack_require__(168);
	
	var _nopages = __webpack_require__(244);
	
	var _nopages2 = _interopRequireDefault(_nopages);
	
	var _index = __webpack_require__(245);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _button = __webpack_require__(246);
	
	var _button2 = _interopRequireDefault(_button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  children: _react.PropTypes.element
	};
	
	// Web App 启动
	
	var AppStart = function (_React$Component) {
	  _inherits(AppStart, _React$Component);
	
	  function AppStart() {
	    _classCallCheck(this, AppStart);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AppStart).apply(this, arguments));
	  }
	
	  _createClass(AppStart, [{
	    key: 'render',
	    value: function render() {
	      if (!this.props.children) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'app-container'
	        },
	        this.props.children
	      );
	    }
	  }]);
	
	  return AppStart;
	}(_react2.default.Component);
	
	AppStart.propTypes = propTypes;
	
	module.exports = {
	  start: function start() {
	    (0, _reactDom.render)(_react2.default.createElement(
	      _reactRouter.Router,
	      {
	        history: _reactRouter.hashHistory
	      },
	      _react2.default.createElement(
	        _reactRouter.Route,
	        {
	          path: '/',
	          component: AppStart
	        },
	        _react2.default.createElement(_reactRouter.Route, { path: 'index', component: _index2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'button', component: _button2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '*', component: _nopages2.default })
	      )
	    ), document.getElementById('app-container'));
	  }
	};

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//  路由导航错误404时的处理
	
	function NoPages() {
	  return _react2.default.createElement(
	    "div",
	    { className: "no-pages-404" },
	    _react2.default.createElement(
	      "h1",
	      null,
	      "no pages 404"
	    )
	  );
	}
	
	module.exports = NoPages;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var IndexPages = function (_React$Component) {
	  _inherits(IndexPages, _React$Component);
	
	  function IndexPages() {
	    _classCallCheck(this, IndexPages);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(IndexPages).apply(this, arguments));
	  }
	
	  _createClass(IndexPages, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "index-page" },
	        _react2.default.createElement(
	          "a",
	          { href: "#button" },
	          "Button"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#icon" },
	          "Icon"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#toast" },
	          "Toast"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#dialog" },
	          "Dialog"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#header" },
	          "Header"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#nav" },
	          "Nav"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#footer" },
	          "Footer"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#actionsheet" },
	          "ActionSheet"
	        ),
	        _react2.default.createElement(
	          "a",
	          { href: "#forms" },
	          "Forms"
	        )
	      );
	    }
	  }]);
	
	  return IndexPages;
	}(_react2.default.Component);
	
	exports.default = IndexPages;

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _kodo = __webpack_require__(247);
	
	var _header = __webpack_require__(249);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  title: _react.PropTypes.string
	};
	
	var defaultProps = {
	  title: 'Button'
	};
	
	var ButtonPages = function (_React$Component) {
	  _inherits(ButtonPages, _React$Component);
	
	  function ButtonPages(props) {
	    _classCallCheck(this, ButtonPages);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonPages).call(this, props));
	
	    _this._handlerPer = _this.handlerPer.bind(_this);
	    return _this;
	  }
	
	  _createClass(ButtonPages, [{
	    key: 'handlerPer',
	    value: function handlerPer(e) {
	      e.preventDefault();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var title = this.props.title;
	
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_header2.default, { title: title }),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _kodo.Button,
	            {
	              href: 'https://github.com/icepy',
	              onClick: this._handlerPer,
	              style: { margin: 5 }
	            },
	            'default'
	          ),
	          _react2.default.createElement(
	            _kodo.Button,
	            {
	              type: 'primary',
	              href: 'https://github.com/icepy',
	              onClick: this._handlerPer,
	              style: { margin: 5 }
	            },
	            'primary'
	          ),
	          _react2.default.createElement(
	            _kodo.Button,
	            {
	              type: 'stress',
	              href: 'https://github.com/icepy',
	              onClick: this._handlerPer,
	              style: { margin: 5 }
	            },
	            'stress'
	          ),
	          _react2.default.createElement(
	            _kodo.Button,
	            { type: 'outline', tag: 'span', style: { margin: 5 } },
	            'outline'
	          ),
	          _react2.default.createElement(
	            _kodo.Button,
	            { disabled: true, style: { margin: 5 } },
	            'disabled'
	          ),
	          _react2.default.createElement(
	            _kodo.Button,
	            { type: 'primary', size: 'full' },
	            'Full button'
	          ),
	          _react2.default.createElement(
	            _kodo.Button,
	            { type: 'stress', size: 'small', style: { margin: 5 } },
	            'small button'
	          )
	        )
	      );
	    }
	  }]);
	
	  return ButtonPages;
	}(_react2.default.Component);
	
	ButtonPages.propTypes = propTypes;
	ButtonPages.defaultProps = defaultProps;
	
	exports.default = ButtonPages;

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory(__webpack_require__(1));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Kodo"] = factory(require("react"));else root["Kodo"] = factory(root["React"]);
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_2__) {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				var _button = __webpack_require__(1);
	
				var _button2 = _interopRequireDefault(_button);
	
				var _toast = __webpack_require__(4);
	
				var _toast2 = _interopRequireDefault(_toast);
	
				var _svg = __webpack_require__(6);
	
				var _svg2 = _interopRequireDefault(_svg);
	
				var _mask = __webpack_require__(7);
	
				var _mask2 = _interopRequireDefault(_mask);
	
				var _icon = __webpack_require__(5);
	
				var _icon2 = _interopRequireDefault(_icon);
	
				var _dialog = __webpack_require__(8);
	
				var _dialog2 = _interopRequireDefault(_dialog);
	
				var _header = __webpack_require__(14);
	
				var _header2 = _interopRequireDefault(_header);
	
				var _nav = __webpack_require__(20);
	
				var _nav2 = _interopRequireDefault(_nav);
	
				var _footer = __webpack_require__(21);
	
				var _footer2 = _interopRequireDefault(_footer);
	
				var _actionsheet = __webpack_require__(23);
	
				var _actionsheet2 = _interopRequireDefault(_actionsheet);
	
				var _forms = __webpack_require__(25);
	
				var _forms2 = _interopRequireDefault(_forms);
	
				var _input = __webpack_require__(26);
	
				var _input2 = _interopRequireDefault(_input);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				module.exports = {
					Button: _button2.default,
					Toast: _toast2.default,
					Icon: _icon2.default,
					Dialog: _dialog2.default,
					Header: _header2.default,
					Nav: _nav2.default,
					Footer: _footer2.default,
					ActionSheet: _actionsheet2.default,
					Svg: _svg2.default,
					Mask: _mask2.default,
					Forms: _forms2.default,
					Input: _input2.default
				};
	
				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
							return _react2.default.createElement(Component, _extends({}, this.props, {
								className: css
							}), children);
						}
					}]);
	
					return Button;
				}(_react2.default.Component);
	
				Button.propTypes = propTypes;
				Button.defaultProps = defaultProps;
	
				exports.default = Button;
	
				/***/
			},
			/* 2 */
			/***/function (module, exports) {
	
				module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
				/***/
			},
			/* 3 */
			/***/function (module, exports, __webpack_require__) {
	
				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
	                                                                    Copyright (c) 2016 Jed Watson.
	                                                                    Licensed under the MIT License (MIT), see
	                                                                    http://jedwatson.github.io/classnames
	                                                                    */
				/* global define */
	
				(function () {
					'use strict';
	
					var hasOwn = {}.hasOwnProperty;
	
					function classNames() {
						var classes = [];
	
						for (var i = 0; i < arguments.length; i++) {
							var arg = arguments[i];
							if (!arg) continue;
	
							var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
	
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
				})();
	
				/***/
			},
			/* 4 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				var _icon = __webpack_require__(5);
	
				var _icon2 = _interopRequireDefault(_icon);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
							return _react2.default.createElement('section', {
								className: css
							}, _react2.default.createElement('div', { className: 'toast' }, _react2.default.createElement('p', { className: 'toast-txt' }, children)));
						}
					}]);
	
					return Toast;
				}(_react2.default.Component);
	
				exports.default = Toast;
	
				/***/
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
							return _react2.default.createElement('i', _extends({}, methods, {
								className: css
							}), children);
						}
					}]);
	
					return Icon;
				}(_react2.default.Component);
	
				exports.default = Icon;
	
				/***/
			},
			/* 6 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function Svg(props) {
					var svg = props.svg;
	
					console.log(props);
					if (!svg) {
						return null;
					}
					var css = (0, _classnames2.default)(_defineProperty({
						'item-icon icon-svg': true
					}, 'icon-' + svg, !!svg));
					var href = 'images/icons.svg#icon-' + svg;
					return React.createElement('svg', {
						className: css
					}, React.createElement('use', { href: href }));
				}
				exports.default = Svg;
	
				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function Mask(props) {
					var type = props.type;
	
					var css = (0, _classnames2.default)(_defineProperty({
						'overlay active': true
					}, 'overlay-' + type, !!type));
					return React.createElement('div', { className: css });
				}
	
				exports.default = Mask;
	
				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				var _mask = __webpack_require__(7);
	
				var _mask2 = _interopRequireDefault(_mask);
	
				var _Alert = __webpack_require__(9);
	
				var _Alert2 = _interopRequireDefault(_Alert);
	
				var _Confirm = __webpack_require__(13);
	
				var _Confirm2 = _interopRequireDefault(_Confirm);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
							return _react2.default.createElement('section', {
								className: css
							}, _react2.default.createElement(_mask2.default, { type: 'dialog' }), _react2.default.createElement(Component, this.props));
						}
					}]);
	
					return Dialog;
				}(_react2.default.Component);
	
				Dialog.propTypes = propTypes;
				Dialog.defaultProps = defaultProps;
	
				exports.default = Dialog;
	
				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _buttons = __webpack_require__(10);
	
				var _buttons2 = _interopRequireDefault(_buttons);
	
				var _NoTitle = __webpack_require__(11);
	
				var _NoTitle2 = _interopRequireDefault(_NoTitle);
	
				var _ExistTitle = __webpack_require__(12);
	
				var _ExistTitle2 = _interopRequireDefault(_ExistTitle);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function Alert(props) {
					var title = props.title;
					var children = props.children;
					var buttons = props.buttons;
					var show = props.show;
	
					var ContentNode = title ? _ExistTitle2.default : _NoTitle2.default;
					return React.createElement('div', { className: 'dialog', style: { display: show ? 'block' : 'none' } }, React.createElement(ContentNode, { title: title, children: children }), React.createElement('footer', { className: 'dialog-ft ft--full' }, (0, _buttons2.default)(buttons)));
				}
	
				exports.default = Alert;
	
				/***/
			},
			/* 10 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function renderButtons(buttons) {
					return buttons.map(function (action, idx) {
						var _classNames;
	
						var label = action.label;
						var className = action.className;
	
						var css = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'ft-btn', true), _defineProperty(_classNames, className, className), _classNames));
						return React.createElement('span', _extends({}, action, {
							className: css,
							key: idx
						}), label);
					});
				}
	
				exports.default = renderButtons;
	
				/***/
			},
			/* 11 */
			/***/function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				function NoTitle(_ref) {
					var title = _ref.title;
					var children = _ref.children;
	
					return React.createElement("div", { className: "dialog-bd" }, React.createElement("p", { className: "bd-txt" }, children));
				}
	
				exports.default = NoTitle;
	
				/***/
			},
			/* 12 */
			/***/function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				function ExistTitle(_ref) {
					var title = _ref.title;
					var children = _ref.children;
	
					return React.createElement("div", { className: "dialog-bd" }, React.createElement("h3", { className: "bd-tt" }, title), React.createElement("p", { className: "bd-txt txt--left" }, children));
				}
	
				exports.default = ExistTitle;
	
				/***/
			},
			/* 13 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _buttons = __webpack_require__(10);
	
				var _buttons2 = _interopRequireDefault(_buttons);
	
				var _NoTitle = __webpack_require__(11);
	
				var _NoTitle2 = _interopRequireDefault(_NoTitle);
	
				var _ExistTitle = __webpack_require__(12);
	
				var _ExistTitle2 = _interopRequireDefault(_ExistTitle);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function Confirm(props) {
					var title = props.title;
					var children = props.children;
					var buttons = props.buttons;
					var show = props.show;
	
					var ContentNode = title ? _ExistTitle2.default : _NoTitle2.default;
					return React.createElement('div', { className: 'dialog', style: { display: show ? 'block' : 'none' } }, React.createElement(ContentNode, { title: title, children: children }), React.createElement('footer', { className: 'dialog-ft' }, (0, _buttons2.default)(buttons)));
				}
	
				exports.default = Confirm;
	
				/***/
			},
			/* 14 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				var _Selector = __webpack_require__(15);
	
				var _Selector2 = _interopRequireDefault(_Selector);
	
				var _LeftItem = __webpack_require__(18);
	
				var _LeftItem2 = _interopRequireDefault(_LeftItem);
	
				var _RightItem = __webpack_require__(19);
	
				var _RightItem2 = _interopRequireDefault(_RightItem);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
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
	
							return _react2.default.createElement('header', {
								style: style,
								className: 'header'
							}, _react2.default.createElement('div', _extends({}, methods, {
								className: 'header-left'
							}), _react2.default.createElement(_LeftItem2.default, { leftItem: leftItem })), _react2.default.createElement('div', { className: 'header-right' }, (0, _RightItem2.default)(rightItem)), _react2.default.createElement(_Selector2.default, this.props));
						}
					}]);
	
					return Header;
				}(_react2.default.Component);
	
				Header.propTypes = propTypes;
				Header.defaultProps = defaultProps;
	
				exports.default = Header;
	
				/***/
			},
			/* 15 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				var _Tags = __webpack_require__(16);
	
				var _Tags2 = _interopRequireDefault(_Tags);
	
				var _ComplexTitle = __webpack_require__(17);
	
				var _ComplexTitle2 = _interopRequireDefault(_ComplexTitle);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
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
					return React.createElement('h1', {
						className: css
					}, select);
				}
	
				exports.default = Selector;
	
				/***/
			},
			/* 16 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
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
						return React.createElement('span', _extends({}, methods, {
							key: idx,
							className: css
						}), text);
					});
				}
	
				exports.default = Tags;
	
				/***/
			},
			/* 17 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
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
						return React.createElement('span', {
							key: idx,
							className: css
						}, text);
					});
				}
	
				exports.default = ComplexTitle;
	
				/***/
			},
			/* 18 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _icon = __webpack_require__(5);
	
				var _icon2 = _interopRequireDefault(_icon);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
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
							return React.createElement("span", {
								className: "header-btn"
							}, text);
						} else {
							return React.createElement("span", { className: "header-mix" }, React.createElement(_icon2.default, {
								value: icon
							}), React.createElement("span", { className: "mix-txt" }, text));
						}
					}
					return null;
				}
	
				exports.default = LeftItem;
	
				/***/
			},
			/* 19 */
			/***/function (module, exports, __webpack_require__) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _icon = __webpack_require__(5);
	
				var _icon2 = _interopRequireDefault(_icon);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
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
								return React.createElement("span", _extends({}, methods, {
									key: idx,
									className: "header-btn"
								}), text);
							}
						}
						return null;
					});
					return Component;
				}
	
				exports.default = RightItem;
	
				/***/
			},
			/* 20 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
				var propTypes = {
					items: _react.PropTypes.array
				};
	
				var defaultProps = {
					items: []
				};
	
				var Nav = function (_React$Component) {
					_inherits(Nav, _React$Component);
	
					function Nav() {
						_classCallCheck(this, Nav);
	
						return _possibleConstructorReturn(this, Object.getPrototypeOf(Nav).apply(this, arguments));
					}
	
					_createClass(Nav, [{
						key: 'render',
						value: function render() {
							var items = this.props.items;
	
							if (!items && !items.length) {
								return null;
							}
							var renderItems = items.map(function (action, idx) {
								var active = action.active;
								var text = action.text;
								var methods = action.methods;
								var url = action.url;
	
								var css = (0, _classnames2.default)({
									'nav-item': true,
									'active': active
								});
								var Url = url ? url : '#';
								return _react2.default.createElement('li', _extends({}, methods, {
									key: idx,
									className: css
								}), _react2.default.createElement('a', {
									className: 'item-txt',
									href: Url
								}, text));
							});
							return _react2.default.createElement('nav', {
								className: 'nav-top'
							}, _react2.default.createElement('ul', {
								className: 'nav-list nav-list--top'
							}, renderItems));
						}
					}]);
	
					return Nav;
				}(_react2.default.Component);
	
				Nav.propTypes = propTypes;
				Nav.defaultProps = defaultProps;
	
				exports.default = Nav;
	
				/***/
			},
			/* 21 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				var _svg = __webpack_require__(6);
	
				var _svg2 = _interopRequireDefault(_svg);
	
				var _Selector = __webpack_require__(22);
	
				var _Selector2 = _interopRequireDefault(_Selector);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
				var propTypes = {
					items: _react.PropTypes.array
				};
	
				var defaultProps = {
					items: []
				};
	
				// type : circle/num
	
				var Footer = function (_React$Component) {
					_inherits(Footer, _React$Component);
	
					function Footer() {
						_classCallCheck(this, Footer);
	
						return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
					}
	
					_createClass(Footer, [{
						key: 'render',
						value: function render() {
							var items = this.props.items;
	
							if (!items && !items.length) {
								return null;
							}
							var renderItems = items.map(function (action, idx) {
								var active = action.active;
								var type = action.type;
								var methods = action.methods;
								var count = action.count;
								var text = action.text;
								var svg = action.svg;
	
								var liCss = (0, _classnames2.default)({
									'nav-item': true,
									'active': active
								});
								return _react2.default.createElement('li', _extends({}, methods, {
									key: idx,
									className: liCss
								}), _react2.default.createElement(_svg2.default, { svg: svg }), _react2.default.createElement(_Selector2.default, { type: type, count: count }), _react2.default.createElement('p', {
									className: 'item-txt'
								}, text));
							});
							return _react2.default.createElement('footer', { className: 'fixed-bottom' }, _react2.default.createElement('ul', { className: 'nav-list nav-list--bottom' }, renderItems));
						}
					}]);
	
					return Footer;
				}(_react2.default.Component);
	
				Footer.propTypes = propTypes;
				Footer.defaultProps = defaultProps;
	
				exports.default = Footer;
	
				/***/
			},
			/* 22 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function Selector(props) {
					var type = props.type;
					var count = props.count;
	
					if (!type) {
						return null;
					}
					var css = (0, _classnames2.default)(_defineProperty({}, 'remind-' + type, type));
					return React.createElement('span', {
						className: css
					}, count);
				}
	
				exports.default = Selector;
	
				/***/
			},
			/* 23 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _mask = __webpack_require__(7);
	
				var _mask2 = _interopRequireDefault(_mask);
	
				var _renderItems = __webpack_require__(24);
	
				var _renderItems2 = _interopRequireDefault(_renderItems);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
				var propTypes = {
					items: _react.PropTypes.array,
					buttons: _react.PropTypes.array,
					animation: _react.PropTypes.string,
					show: _react.PropTypes.bool
				};
	
				var defaultProps = {
					items: [],
					buttons: [],
					animation: 'normal',
					show: false
				};
	
				var ActionSheet = function (_React$Component) {
					_inherits(ActionSheet, _React$Component);
	
					function ActionSheet() {
						_classCallCheck(this, ActionSheet);
	
						return _possibleConstructorReturn(this, Object.getPrototypeOf(ActionSheet).apply(this, arguments));
					}
	
					_createClass(ActionSheet, [{
						key: 'render',
						value: function render() {
							var _props = this.props;
							var animation = _props.animation;
							var items = _props.items;
							var buttons = _props.buttons;
							var show = _props.show;
	
							return _react2.default.createElement('div', {
								style: { display: show ? 'block' : 'none' }
							}, _react2.default.createElement(_mask2.default, { type: 'action-sheet' }), _react2.default.createElement('section', {
								className: 'actionsheet'
							}, _react2.default.createElement('ul', { className: 'line-list line-list--center' }, (0, _renderItems2.default)(items)), _react2.default.createElement('ul', {
								className: 'line-list line-list--center'
							}, (0, _renderItems2.default)(buttons))));
						}
					}]);
	
					return ActionSheet;
				}(_react2.default.Component);
	
				ActionSheet.propTypes = propTypes;
				ActionSheet.defaultProps = defaultProps;
	
				exports.default = ActionSheet;
	
				/***/
			},
			/* 24 */
			/***/function (module, exports) {
	
				"use strict";
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				function renderItems(items) {
					if (!items || !items.length) {
						return null;
					}
					return items.map(function (action, idx) {
						var children = action.children;
						var methods = action.methods;
	
						return React.createElement("li", _extends({}, methods, {
							key: idx,
							className: "line-item"
						}), children);
					});
				}
	
				exports.default = renderItems;
	
				/***/
			},
			/* 25 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _defineProperty(obj, key, value) {
					if (key in obj) {
						Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
					} else {
						obj[key] = value;
					}return obj;
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
				var propTypes = {
					type: _react.PropTypes.string
				};
	
				var defaultProps = {
					type: 'normal'
				};
	
				var Forms = function (_React$Component) {
					_inherits(Forms, _React$Component);
	
					function Forms() {
						_classCallCheck(this, Forms);
	
						return _possibleConstructorReturn(this, Object.getPrototypeOf(Forms).apply(this, arguments));
					}
	
					_createClass(Forms, [{
						key: 'render',
						value: function render() {
							var _props = this.props;
							var children = _props.children;
							var type = _props.type;
	
							var css = (0, _classnames2.default)(_defineProperty({
								form: true
							}, 'form--no-' + type, type !== 'normal'));
							return _react2.default.createElement('form', {
								className: css
							}, children);
						}
					}]);
	
					return Forms;
				}(_react2.default.Component);
	
				Forms.propTypes = propTypes;
				Forms.defaultProps = defaultProps;
	
				exports.default = Forms;
	
				/***/
			},
			/* 26 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();
	
				var _react = __webpack_require__(2);
	
				var _react2 = _interopRequireDefault(_react);
	
				var _Clear = __webpack_require__(27);
	
				var _Clear2 = _interopRequireDefault(_Clear);
	
				var _Normal = __webpack_require__(28);
	
				var _Normal2 = _interopRequireDefault(_Normal);
	
				var _Text = __webpack_require__(29);
	
				var _Text2 = _interopRequireDefault(_Text);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}
	
				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}
	
				var propTypes = {
					label: _react.PropTypes.string,
					type: _react.PropTypes.string,
					value: _react.PropTypes.string,
					featrue: _react.PropTypes.string,
					mutable: _react.PropTypes.bool,
					placeholder: _react.PropTypes.bool
				};
				var defaultProps = {
					label: '',
					type: 'text',
					value: '',
					featrue: 'text', //clear
					mutable: true,
					placeholder: false
				};
	
				var Input = function (_React$Component) {
					_inherits(Input, _React$Component);
	
					function Input(props) {
						_classCallCheck(this, Input);
	
						return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));
					}
	
					_createClass(Input, [{
						key: 'render',
						value: function render() {
							var _props = this.props;
							var type = _props.type;
							var label = _props.label;
							var featrue = _props.featrue;
							var methods = _props.methods;
							var value = _props.value;
							var mutable = _props.mutable;
							var featrueMethods = _props.featrueMethods;
							var placeholder = _props.placeholder;
	
							var FeatrueInput = null;
							switch (featrue) {
								case 'clear':
									FeatrueInput = _Clear2.default;
									break;
								case 'normal':
									FeatrueInput = _Normal2.default;
									break;
								default:
									FeatrueInput = _Text2.default;
							}
							return _react2.default.createElement(FeatrueInput, {
								type: type,
								label: label,
								methods: methods,
								value: value,
								mutable: mutable,
								featrueMethods: featrueMethods,
								placeholder: placeholder
							});
						}
					}]);
	
					return Input;
				}(_react2.default.Component);
	
				Input.propTypes = propTypes;
				Input.defaultProps = defaultProps;
	
				exports.default = Input;
	
				/***/
			},
			/* 27 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function Clear(props) {
					var css = (0, _classnames2.default)({
						'form-item': true
					});
					var type = props.type;
					var value = props.value;
					var methods = props.methods;
					var label = props.label;
					var mutable = props.mutable;
					var featrueMethods = props.featrueMethods;
	
					var MUTABLE = React.createElement('input', { type: type, defaultValue: value, className: 'f-text' });
					var NOMUTABLE = React.createElement('input', _extends({}, methods, { type: type, value: value, className: 'f-text' }));
					var Inputs = mutable ? MUTABLE : NOMUTABLE;
					return React.createElement('div', {
						className: css
					}, React.createElement('label', { className: 'item-label' }, label), React.createElement('div', { className: 'item-field' }, Inputs, React.createElement('span', _extends({}, featrueMethods, {
						className: 'icon-input-clear'
					}), React.createElement('i', { className: 'icon-cross' }))));
				}
	
				exports.default = Clear;
	
				/***/
			},
			/* 28 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function Normal(props) {
					var css = (0, _classnames2.default)({
						'form-item': true
					});
					var value = props.value;
					var label = props.label;
					var featrueMethods = props.featrueMethods;
					var placeholder = props.placeholder;
	
					var fieldCss = (0, _classnames2.default)({
						'field-vale': true,
						placeholder: placeholder
					});
					return React.createElement('div', {
						className: css
					}, React.createElement('label', { className: 'item-label' }, label), React.createElement('div', { className: 'item-field' }, React.createElement('p', {
						className: fieldCss
					}, value)), React.createElement('icon', _extends({}, featrueMethods, {
						className: 'icon-v-right'
					})));
				}
	
				exports.default = Normal;
	
				/***/
			},
			/* 29 */
			/***/function (module, exports, __webpack_require__) {
	
				'use strict';
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};
	
				var _classnames = __webpack_require__(3);
	
				var _classnames2 = _interopRequireDefault(_classnames);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function Text(props) {
					var css = (0, _classnames2.default)({
						'form-item': true
					});
					var type = props.type;
					var value = props.value;
					var methods = props.methods;
					var label = props.label;
					var mutable = props.mutable;
					var featrueMethods = props.featrueMethods;
	
					var MUTABLE = React.createElement('input', { type: type, defaultValue: value, className: 'f-text' });
					var NOMUTABLE = React.createElement('input', _extends({}, methods, { type: type, value: value, className: 'f-text' }));
					var Inputs = mutable ? MUTABLE : NOMUTABLE;
					return React.createElement('div', {
						className: css
					}, React.createElement('label', { className: 'item-label' }, label), React.createElement('div', { className: 'item-field' }, Inputs), React.createElement('icon', _extends({}, featrueMethods, {
						className: 'icon-v-right'
					})));
				}
	
				exports.default = Text;
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=kodo.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(248)(module)))

/***/ },

/***/ 248:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function ComponentTitle(props) {
	  var title = props.title;
	
	  return _react2.default.createElement(
	    "div",
	    { className: "container" },
	    _react2.default.createElement(
	      "div",
	      { className: "title" },
	      _react2.default.createElement(
	        "h1",
	        { className: "page_title" },
	        title
	      )
	    )
	  );
	}
	
	exports.default = ComponentTitle;

/***/ }

});
//# sourceMappingURL=index.js.map