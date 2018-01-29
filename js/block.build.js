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
/***/ (function(module, exports, __webpack_require__) {

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
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block__ = __webpack_require__(2);


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


var blockAttributes = {

	align: {
		type: 'string',
		default: 'none'
	},
	images: {
		type: 'array',
		default: [],
		source: 'query',
		selector: 'ul.wp-block-gallery .blocks-gallery-item img',
		query: {
			url: {
				source: 'attribute',
				attribute: 'src'
			},
			alt: {
				source: 'attribute',
				attribute: 'alt',
				default: ''
			},
			id: {
				source: 'attribute',
				attribute: 'data-id'
			}
		}
	},
	imageCrop: {
		type: 'boolean',
		default: true
	},
	linkTo: {
		type: 'string',
		default: 'none'
	}
};

registerBlockType('rtgb/slider-block', {

	title: __('Slider'),

	description: __('Show slider in post.'),

	icon: 'list-view',

	category: 'common',

	keywords: [__('images'), __('photos')],

	attributes: blockAttributes,

	edit: __WEBPACK_IMPORTED_MODULE_0__block__["a" /* default */],

	save: function save(_ref) {
		var attributes = _ref.attributes;
		var images = attributes.images,
		    align = attributes.align,
		    imageCrop = attributes.imageCrop,
		    linkTo = attributes.linkTo;


		return wp.element.createElement(
			'ul',
			{ className: 'align' + align + ' ' + (imageCrop ? 'is-cropped' : '') },
			images.map(function (image) {
				var href = void 0;

				switch (linkTo) {
					case 'media':
						href = image.url;
						break;
					case 'attachment':
						href = image.link;
						break;
				}

				var img = wp.element.createElement('img', { src: image.url, alt: image.alt, 'data-id': image.id });

				return wp.element.createElement(
					'li',
					{ key: image.id || image.url, className: 'rt-blocks-slide' },
					wp.element.createElement(
						'figure',
						null,
						href ? wp.element.createElement(
							'a',
							{ href: href },
							img
						) : img
					)
				);
			})
		);
	}
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_image__ = __webpack_require__(3);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Contains rtSliderBlock Component.
 */

var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    InspectorControls = _wp$blocks.InspectorControls,
    MediaUpload = _wp$blocks.MediaUpload;
var _wp$blocks$InspectorC = wp.blocks.InspectorControls,
    SelectControl = _wp$blocks$InspectorC.SelectControl,
    ToggleControl = _wp$blocks$InspectorC.ToggleControl;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    Button = _wp$components.Button,
    DropZone = _wp$components.DropZone,
    FormFileUpload = _wp$components.FormFileUpload;
var mediaUpload = wp.utils.mediaUpload;
var Component = wp.element.Component;




var linkOptions = [{ value: 'attachment', label: __('Attachment Page') }, { value: 'media', label: __('Media File') }, { value: 'none', label: __('None') }];

var rtSliderBlock = function (_Component) {
	_inherits(rtSliderBlock, _Component);

	function rtSliderBlock() {
		_classCallCheck(this, rtSliderBlock);

		var _this = _possibleConstructorReturn(this, (rtSliderBlock.__proto__ || Object.getPrototypeOf(rtSliderBlock)).apply(this, arguments));

		_this.onSelectImage = _this.onSelectImage.bind(_this);
		_this.onSelectImages = _this.onSelectImages.bind(_this);
		_this.setLinkTo = _this.setLinkTo.bind(_this);
		_this.updateAlignment = _this.updateAlignment.bind(_this);
		_this.toggleImageCrop = _this.toggleImageCrop.bind(_this);
		_this.uploadFromFiles = _this.uploadFromFiles.bind(_this);
		_this.onRemoveImage = _this.onRemoveImage.bind(_this);
		_this.setImageAttributes = _this.setImageAttributes.bind(_this);
		_this.dropFiles = _this.dropFiles.bind(_this);

		_this.state = {
			selectedImage: null
		};
		return _this;
	}

	_createClass(rtSliderBlock, [{
		key: 'onSelectImage',
		value: function onSelectImage(index) {
			var _this2 = this;

			return function () {
				_this2.setState(function (state) {
					return {
						selectedImage: index === state.selectedImage ? null : index
					};
				});
			};
		}
	}, {
		key: 'onRemoveImage',
		value: function onRemoveImage(index) {
			var _this3 = this;

			return function () {
				var images = _.filter(_this3.props.attributes.images, function (img, i) {
					return index !== i;
				});
				_this3.props.setAttributes({ images: images });
			};
		}
	}, {
		key: 'onSelectImages',
		value: function onSelectImages(imgs) {
			this.props.setAttributes({ images: imgs });
		}
	}, {
		key: 'setLinkTo',
		value: function setLinkTo(value) {
			this.props.setAttributes({ linkTo: value });
		}
	}, {
		key: 'updateAlignment',
		value: function updateAlignment(nextAlign) {
			this.props.setAttributes({ align: nextAlign });
		}
	}, {
		key: 'toggleImageCrop',
		value: function toggleImageCrop() {
			this.props.setAttributes({ imageCrop: !this.props.attributes.imageCrop });
		}
	}, {
		key: 'uploadFromFiles',
		value: function uploadFromFiles(event) {
			var _this4 = this;

			mediaUpload(event.target.files, function (images) {
				_this4.props.setAttributes({ images: images });
			});
		}
	}, {
		key: 'setImageAttributes',
		value: function setImageAttributes(index, attributes) {
			var _props = this.props,
			    images = _props.attributes.images,
			    setAttributes = _props.setAttributes;


			setAttributes({
				images: [].concat(_toConsumableArray(images.slice(0, index)), [_extends({}, images[index], attributes)], _toConsumableArray(images.slice(index + 1)))
			});
		}
	}, {
		key: 'dropFiles',
		value: function dropFiles(files) {
			var currentImages = this.props.attributes.images || [];
			var setAttributes = this.props.setAttributes;

			mediaUpload(files, function (images) {
				setAttributes({
					images: currentImages.concat(images)
				});
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			var slider = jQuery('.rt-slider').not('.slick-initialized');
			slider.slick();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// Deselect images when losing focus
			if (!nextProps.focus && this.props.focus) {
				this.setState({
					selectedImage: null
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			var _props2 = this.props,
			    attributes = _props2.attributes,
			    focus = _props2.focus,
			    className = _props2.className;
			var images = attributes.images,
			    align = attributes.align,
			    imageCrop = attributes.imageCrop,
			    linkTo = attributes.linkTo;


			var dropZone = wp.element.createElement(DropZone, {
				onFilesDrop: this.dropFiles
			});

			if (images.length === 0) {
				return [wp.element.createElement(
					Placeholder,
					{
						key: 'placeholder',
						instructions: __('Drag images here or add from media library'),
						icon: 'format-gallery',
						label: __('Slider'),
						className: className },
					dropZone,
					wp.element.createElement(
						FormFileUpload,
						{
							isLarge: true,
							className: 'wp-block-image__upload-button',
							onChange: this.uploadFromFiles,
							accept: 'image/*',
							multiple: 'true'
						},
						__('Upload')
					),
					wp.element.createElement(MediaUpload, {
						onSelect: this.onSelectImages,
						type: 'image',
						multiple: true,
						gallery: true,
						render: function render(_ref) {
							var open = _ref.open;
							return wp.element.createElement(
								Button,
								{ isLarge: true, onClick: open },
								__('Add from Media Library')
							);
						}
					})
				)];
			}

			return [focus && wp.element.createElement(
				InspectorControls,
				{ key: 'inspector' },
				wp.element.createElement(
					'h2',
					null,
					__('Slider Settings')
				),
				wp.element.createElement(ToggleControl, {
					label: __('Crop Images'),
					checked: !!imageCrop,
					onChange: this.toggleImageCrop
				}),
				wp.element.createElement(SelectControl, {
					label: __('Link to'),
					value: linkTo,
					onChange: this.setLinkTo,
					options: linkOptions
				})
			), wp.element.createElement(
				'ul',
				{ key: 'slide', className: className + ' rt-slider align' + align + ' ' + (imageCrop ? 'is-cropped' : '') },
				dropZone,
				images.map(function (img, index) {
					return wp.element.createElement(
						'li',
						{ className: 'blocks-gallery-item', key: img.id || img.url },
						wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__slide_image__["a" /* default */], {
							url: img.url,
							alt: img.alt,
							id: img.id,
							isSelected: _this5.state.selectedImage === index,
							onRemove: _this5.onRemoveImage(index),
							onClick: _this5.onSelectImage(index),
							setAttributes: function setAttributes(attrs) {
								return _this5.setImageAttributes(index, attrs);
							}
						})
					);
				})
			)];
		}
	}]);

	return rtSliderBlock;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (rtSliderBlock);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * External Depenedencies
 */


/**
 * WordPress Dependencies
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    withAPIData = _wp$components.withAPIData,
    Spinner = _wp$components.Spinner;

var SlideImage = function (_Component) {
	_inherits(SlideImage, _Component);

	function SlideImage() {
		_classCallCheck(this, SlideImage);

		return _possibleConstructorReturn(this, (SlideImage.__proto__ || Object.getPrototypeOf(SlideImage)).apply(this, arguments));
	}

	_createClass(SlideImage, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref) {
			var image = _ref.image;

			if (image && image.data && !this.props.url) {
				this.props.setAttributes({
					url: image.data.source_url,
					alt: image.data.alt_text
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    url = _props.url,
			    alt = _props.alt,
			    id = _props.id,
			    linkTo = _props.linkTo,
			    link = _props.link,
			    isSelected = _props.isSelected,
			    onClick = _props.onClick,
			    onRemove = _props.onRemove;


			var href = void 0;

			switch (linkTo) {
				case 'media':
					href = url;
					break;
				case 'attachment':
					href = link;
					break;
			}

			var img = url ? wp.element.createElement('img', { src: url, alt: alt, 'data-id': id }) : wp.element.createElement(Spinner, null);

			var className = __WEBPACK_IMPORTED_MODULE_0_classnames___default()({
				'is-selected': isSelected,
				'is-transient': 0 === url.indexOf('blob:')
			});

			// Disable reason: Each block can be selected by clicking on it and we should keep the same saved markup
			/* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/onclick-has-role, jsx-a11y/click-events-have-key-events */
			return wp.element.createElement(
				'figure',
				{ className: className, onClick: onClick },
				isSelected && wp.element.createElement(
					'div',
					{ className: 'blocks-gallery-item__inline-menu' },
					wp.element.createElement(IconButton, {
						icon: 'no-alt',
						onClick: onRemove,
						className: 'blocks-gallery-item__remove',
						label: __('Remove Image')
					})
				),
				href ? wp.element.createElement(
					'a',
					{ href: href },
					img
				) : img
			);
			/* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/onclick-has-role, jsx-a11y/click-events-have-key-events */
		}
	}]);

	return SlideImage;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (withAPIData(function (_ref2) {
	var id = _ref2.id;
	return {
		image: id ? '/wp/v2/media/' + id : {}
	};
})(SlideImage));

/***/ })
/******/ ]);