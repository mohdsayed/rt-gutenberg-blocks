/**
 * Contains Image Column component.
 */

const { Component } = wp.element;
const { Editable, MediaUpload, InspectorControls } = wp.blocks;
const { Button } = wp.components;
const { ToggleControl } = wp.blocks.InspectorControls;
const { __ } = wp.i18n;

class ImageColumn extends Component {
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
			mediaId: media.id,
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

	componentWillReceiveProps( a, b ) {
		console.warn( a, b, 'recieved props' );
	}

	render() {
		const { mediaId, mediaURL, title, content, readMore, focus } = this.props;

		return (
			<div>
				<MediaUpload
					onSelect={ this.onSelectImage }
					type="image"
					value={ mediaId }
					render={ ( { open } ) => (
						<Button  onClick={ open }>
							{ mediaId ? <img src={ mediaURL } /> : __( 'Upload' ) }
						</Button>
					) }
				/>
				<Editable
					onChange={ this.onChangeTitle }
					value={ title }
					focus={ focus }
					placeholder={ __( 'Enter Title...' ) }
				/>
				<Editable
					onChange={ this.onChangeContent }
					value={ content }
					focus={ focus }
					placeholder={ __( 'Enter Content...' ) }
				/>
				<Editable
					onChange={ this.onChangeContent }
					value={ readMore || __( 'Read More' ) }
					focus={ focus }
					placeholder={ __( 'Read More Text and Link...' ) }
				/>
			</div>
		);
	}
}

export default ImageColumn;
