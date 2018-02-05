/**
 * Contains simple block registration.
 */

const el = wp.element.createElement;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'rtgb/simple-block', {

	title: __( 'Simple Block' ),

	description: __( 'Creates s simple block.' ),

	icon: 'universal-access-alt',

	category: 'common',

	edit: function() {
		return el( 'p', { style: blockStyle }, 'Hello World.' );
	},

	save: function() {
		return el( 'p', { style: blockStyle }, 'Hello World Saved Content.' );
	}
} );