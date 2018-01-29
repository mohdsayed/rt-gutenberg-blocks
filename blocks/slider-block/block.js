/**
 * Contains rtSliderBlock Component.
 */

const { __ } = wp.i18n;
const { InspectorControls, MediaUpload } = wp.blocks;
const { SelectControl, ToggleControl } = wp.blocks.InspectorControls;
const { Placeholder, Button, DropZone, FormFileUpload } = wp.components;
const { mediaUpload } = wp.utils;
const { Component } = wp.element;

import SlideImage from './slide-image';

const linkOptions = [
	{ value: 'attachment', label: __( 'Attachment Page' ) },
	{ value: 'media', label: __( 'Media File' ) },
	{ value: 'none', label: __( 'None' ) },
];

class rtSliderBlock extends Component {

	constructor() {
		super( ...arguments );

		this.onSelectImage = this.onSelectImage.bind( this );
		this.onSelectImages = this.onSelectImages.bind( this );
		this.setLinkTo = this.setLinkTo.bind( this );
		this.updateAlignment = this.updateAlignment.bind( this );
		this.toggleImageCrop = this.toggleImageCrop.bind( this );
		this.uploadFromFiles = this.uploadFromFiles.bind( this );
		this.onRemoveImage = this.onRemoveImage.bind( this );
		this.setImageAttributes = this.setImageAttributes.bind( this );
		this.dropFiles = this.dropFiles.bind( this );

		this.state = {
			selectedImage: null,
		};
	}

	onSelectImage( index ) {
		return () => {
			this.setState( ( state ) => ( {
				selectedImage: index === state.selectedImage ? null : index,
			} ) );
		};
	}

	onRemoveImage( index ) {
		return () => {
			const images = _.filter( this.props.attributes.images, ( img, i ) => index !== i );
			this.props.setAttributes( { images } );
		};
	}

	onSelectImages( imgs ) {
		this.props.setAttributes( { images: imgs } );
	}

	setLinkTo( value ) {
		this.props.setAttributes( { linkTo: value } );
	}

	updateAlignment( nextAlign ) {
		this.props.setAttributes( { align: nextAlign } );
	}

	toggleImageCrop() {
		this.props.setAttributes( { imageCrop: ! this.props.attributes.imageCrop } );
	}

	uploadFromFiles( event ) {
		mediaUpload( event.target.files, ( images ) => {
			this.props.setAttributes( { images } );
		} );
	}

	setImageAttributes( index, attributes ) {
		const { attributes: { images }, setAttributes } = this.props;

		setAttributes( {
			images: [
				...images.slice( 0, index ),
				{
					...images[ index ],
					...attributes,
				},
				...images.slice( index + 1 ),
			],
		} );
	}

	dropFiles( files ) {
		const currentImages = this.props.attributes.images || [];
		const { setAttributes } = this.props;
		mediaUpload(
			files,
			( images ) => {
				setAttributes( {
					images: currentImages.concat( images ),
				} );
			}
		);
	}

	componentDidUpdate() {
		const slider = jQuery( '.rt-slider' ).not( '.slick-initialized' );
		slider.slick();
	}

	componentWillReceiveProps( nextProps ) {
		// Deselect images when losing focus
		if ( ! nextProps.focus && this.props.focus ) {
			this.setState( {
				selectedImage: null,
			} );
		}
	}

	render() {
		const { attributes, focus, className } = this.props;
		const { images, align, imageCrop, linkTo } = attributes;

		const dropZone = (
			<DropZone
				onFilesDrop={ this.dropFiles }
			/>
		);

		if ( images.length === 0 ) {
			return [
				<Placeholder
					key="placeholder"
					instructions={ __( 'Drag images here or add from media library' ) }
					icon="format-gallery"
					label={ __( 'Slider' ) }
					className={ className }>
					{ dropZone }
					<FormFileUpload
						isLarge
						className="wp-block-image__upload-button"
						onChange={ this.uploadFromFiles }
						accept="image/*"
						multiple="true"
					>
						{ __( 'Upload' ) }
					</FormFileUpload>
					<MediaUpload
						onSelect={ this.onSelectImages }
						type="image"
						multiple
						gallery
						render={ ( { open } ) => (
							<Button isLarge onClick={ open }>
								{ __( 'Add from Media Library' ) }
							</Button>
						) }
					/>
				</Placeholder>,
			];
		}

		return [
			focus && (
				<InspectorControls key="inspector">
					<h2>{ __( 'Slider Settings' ) }</h2>
					<ToggleControl
						label={ __( 'Crop Images' ) }
						checked={ !! imageCrop }
						onChange={ this.toggleImageCrop }
					/>
					<SelectControl
						label={ __( 'Link to' ) }
						value={ linkTo }
						onChange={ this.setLinkTo }
						options={ linkOptions }
					/>
				</InspectorControls>
			),
			<ul key="slide" className={ `${ className } rt-slider align${ align } ${ imageCrop ? 'is-cropped' : '' }` }>
				{ dropZone }
				{ images.map( ( img, index ) => (
					<li className="blocks-gallery-item" key={ img.id || img.url }>
						<SlideImage
							url={ img.url }
							alt={ img.alt }
							id={ img.id }
							isSelected={ this.state.selectedImage === index }
							onRemove={ this.onRemoveImage( index ) }
							onClick={ this.onSelectImage( index ) }
							setAttributes={ ( attrs ) => this.setImageAttributes( index, attrs ) }
						/>
					</li>
				) ) }
			</ul>,
		];
	}
}

export default rtSliderBlock;