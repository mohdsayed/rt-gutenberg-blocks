/**
 * Registers github gist block.
 *
 * @credit https://pantheon.io/blog/how-convert-shortcode-gutenberg-block
 */

import GithubGist from './github-gist';

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
 */
const { registerBlockType } = wp.blocks;

/**
 * Retrieves the translation of text.
 * @see https://github.com/WordPress/gutenberg/tree/master/i18n#api
 */
const { __ } = wp.i18n;

/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */
registerBlockType( 'rtgb/github-gist', {
	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Github Gist' ),

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
	edit: GithubGist,

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into `post_content`.
	 * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
	 *
	 * @return {Element}       Element to render.
	 */
	save( { attributes } ) {
		const url = attributes.url || '';

		if ( ! url.length ) {
			return null;
		}

		/**
		 * Include a fallback link for non-JS contexts
		 * and for when the plugin is not activated.
		 */
		return (
			<a href={ url }>{ __( 'View Gist on GitHub' ) }</a>
		);
	}
} );
