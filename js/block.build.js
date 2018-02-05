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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(6);
__webpack_require__(9);
module.exports = __webpack_require__(10);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bio_card__ = __webpack_require__(2);
/**
 * Registers bio block.
 */


var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('rtgb/bio-block', {
	title: __('Bio Block'),
	icon: 'index-card',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2'
		},
		mediaID: {
			type: 'number'
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src'
		},
		socialLinks: {
			type: 'array',
			source: 'children',
			selector: '.social-links'
		},
		aboutYou: {
			type: 'array',
			source: 'children',
			selector: '.about-you'
		},
		openExternalLinks: {
			type: 'boolean',
			default: false
		}
	},
	edit: __WEBPACK_IMPORTED_MODULE_0__bio_card__["a" /* default */],
	save: function save(props) {
		var className = props.className,
		    _props$attributes = props.attributes,
		    title = _props$attributes.title,
		    mediaURL = _props$attributes.mediaURL,
		    socialLinks = _props$attributes.socialLinks,
		    aboutYou = _props$attributes.aboutYou;

		return wp.element.createElement(
			'div',
			{ className: className },
			wp.element.createElement(
				'h2',
				null,
				title
			),
			mediaURL && wp.element.createElement('img', { className: 'bio-profile-pic', src: mediaURL }),
			wp.element.createElement(
				'h3',
				null,
				__('About')
			),
			wp.element.createElement(
				'div',
				{ className: 'about-you' },
				aboutYou
			),
			wp.element.createElement(
				'h3',
				null,
				__('Find me Here')
			),
			wp.element.createElement(
				'ul',
				{ className: 'social-links' },
				socialLinks
			)
		);
	}
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Contains bio card component.
 */

var Component = wp.element.Component;
var _wp$blocks = wp.blocks,
    RichText = _wp$blocks.RichText,
    MediaUpload = _wp$blocks.MediaUpload,
    InspectorControls = _wp$blocks.InspectorControls;
var Button = wp.components.Button;
var ToggleControl = wp.blocks.InspectorControls.ToggleControl;
var __ = wp.i18n.__;

var BioCard = function (_Component) {
	_inherits(BioCard, _Component);

	function BioCard() {
		_classCallCheck(this, BioCard);

		var _this = _possibleConstructorReturn(this, (BioCard.__proto__ || Object.getPrototypeOf(BioCard)).apply(this, arguments));

		_this.onChangeTitle = _this.onChangeTitle.bind(_this);
		_this.onFocusTitle = _this.onFocusTitle.bind(_this);
		_this.onSelectImage = _this.onSelectImage.bind(_this);
		_this.onChangeSocialLinks = _this.onChangeSocialLinks.bind(_this);
		_this.onFocusSocialLinks = _this.onFocusSocialLinks.bind(_this);
		_this.onChangeAboutYou = _this.onChangeAboutYou.bind(_this);
		_this.onFocusAboutYou = _this.onFocusAboutYou.bind(_this);
		_this.onChangeExternalLinks = _this.onChangeExternalLinks.bind(_this);
		return _this;
	}

	_createClass(BioCard, [{
		key: 'onChangeTitle',
		value: function onChangeTitle(value) {
			this.props.setAttributes({ title: value });
		}
	}, {
		key: 'onFocusTitle',
		value: function onFocusTitle(focus) {
			this.props.setFocus(_.extend({}, focus, { RichText: 'title' }));
		}
	}, {
		key: 'onSelectImage',
		value: function onSelectImage(media) {
			this.props.setAttributes({
				mediaURL: media.sizes.thumbnail.url,
				mediaID: media.id
			});
		}
	}, {
		key: 'onChangeSocialLinks',
		value: function onChangeSocialLinks(value) {
			this.props.setAttributes({ socialLinks: value });
		}
	}, {
		key: 'onFocusSocialLinks',
		value: function onFocusSocialLinks(focus) {
			this.props.setFocus(_.extend({}, focus, { RichText: 'socialLinks' }));
		}
	}, {
		key: 'onChangeAboutYou',
		value: function onChangeAboutYou(value) {
			this.props.setAttributes({ aboutYou: value });
		}
	}, {
		key: 'onFocusAboutYou',
		value: function onFocusAboutYou(focus) {
			this.props.setFocus(_.extend({}, focus, { RichText: 'aboutYou' }));
		}
	}, {
		key: 'onChangeExternalLinks',
		value: function onChangeExternalLinks(value) {
			this.props.setAttributes({ openExternalLinks: value });
		}
	}, {
		key: 'render',
		value: function render() {
			var focusedRichText = this.props.focus ? this.props.focus.RichText || 'title' : null;
			var attributes = this.props.attributes;
			var focus = this.props.focus;

			/**
    * Adds inspector control in the sidebar.
    */

			var inspectorControls = focus && wp.element.createElement(
				InspectorControls,
				{ key: 'inspector' },
				wp.element.createElement(
					'h3',
					null,
					__('Bio Block Settings')
				),
				wp.element.createElement(ToggleControl, {
					label: __('Open Links in new tab'),
					checked: attributes.openExternalLinks,
					onChange: this.onChangeExternalLinks
				})
			);

			return [inspectorControls, wp.element.createElement(
				'div',
				{ className: this.props.className, key: 'bio-container' },
				wp.element.createElement(
					'div',
					{ className: 'bio-top-container' },
					wp.element.createElement(
						'div',
						{ className: 'bio-profile-pic' },
						attributes.mediaID ? wp.element.createElement('img', { src: attributes.mediaURL }) : '',
						wp.element.createElement(MediaUpload, {
							onSelect: this.onSelectImage,
							value: attributes.mediaID,
							type: 'image',
							render: function render(_ref) {
								var open = _ref.open;
								return wp.element.createElement(
									Button,
									{ isLarge: true, onClick: open },
									!attributes.mediaID ? __('Profile Picture') : __('Change Picture')
								);
							}
						})
					),
					wp.element.createElement(
						'div',
						{ className: 'bio-top-right-container' },
						wp.element.createElement(RichText, {
							tagName: 'h2',
							placeholder: __('Write title…'),
							value: attributes.title,
							onChange: this.onChangeTitle,
							focus: focusedRichText === 'title',
							onFocus: this.onFocusTitle
						}),
						wp.element.createElement(RichText, {
							tagName: 'div',
							multiline: 'p',
							className: 'about-you',
							placeholder: __('Write about you…'),
							value: attributes.aboutYou,
							onChange: this.onChangeAboutYou,
							focus: focusedRichText === 'aboutYou',
							onFocus: this.onFocusAboutYou,
							inlineToolbar: true
						})
					)
				),
				wp.element.createElement(
					'h3',
					null,
					__('Social Links')
				),
				wp.element.createElement(RichText, {
					tagName: 'ul',
					multiline: 'li',
					placeholder: __('Enter social Links…'),
					value: attributes.socialLinks,
					onChange: this.onChangeSocialLinks,
					focus: focusedRichText === 'socialLinks',
					onFocus: this.onFocusSocialLinks,
					className: 'social-links',
					inlineToolbar: true
				})
			)];
		}
	}]);

	return BioCard;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (BioCard);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Creates RichText block.
 */
var __ = wp.i18n.__;
var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    RichText = _wp$blocks.RichText,
    children = _wp$blocks.source.children;


registerBlockType('rtgb/rt-editable-block', {
	title: __('RT Editable Block'),
	icon: 'universal-access-alt',
	category: 'common',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p'
		}
	},
	edit: function edit(props) {
		var content = props.attributes.content,
		    focus = props.focus,
		    className = props.className,
		    setFocus = props.setFocus;

		var onChangeContent = function onChangeContent(newContent) {
			props.setAttributes({ content: newContent });
		};
		return wp.element.createElement(
			'div',
			{ className: props.className },
			wp.element.createElement(
				'h3',
				null,
				'Enter Details'
			),
			wp.element.createElement(RichText, {
				className: className,
				placeholder: __('Write here...'),
				onChange: onChangeContent,
				value: content,
				focus: focus,
				onFocus: setFocus
			})
		);
	},
	save: function save(props) {
		return wp.element.createElement(
			'div',
			{ className: props.className },
			wp.element.createElement(
				'h3',
				null,
				'I will only show on frontend and inside code editor'
			),
			wp.element.createElement(
				'p',
				null,
				props.attributes.content
			)
		);
	}
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__github_gist__ = __webpack_require__(5);
/**
 * Registers github gist block.
 *
 * @credit https://pantheon.io/blog/how-convert-shortcode-gutenberg-block
 */



/**
 * Registers a new block provided a unique name and an object defining its behavior.
 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
 */
var registerBlockType = wp.blocks.registerBlockType;

/**
 * Retrieves the translation of text.
 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
 */

var __ = wp.i18n.__;

/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */

registerBlockType('rtgb/github-gist', {
	/**
  * This is the display title for your block, which can be translated with `i18n` functions.
  * The block inserter will show this name.
  */
	title: __('Github Gist'),

	/**
  * An icon property should be specified to make it easier to identify a block.
  * These can be any of WordPress’ Dashicons, or a custom svg element.
  */
	icon: 'media-document',

	/**
  * Blocks are grouped into categories to help users browse and discover them.
  * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
  */
	category: 'common',

	/**
  * Removes support for an HTML mode.
  */
	supportHTML: false,

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
  *
  * @param {Object} [props] Properties passed from the editor.
  * @return {Element}       Element to render.
  */
	edit: __WEBPACK_IMPORTED_MODULE_0__github_gist__["a" /* default */],

	/**
  * The save function defines the way in which the different attributes should be combined
  * into the final markup, which is then serialized by Gutenberg into `post_content`.
  * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
  *
  * @return {Element}       Element to render.
  */
	save: function save(_ref) {
		var attributes = _ref.attributes;

		var url = attributes.url || '';

		if (!url.length) {
			return null;
		}

		/**
   * Include a fallback link for non-JS contexts
   * and for when the plugin is not activated.
   */
		return wp.element.createElement(
			'a',
			{ href: url },
			__('View Gist on GitHub')
		);
	}
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Contains bio car component.
 */

var Component = wp.element.Component;
var InspectorControls = wp.blocks.InspectorControls;
var TextControl = InspectorControls.TextControl;
var __ = wp.i18n.__;

var GithubGist = function (_Component) {
	_inherits(GithubGist, _Component);

	function GithubGist() {
		_classCallCheck(this, GithubGist);

		var _this = _possibleConstructorReturn(this, (GithubGist.__proto__ || Object.getPrototypeOf(GithubGist)).apply(this, arguments));

		_this.gistContainerId = 'gist-' + _this.props.id;
		return _this;
	}

	_createClass(GithubGist, [{
		key: 'onInputChange',
		value: function onInputChange(newVal) {
			this.props.setAttributes({ url: newVal });
		}
	}, {
		key: 'makeGithubRequest',
		value: function makeGithubRequest() {
			var _this2 = this;

			jQuery.getJSON(this.props.attributes.url.trim(/\/$/) + '.json?callback=?', function (data) {
				var div = jQuery('#' + _this2.gistContainerId),
				    stylesheet = jQuery('<link />');

				div.html('');
				stylesheet.attr('ref', 'stylesheet').attr('href', data.stylesheet).attr('type', 'text/css');
				div.append(stylesheet).append(data.div);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var attributes = this.props.attributes;
			var focus = this.props.focus;


			var url = attributes.url || '',
			    retval = [];

			/**
    * When the block is in focus or there's no URL value,
    * show the text input control so the user can enter a URL.
    */
			if (!!focus || !url.length) {
				retval.push(wp.element.createElement(TextControl, {
					value: url,
					key: 'controlOptions',
					onChange: this.onInputChange.bind(this),
					placeholder: __('Enter a GitHub Gist URL')
				}));
			}

			if (url.length) {

				/**
     * setTimeout is used to delay the GitHub JSON API request
     * until after the block is initially rendered. From the response,
     * we update the rendered div.
     */
				setTimeout(this.makeGithubRequest.bind(this), 10);

				retval.push(wp.element.createElement('div', { id: this.gistContainerId, key: this.gistContainerId }));
			}

			return retval;
		}
	}]);

	return GithubGist;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (GithubGist);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block__ = __webpack_require__(7);
/**
 * Registers bio block.
 */



var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('rtgb/image-columns', {
	title: __('Image Columns'),
	icon: 'index-card',
	category: 'layout',

	attributes: {
		columns: {
			type: 'array',
			source: 'query',
			selector: '.rt-column',
			query: {
				mediaID: {
					type: 'number',
					source: 'attribute',
					selector: '.rt-header-content img',
					attribute: 'data-media-id'
				},
				mediaURL: {
					type: 'string',
					source: 'attribute',
					selector: '.rt-header-content img',
					attribute: 'src'
				},
				title: {
					source: 'children',
					selector: '.rt-column-title'
				},
				subHeading: {
					source: 'children',
					selector: '.rt-column-sub-heading'
				},
				content: {
					source: 'children',
					selector: '.rt-column-content'
				},
				readMore: {
					source: 'children',
					selector: '.rt-read-more'
				}
			},
			default: [{}, {}, {}]
		},
		columnCount: {
			type: 'number',
			default: 3
		},
		showSubHeading: {
			type: 'boolean',
			default: false
		},
		showReadMore: {
			type: 'boolean',
			default: true
		}
	},

	edit: __WEBPACK_IMPORTED_MODULE_0__block__["a" /* default */],

	save: function save(props) {
		var columns = props.attributes.columns || [];
		var columnCount = props.attributes.columnCount;
		var className = props.className;
		var imageColumns = [];

		if (!columns.length) {
			return null;
		}

		_.each(columns, function (column, index) {
			var columnClass = 'rt-column rt-column-' + index;
			var columnKey = 'rt-column-' + index;

			if (index + 1 > columnCount) {
				return;
			}

			imageColumns.push(wp.element.createElement(
				'li',
				{ key: columnKey, className: columnClass },
				wp.element.createElement(
					'figure',
					{ className: 'rt-header-content' },
					wp.element.createElement('img', { src: column.mediaURL, 'data-media-id': column.mediaID })
				),
				wp.element.createElement(
					'h3',
					{ className: 'rt-column-title' },
					column.title
				),
				props.attributes.showSubHeading && wp.element.createElement(
					'p',
					{ className: 'rt-column-sub-heading' },
					column.subHeading
				),
				wp.element.createElement(
					'div',
					{ className: 'rt-column-content' },
					column.content
				),
				props.attributes.showReadMore && wp.element.createElement(
					'div',
					{ className: 'rt-read-more' },
					column.readMore
				)
			));
		});

		return wp.element.createElement(
			'ul',
			{ className: className, key: 'rt-image-columns' },
			imageColumns
		);
	}
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_column__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Contains image columns component.
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var InspectorControls = wp.blocks.InspectorControls;
var _wp$blocks$InspectorC = wp.blocks.InspectorControls,
    RangeControl = _wp$blocks$InspectorC.RangeControl,
    ToggleControl = _wp$blocks$InspectorC.ToggleControl;




var ImageColumnBlock = function (_Component) {
	_inherits(ImageColumnBlock, _Component);

	function ImageColumnBlock() {
		_classCallCheck(this, ImageColumnBlock);

		var _this = _possibleConstructorReturn(this, (ImageColumnBlock.__proto__ || Object.getPrototypeOf(ImageColumnBlock)).apply(this, arguments));

		_this.onSelectImage = _this.onSelectImage.bind(_this);
		_this.setColumnsAttributes = _this.setColumnsAttributes.bind(_this);
		_this.onRemoveImage = _this.onRemoveImage.bind(_this);
		_this.toggleShowSubHeading = _this.toggleShowSubHeading.bind(_this);
		_this.toggleShowReadMore = _this.toggleShowReadMore.bind(_this);
		return _this;
	}

	_createClass(ImageColumnBlock, [{
		key: 'onSelectImage',
		value: function onSelectImage(index, media) {
			this.setColumnsAttributes(index, {
				mediaURL: media.sizes.medium ? media.sizes.medium.url : media.url,
				mediaID: media.id
			});
		}
	}, {
		key: 'setColumnsAttributes',
		value: function setColumnsAttributes(index, dataObject) {
			var attributes = this.props.attributes;

			var existingData = attributes.columns.slice(0) || [];

			if (existingData[index]) {
				existingData[index] = _.extend(existingData[index], dataObject);
			} else {
				existingData[index] = dataObject;
			}

			this.props.setAttributes({
				columns: existingData
			});
		}
	}, {
		key: 'onRemoveImage',
		value: function onRemoveImage(index) {
			this.setColumnsAttributes(index, { mediaID: '', mediaURL: '' });
		}
	}, {
		key: 'toggleShowSubHeading',
		value: function toggleShowSubHeading() {
			this.props.setAttributes({
				showSubHeading: !this.props.attributes.showSubHeading
			});
		}
	}, {
		key: 'toggleShowReadMore',
		value: function toggleShowReadMore() {
			this.props.setAttributes({
				showReadMore: !this.props.attributes.showReadMore
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    focus = _props.focus,
			    setFocus = _props.setFocus,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes;

			var imageColumns = [];

			var inspectorControls = focus && wp.element.createElement(
				InspectorControls,
				{ key: 'inspector' },
				wp.element.createElement(
					'h3',
					null,
					__('Settings')
				),
				wp.element.createElement(RangeControl, {
					label: __('Columns'),
					value: attributes.columnCount,
					onChange: function onChange(value) {
						return setAttributes({ columnCount: value });
					},
					min: 1,
					max: 5
				}),
				wp.element.createElement(ToggleControl, {
					label: __('Show Sub Heading'),
					checked: attributes.showSubHeading,
					onChange: this.toggleShowSubHeading
				}),
				wp.element.createElement(ToggleControl, {
					label: __('Show Read More'),
					checked: attributes.showReadMore,
					onChange: this.toggleShowReadMore
				})
			);

			var _loop = function _loop(index) {
				var columnClass = 'column-' + index + ' single-column';
				var imageColumnKey = 'column-' + index;

				var columnAttributes = attributes.columns[index] || {};

				imageColumns.push(wp.element.createElement(__WEBPACK_IMPORTED_MODULE_0__image_column__["a" /* default */], {
					onSelectImage: function onSelectImage(media) {
						return _this2.onSelectImage(index, media);
					},
					onChangeTitle: function onChangeTitle(title) {
						return _this2.setColumnsAttributes(index, { title: title });
					},
					onChangeSubTitle: function onChangeSubTitle(subHeading) {
						return _this2.setColumnsAttributes(index, { subHeading: subHeading });
					},
					onChangeContent: function onChangeContent(content) {
						return _this2.setColumnsAttributes(index, { content: content });
					},
					onChangeReadMore: function onChangeReadMore(readMore) {
						return _this2.setColumnsAttributes(index, { readMore: readMore });
					},
					onRemove: function onRemove() {
						_this2.onRemoveImage(index);
					},
					className: columnClass,
					attributes: columnAttributes,
					showSubHeading: attributes.showSubHeading,
					showReadMore: attributes.showReadMore,
					focused: focus,
					setFocus: setFocus,
					key: imageColumnKey,
					index: index
				}));
			};

			for (var index = 0; index < attributes.columnCount; index++) {
				_loop(index);
			}

			return [inspectorControls, wp.element.createElement(
				'div',
				{ className: 'rt-image-columns', key: 'image-columns' },
				imageColumns
			)];
		}
	}]);

	return ImageColumnBlock;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ImageColumnBlock);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Contains Image Column
 */

var __ = wp.i18n.__;
var Component = wp.element.Component;
var _wp$blocks = wp.blocks,
    RichText = _wp$blocks.RichText,
    MediaUpload = _wp$blocks.MediaUpload;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton,
    Placeholder = _wp$components.Placeholder;

var ImageColumn = function (_Component) {
	_inherits(ImageColumn, _Component);

	function ImageColumn() {
		_classCallCheck(this, ImageColumn);

		return _possibleConstructorReturn(this, (ImageColumn.__proto__ || Object.getPrototypeOf(ImageColumn)).apply(this, arguments));
	}

	_createClass(ImageColumn, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    focused = _props.focused,
			    setFocus = _props.setFocus,
			    index = _props.index,
			    onRemove = _props.onRemove;

			var focusedRichText = focused ? focused.RichText || index + "-title" : null;

			return wp.element.createElement(
				"div",
				{ className: this.props.className, key: "image-columns-container" },
				attributes.mediaID && wp.element.createElement(
					"figure",
					null,
					wp.element.createElement(IconButton, {
						key: "icon-button",
						icon: "no-alt",
						onClick: onRemove,
						className: "rt-remove-image-button",
						label: __('Remove Image')
					}),
					wp.element.createElement("img", { src: attributes.mediaURL })
				),
				!attributes.mediaID && wp.element.createElement(
					Placeholder,
					{
						key: "placeholder",
						icon: "media-image",
						label: __('Thumbnail'),
						instructions: __('Upload or choose from media library'),
						className: "rt-image-placeholder" },
					wp.element.createElement(MediaUpload, {
						onSelect: this.props.onSelectImage,
						type: "image",
						value: attributes.mediaID,
						render: function render(_ref) {
							var open = _ref.open;
							return wp.element.createElement(
								Button,
								{ key: "button", className: attributes.mediaID ? 'image-button' : 'button button-large', onClick: open },
								!attributes.mediaID ? __('Choose') : ''
							);
						}
					})
				),
				wp.element.createElement(RichText, {
					tagName: "h3",
					onChange: this.props.onChangeTitle,
					value: attributes.title,
					placeholder: __('Enter Title...'),
					focus: focusedRichText === index + "-title",
					onFocus: function onFocus(focus) {
						return setFocus(_.extend({}, focus, { RichText: index + "-title" }));
					}
				}),
				this.props.showSubHeading && wp.element.createElement(RichText, {
					onChange: this.props.onChangeSubTitle,
					value: attributes.subHeading,
					placeholder: __('Enter Sub Title...'),
					focus: focusedRichText === index + "-sub-title",
					onFocus: function onFocus(focus) {
						return setFocus(_.extend({}, focus, { RichText: index + "-sub-title" }));
					},
					inlineToolbar: true
				}),
				wp.element.createElement(RichText, {
					onChange: this.props.onChangeContent,
					value: attributes.content,
					placeholder: __('Enter Content...'),
					focus: focusedRichText === index + "-content",
					onFocus: function onFocus(focus) {
						return setFocus(_.extend({}, focus, { RichText: index + "-content" }));
					},
					inlineToolbar: true
				}),
				this.props.showReadMore && wp.element.createElement(RichText, {
					onChange: this.props.onChangeReadMore,
					value: attributes.readMore ? attributes.readMore : __('Read More'),
					placeholder: __('Read More Text and Link...'),
					focus: focusedRichText === index + "-readmore",
					onFocus: function onFocus(focus) {
						return setFocus(_.extend({}, focus, { RichText: index + "-readmore" }));
					},
					inlineToolbar: true
				})
			);
		}
	}]);

	return ImageColumn;
}(Component);

/* harmony default export */ __webpack_exports__["a"] = (ImageColumn);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Contains simple block registration.
 */

var el = wp.element.createElement;
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('rtgb/simple-block', {

	title: __('Simple Block'),

	description: __('Creates s simple block.'),

	icon: 'universal-access-alt',

	category: 'common',

	edit: function edit() {
		return el('p', { className: 'simple-block' }, 'Hello World.');
	},

	save: function save() {
		return el('p', { className: 'simple-block' }, 'Hello World Saved Content.');
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block__ = __webpack_require__(11);


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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slide_image__ = __webpack_require__(12);
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(13);
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

/***/ }),
/* 13 */
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


/***/ })
/******/ ]);