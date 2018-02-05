/**
 * Contains Image Column
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const { MediaUpload } = wp.blocks;
const { Button, IconButton, Placeholder } = wp.components;

class ImageItem extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {
		const { attributes, onRemove } = this.props;

		return (
			<div className={ this.props.className } key="image-item-container" >
				{ attributes.mediaID && (
					<figure>
						<IconButton
							key='icon-button'
							icon="no-alt"
							onClick={ onRemove }
							className="rt-remove-image-button"
							label={ __( 'Remove Image' ) }
						/>
						<img src={ attributes.mediaURL } />
					</figure>
				) }
				{ ! attributes.mediaID && (
					<Placeholder
						key="placeholder"
						icon="media-image"
						label={ __( 'Thumbnail' ) }
						className='rt-image-placeholder'>
						<MediaUpload
							onSelect={ this.props.onSelectImage }
							type="image"
							value={ attributes.mediaID }
							render={ ( { open } ) => (
								<Button key='button' className={ attributes.mediaID ? 'image-button' : 'button button-large' } onClick={ open } >
									{ ! attributes.mediaID ? __( 'Choose' ) : '' }
								</Button>
							) }
						/>
					</Placeholder>
				) }
			</div>
		);
	}
}

export default ImageItem;