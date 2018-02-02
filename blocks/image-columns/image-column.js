/**
 * Contains Image Column
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const { Editable, MediaUpload } = wp.blocks;
const { Button, IconButton, Placeholder } = wp.components;

class ImageColumn extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {
		const { attributes, focused, setFocus, index, onRemove } = this.props;
		const focusedEditable = focused ? focused.editable || `${ index }-title` : null;

		return (
			<div className={ this.props.className } key="image-columns-container" >
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
						instructions={ __( 'Upload or choose from media library' ) }
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
				<Editable
					tagName='h3'
					onChange={ this.props.onChangeTitle }
					value={ attributes.title }
					placeholder={ __( 'Enter Title...' ) }
					focus={ focusedEditable === `${ index }-title` }
					onFocus={ ( focus ) => setFocus( _.extend( {}, focus, { editable: `${ index }-title` } ) ) }
				/>
				{ this.props.showSubHeading && (
					<Editable
						onChange={ this.props.onChangeSubTitle }
						value={ attributes.subHeading }
						placeholder={ __( 'Enter Sub Title...' ) }
						focus={ focusedEditable === `${ index }-sub-title` }
						onFocus={ ( focus ) => setFocus( _.extend( {}, focus, { editable: `${ index }-sub-title` } ) ) }
						inlineToolbar
					/>
				) }
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