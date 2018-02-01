/**
 * Registers bio block.
 */

import ImageColumns from "./image-columns";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'rtgb/image-columns', {
	title: __( 'Image Columns' ),
	icon: 'index-card',
	category: 'layout',

	attributes: {
		mediaID: {
			type: 'array',
		},
		mediaURL: {
			type: 'array',
		},
		title: {
			type: 'array'
		},
		content: {
			type: 'array'
		},
		readMore: {
			type: 'array'
		},
		columns: {
			type: 'number',
			default: 3
		}
	},

	edit: ImageColumns,

	save: props => {
		const {
			className,
			attributes: {
				mediaURL,
			}
		} = props;
		return (
			<div className={ className }>
				{
					mediaURL && (
						<img className="recipe-image" src={ mediaURL } />
					)
				}
			</div>
		);
	}
} );