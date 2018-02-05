/**
 * Registers bio block.
 */

import ImageGrid from "./block";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'rtgb/image-grid', {
	title: __( 'Image Grid' ),
	icon: 'index-card',
	category: 'layout',

	attributes: {
		columns: {
			type: 'array',
			source: 'query',
			query: {
				mediaID: {
					type: 'number',
				},
				mediaURL: {
					type: 'string',
				}
			},
			default: [ {}, {}, {} ],
		},
		imageCount: {
			type: 'number',
			default: 10
		}
	},

	edit: ImageGrid,

	save: props => {
		return null;
	}
} );