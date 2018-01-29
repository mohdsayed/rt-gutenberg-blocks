import rtSliderBlock from './block';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

const blockAttributes = {

	align: {
		type: 'string',
		default: 'none',
	},
	images: {
		type: 'array',
		default: [],
		source: 'query',
		selector: 'ul.wp-block-gallery .blocks-gallery-item img',
		query: {
			url: {
				source: 'attribute',
				attribute: 'src',
			},
			alt: {
				source: 'attribute',
				attribute: 'alt',
				default: '',
			},
			id: {
				source: 'attribute',
				attribute: 'data-id',
			},
		},
	},
	imageCrop: {
		type: 'boolean',
		default: true,
	},
	linkTo: {
		type: 'string',
		default: 'none',
	},
};

registerBlockType( 'rtgb/slider-block', {

	title: __( 'Slider' ),

	description: __( 'Show slider in post.' ),

	icon: 'list-view',

	category: 'common',

	keywords: [ __( 'images' ), __( 'photos' ) ],

	attributes: blockAttributes,

	edit: rtSliderBlock,

	save( { attributes } ) {
		const { images, align, imageCrop, linkTo } = attributes;

		return (
			<ul className={ `align${ align } ${ imageCrop ? 'is-cropped' : '' }` } >
				{ images.map( ( image ) => {
					let href;

					switch ( linkTo ) {
						case 'media':
							href = image.url;
							break;
						case 'attachment':
							href = image.link;
							break;
					}

					const img = <img src={ image.url } alt={ image.alt } data-id={ image.id } />;

					return (
						<li key={ image.id || image.url } className="rt-blocks-slide">
							<figure>
								{ href ? <a href={ href }>{ img }</a> : img }
							</figure>
						</li>
					);
				} ) }
			</ul>
		);
	},

} );