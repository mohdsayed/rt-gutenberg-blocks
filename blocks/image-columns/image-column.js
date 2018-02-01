/**
 * Contains Image Column
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const { Editable, MediaUpload } = wp.blocks;
const { Button } = wp.components;

class ImageColumn extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {
		const { attributes } = this.props;

		return (
			<div className={ this.props.className } key="image-columns-container" >
				<MediaUpload
					onSelect={ this.props.onSelectImage }
					type="image"
					value={ attributes.mediaID }
					render={ ( { open } ) => (
						<Button className={ attributes.mediaID ? 'image-button' : 'button button-large' } onClick={ open } >
							{ ! attributes.mediaID ? __( 'Upload Image' ) : <img src={ attributes.mediaURL } /> }
						</Button>
					) }
				/>
				<Editable
					onChange={ this.props.onChangeTitle }
					value=''
					focus={ this.props.focus }
					placeholder={ __( 'Enter Title...' ) }
				/>
				<Editable
					onChange={ this.props.onChangeContent }
					value=''
					focus={ this.props.focus }
					placeholder={ __( 'Enter Content...' ) }
				/>
				<Editable
					onChange={ this.props.onChangeReadMore }
					value=''
					focus={ this.props.focus }
					placeholder={ __( 'Read More Text and Link...' ) }
				/>
			</div>
		);
	}
}

export default ImageColumn;