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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Simple Masonry component for images
// Expects props:
//      imageUrls: array of image urls--this overrides any children passed in
//      children: an array of children to render as tiles
//      [required] numCols: number of columns
//      containerWidth: width of mansonry component, default 100%
//      animate: whether or not to animate components fading in, default true
var ImageMasonry = function (_React$Component) {
  _inherits(ImageMasonry, _React$Component);

  function ImageMasonry(props) {
    _classCallCheck(this, ImageMasonry);

    var _this = _possibleConstructorReturn(this, (ImageMasonry.__proto__ || Object.getPrototypeOf(ImageMasonry)).call(this, props));

    var state = {};
    for (var i = 0; i < _this.props.numCols; i++) {
      state["col-" + i] = [];
    }
    _this.state = state;
    return _this;
  }

  _createClass(ImageMasonry, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.numCols) {
        var newState = {};
        for (var i = 0; i < nextProps.numCols; i++) {
          newState["col-" + i] = [];
        }
        this.setState(newState);
        this.addTiles();
      }
    }
  }, {
    key: "render",
    value: function render() {
      // Create all of the columns
      var columns = [];
      for (var i = 0; i < this.props.numCols; i++) {
        columns.push(_react2.default.createElement(
          "div",
          {
            style: {
              width: 100 / this.props.numCols + "%",
              display: "flex",
              flexDirection: "column",
              float: "left"
            },
            className: "react-image-masonry-col",
            key: "col-" + i
          },
          Object.values(this.state["col-" + i])
        ));
      }

      var styles = "\n      .react-image-masonry-col * { width: 100%}\n      @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\n    ";

      // Set the container width ( default to 100% )
      var containerWidth = this.props.hasOwnProperty('containerWidth') ? this.props.containerWidth : '100%';

      return _react2.default.createElement(
        "div",
        {
          ref: "container",
          style: {
            width: containerWidth,
            overflow: "hidden",
            margin: "auto"
          } },
        _react2.default.createElement(
          "style",
          null,
          styles
        ),
        columns
      );
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addTiles();
    }
    // Expects react Element
    // Returns an array of all the image urls

  }, {
    key: "getAllImageUrls",
    value: function getAllImageUrls(reactEl) {
      var _this2 = this;

      // If the element is an image, return the src
      if (reactEl.type === "img") {
        return [reactEl.props.src];
      }

      // Otherwise, if the element has children, get the imgUrls from them
      var children = reactEl.props.children;
      if (children) {
        var imageUrls = [];
        _react2.default.Children.forEach(children, function (child) {
          imageUrls = imageUrls.concat(_this2.getAllImageUrls(child));
        });
        return imageUrls;
      }

      // There were no images
      return [];
    }

    // Expects an array of imageUrls
    // Returns a promise that resolves when all of the images are loaded

  }, {
    key: "loadImages",
    value: function loadImages(imageUrls) {
      var imagesLoaded = [];
      imageUrls.forEach(function (src) {
        imagesLoaded.push(new Promise(function (resolve, reject) {
          var image = new Image();
          image.onload = resolve;
          image.onerror = reject;
          image.src = src;
        }));
      });
      return Promise.all(imagesLoaded);
    }
  }, {
    key: "getShortestCol",
    value: function getShortestCol(containerEl) {
      var cols = containerEl.querySelectorAll(".react-image-masonry-col");

      // Get the shortestColumn
      var shortestCol = 0;
      cols.forEach(function (column, index) {
        if (column.offsetHeight < cols[shortestCol].offsetHeight) {
          shortestCol = index;
        }
      });

      return shortestCol;
    }
  }, {
    key: "addTiles",
    value: function addTiles() {
      var _this3 = this;

      var tiles = [];
      if (this.props.imageUrls) {
        // If imgUrls is defined, generate img tags
        tiles = this.props.imageUrls.map(function (imageUrl, index) {
          return _react2.default.createElement("img", { src: imageUrl, alt: imageUrl, key: "img-" + index + Date.now() });
        });
      } else if (this.props.children) {
        // Otherwise use the children components
        tiles = this.props.children;
      } else {
        // imgUrls or children must be passed in
        console.warn("No images were passed into react-image-masonry");
      }

      // For each tileComponent, get all of the images and load them
      tiles.forEach(function (tile, index) {

        // If animation is turned on add the style (on by default)
        var animationOn = _this3.props.hasOwnProperty('animate') ? _this3.props.animate : true;
        if (animationOn) {
          tile = _react2.default.cloneElement(tile, {
            style: Object.assign({}, tile.props.style, {
              animation: "fadeIn 1s ease-in"
            })
          });
        }

        // Once all of the images have been loaded, then add the tile to the shortest column
        var imageUrls = _this3.getAllImageUrls(tile);
        _this3.loadImages(imageUrls).then(function () {
          var containerEl = _this3.refs.container;
          var shortestCol = _this3.getShortestCol(containerEl);

          // Add the element to the column
          _this3.setState(_defineProperty({}, "col-" + shortestCol, _this3.state["col-" + shortestCol].concat([tile])));
        }).catch(function (error) {
          console.log(error.message);
        });
      });
    }
  }]);

  return ImageMasonry;
}(_react2.default.Component);

exports.default = ImageMasonry;

/***/ })
/******/ ]);