/**
 * Contains image columns component.
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.blocks;
const { RangeControl } = wp.blocks.InspectorControls;

import ImageItem from './image-item';

class ImageGrid extends Component {

	constructor() {
		super( ...arguments );

		this.onSelectImage = this.onSelectImage.bind( this );
		this.setColumnsAttributes = this.setColumnsAttributes.bind( this );
		this.onRemoveImage = this.onRemoveImage.bind( this );
	}

	onSelectImage( index, media ) {
		this.setColumnsAttributes( index, {
			mediaURL: media.sizes.medium ? media.sizes.medium.url : media.url,
			mediaID: media.id,
		} );
	}

	setColumnsAttributes( index, dataObject ) {
		const { attributes } = this.props;
		let existingData = attributes.columns.slice( 0 ) || [];

		existingData[ index ] = existingData[ index ] ? _.extend( existingData[ index ], dataObject ) : dataObject;

		this.props.setAttributes( {
			columns: existingData
		} );
	}

	onRemoveImage( index ) {
		this.setColumnsAttributes( index, { mediaID: '', mediaURL: '' } );
	}

	render() {
		const { focus, setFocus, attributes, setAttributes } = this.props;
		const imageColumns = [];

		const inspectorControls = focus && (
			<InspectorControls key="inspector">
				<h3>{ __( 'Settings' ) }</h3>
				<RangeControl
					label={ __( 'Number of Images' ) }
					value={ attributes.imageCount }
					onChange={ ( value ) => setAttributes( { imageCount: value } ) }
					min={ 1 }
					max={ 10 }
				/>
			</InspectorControls>
		);

		for ( let index = 0; index < attributes.imageCount; index++ ) {
			let columnClass = `column-${ index } single-column`;
			let imageColumnKey = `column-${ index }`;

			const columnAttributes = attributes.columns[ index ] || {};

			imageColumns.push(
				<ImageItem
					onSelectImage={ ( media ) => this.onSelectImage( index, media ) }
					onRemove={ () => { this.onRemoveImage( index ) } }
					className={ columnClass }
					attributes={ columnAttributes }
					focused={ focus }
					setFocus={ setFocus }
					key={ imageColumnKey }
					index={ index }
				/>
			);
		}

		return [
			inspectorControls,
			<div className='rt-image-columns' key='image-columns'>
				{ imageColumns }
			</div>
		];
	}
}

export default ImageGrid;