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
	}

	onChangeTitle( value ) {
		this.props.setAttributes( { title: value } );
	}

	onFocusTitle( focus ) {
		this.props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
	}

	onSelectImage( media ) {
		this.props.setAttributes( {
			mediaURL: media.sizes.thumbnail.url,
			mediaID: media.id,
		} );
	}

	onChangeSocialLinks( value ) {
		this.props.setAttributes( { socialLinks: value } );
	}

	onFocusSocialLinks( focus ) {
		this.props.setFocus( _.extend( {}, focus, { editable: 'socialLinks' } ) );
	}

	onChangeAboutYou( value ) {
		this.props.setAttributes( { aboutYou: value } );
	}

	onFocusAboutYou( focus ) {
		this.props.setFocus( _.extend( {}, focus, { editable: 'aboutYou' } ) );
	}

	onChangeExternalLinks( value ) {
		this.props.setAttributes( { openExternalLinks: value } );
	}

	render() {
		const focusedEditable = this.props.focus ? this.props.focus.editable || 'title' : null;
		const attributes = this.props.attributes;
		const { focus } = this.props;

		/**
		 * Adds inspector control in the sidebar.
		 */
		const inspectorControls = focus && (
			<InspectorControls key="inspector">
				<h3>{ __( 'Bio Block Settings' ) }</h3>
				<ToggleControl
					label={ __( 'Open Links in new tab' ) }
					checked={ attributes.openExternalLinks }
					onChange={ this.onChangeExternalLinks }
				/>
			</InspectorControls>
		);

		return [
			inspectorControls,
			<div className={ this.props.className } key="bio-container">
				<div className="bio-top-container">
					<div className="bio-profile-pic">
						{ attributes.mediaID ? <img src={ attributes.mediaURL } /> : '' }
						<MediaUpload
							onSelect={ this.onSelectImage }
							value={ attributes.mediaID }
							type="image"
							render={ ( { open } ) => (
								<Button isLarge onClick={ open }>
									{ ! attributes.mediaID ? __( 'Profile Picture' ) : __( 'Change Picture' ) }
								</Button>
							) }
						/>
					</div>
					<div className="bio-top-right-container">
						<Editable
							tagName="h2"
							placeholder={ __( 'Write title…' ) }
							value={ attributes.title }
							onChange={ this.onChangeTitle }
							focus={ focusedEditable === 'title' }
							onFocus={ this.onFocusTitle }
						/>
						<Editable
							tagName="div"
							multiline="p"
							className="about-you"
							placeholder={ __( 'Write about you…' ) }
							value={ attributes.aboutYou }
							onChange={ this.onChangeAboutYou }
							focus={ focusedEditable === 'aboutYou' }
							onFocus={ this.onFocusAboutYou }
							inlineToolbar
						/>
					</div>
				</div>
				<h3>{ __( 'Social Links' ) }</h3>
				<Editable
					tagName="ul"
					multiline="li"
					placeholder={ __( 'Enter social Links…' ) }
					value={ attributes.socialLinks }
					onChange={ this.onChangeSocialLinks }
					focus={ focusedEditable === 'socialLinks' }
					onFocus={ this.onFocusSocialLinks }
					className="social-links"
					inlineToolbar
				/>
			</div>
		];
	}
}

export default ImageColumn;
