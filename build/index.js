module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Simple Masonry component for images
// Expects props:
//      images: array of image urls
//      numCols: number of columns
//      containerWidth: width of mansonry component
var ImageMasonry = function (_React$Component) {
  _inherits(ImageMasonry, _React$Component);

  function ImageMasonry() {
    _classCallCheck(this, ImageMasonry);

    return _possibleConstructorReturn(this, (ImageMasonry.__proto__ || Object.getPrototypeOf(ImageMasonry)).apply(this, arguments));
  }

  _createClass(ImageMasonry, [{
    key: "render",
    value: function render() {
      var columns = [];
      for (var i = 0; i < this.props.numCols; i++) {
        columns.push(_react2.default.createElement("div", {
          style: {
            width: 100 / this.props.numCols + "%",
            display: "flex",
            flexDirection: "column",
            float: "left"
          },
          className: "col"
        }));
      }

      return _react2.default.createElement(
        "div",
        {
          ref: "container",
          style: {
            width: this.props.containerWidth,
            overflow: "hidden",
            margin: "auto"
          } },
        columns
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.refs.container);
      var containerEl = this.refs.container;
      var cols = containerEl.querySelectorAll(".col");
      var startTime = Date.now();
      this.props.images.forEach(function (imageUrl, i) {
        var img = new Image();
        img.onload = function () {
          var shortestColumn = cols[0];
          cols.forEach(function (column) {
            if (column.offsetHeight < shortestColumn.offsetHeight) {
              shortestColumn = column;
            }
          });
          shortestColumn.append(img);

          // If the image loaded too quickly, add an animation delay
          // var animationDelay = (Date.now() - startTime > 100*i) ? 0 : 100*i; 
          setTimeout(function () {
            img.style.opacity = 1;
          }, 50);
        };
        img.src = imageUrl;
        img.style.width = "100%";
        img.style.border = "2px solid transparent";
        img.style.boxSizing = "border-box";
        img.style.transition = "opacity 1s";
        img.style.opacity = 0;
      });
    }
  }]);

  return ImageMasonry;
}(_react2.default.Component);

exports.default = ImageMasonry;

/***/ })
/******/ ]);