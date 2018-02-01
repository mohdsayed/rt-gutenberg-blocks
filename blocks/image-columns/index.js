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
		columns: {
			type: 'array',
			source: 'query',
			selector: 'li',
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
					source: 'text',
					selector: '.rt-column-title'
				},
				content: {
					source: 'children',
					selector: '.rt-column-content'
				},
				readMore: {
					source: 'children',
					selector: '.rt-read-more'
				},
			},
			default: [ {}, {}, {} ],
		},
		columnCount: {
			type: 'number',
			default: 3
		}
	},

	edit: ImageColumns,

	save: props => {
		const columns = props.attributes.columns || [];
		const className = props.className;
		const imageColumns = [];

		if ( ! columns.length ) {
			return null;
		}

		_.each( columns, function( column, index ) {
			let columnClass = `rt-column rt-column-${ index }`;
			let columnKey = `rt-column-${ index }`;

			imageColumns.push(
				<li key={ columnKey } className={ columnClass }>
					<figure className="rt-header-content">
						<img src={ column.mediaURL } data-media-id={ column.mediaID } />
					</figure>
					<h3 className='rt-column-title' >
						{ column.title }
					</h3>
					<div className="rt-column-content">
						{ column.content }
					</div>
					<div className="rt-read-more">
						{ column.readMore }
					</div>
				</li>
			);
		} );

		return (
			<div className={ className }>
				<ul key='rt-image-columns' >
					{ imageColumns }
				</ul>
			</div>
		);
	}
} );