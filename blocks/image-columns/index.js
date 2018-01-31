/**
 * Registers bio block.
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const { registerBlockType, Editable, MediaUpload, InspectorControls } = wp.blocks;
const { Button } = wp.components;

registerBlockType( 'rtgb/image-columns', {
	title: __( 'Image Columns' ),
	icon: 'index-card',
	category: 'layout',

	attributes: {
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
	},

	edit: class extends Component {

		constructor() {
			super( ...arguments );

			this.onSelectImage = this.onSelectImage.bind( this );
			this.onChangeTitle = this.onChangeTitle.bind( this );
			this.onChangeContent = this.onChangeContent.bind( this );
			this.onChangeReadMore = this.onChangeReadMore.bind( this );
		}

		onSelectImage( media ) {
			this.props.setAttributes( {
				mediaURL: media.sizes.medium.url,
				mediaID: media.id,
			} );
		}

		onChangeTitle( title ) {
			this.props.setAttributes( { title } );
		}

		onChangeContent( content ) {
			this.props.setAttributes( { content } );
		}

		onChangeReadMore( readMore ) {
			this.props.setAttributes( { content } );
		}

		render() {
			const { focus, attributes } = this.props;

			const column = (
				<div className={ this.props.className } key="image-columns-container" >
					<MediaUpload
						onSelect={ this.onSelectImage }
						type="image"
						value={ attributes.mediaID }
						render={ ( { open } ) => (
							<Button className={ attributes.mediaID ? 'image-button' : 'button button-large' } onClick={ open } >
								{ ! attributes.mediaID ? __( 'Upload Image' ) : <img src={ attributes.mediaURL } /> }
							</Button>
						) }
					/>
					<Editable
						onChange={ this.onChangeTitle }
						value=''
						focus={ focus }
						placeholder={ __( 'Enter Title...' ) }
					/>
					<Editable
						onChange={ this.onChangeContent }
						value=''
						focus={ focus }
						placeholder={ __( 'Enter Content...' ) }
					/>
					<Editable
						onChange={ this.onChangeReadMore }
						value=''
						focus={ focus }
						placeholder={ __( 'Read More Text and Link...' ) }
					/>
				</div>
			);

			return (
				<div>
					{ column }
				</div>
			);
		}

	},

	save: props => {
		const {
			className,
			attributes: {
				title,
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