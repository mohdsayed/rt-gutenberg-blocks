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
		const { attributes, focused, setFocus, index } = this.props;
		const focusedEditable = focused ? focused.editable || `${ index }-title` : null;

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
					tagName='h3'
					onChange={ this.props.onChangeTitle }
					value={ attributes.title }
					placeholder={ __( 'Enter Title...' ) }
					focus={ focusedEditable === `${ index }-title` }
					onFocus={ ( focus ) => setFocus( _.extend( {}, focus, { editable: `${ index }-title` } ) ) }
				/>
				<Editable
					onChange={ this.props.onChangeContent }
					value={ attributes.content }
					placeholder={ __( 'Enter Content...' ) }
					focus={ focusedEditable === `${ index }-content` }
					onFocus={ ( focus ) => setFocus( _.extend( {}, focus, { editable: `${ index }-content` } ) ) }
					inlineToolbar
				/>
				<Editable
					onChange={ this.props.onChangeReadMore }
					value={ attributes.readMore ? attributes.readMore : __( 'Read More' ) }
					placeholder={ __( 'Read More Text and Link...' ) }
					focus={ focusedEditable === `${ index }-readmore` }
					onFocus={ ( focus ) => setFocus( _.extend( {}, focus, { editable: `${ index }-readmore` } ) ) }
					inlineToolbar
				/>
			</div>
		);
	}
}

export default ImageColumn;