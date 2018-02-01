/**
 * Contains image columns component.
 */

const { __ } = wp.i18n;
const { Component } = wp.element;
const { InspectorControls } = wp.blocks;
const { RangeControl } = wp.blocks.InspectorControls;

import ImageColumn from './image-column';

class ImageColumns extends Component {

	constructor() {
		super( ...arguments );

		this.onSelectImage = this.onSelectImage.bind( this );
		this.setColumnsAttributes = this.setColumnsAttributes.bind( this );
	}

	onSelectImage( index, media ) {
		this.setColumnsAttributes( index, {
			mediaURL: media.sizes.medium ? media.sizes.medium.url : media.url,
			mediaID: media.id,
		} );
	}

	setColumnsAttributes( index, dataObject ) {
		const { attributes } = this.props;
		let existingData = attributes.content.slice( 0 ) || [];

		if ( existingData[ index ] ) {
			existingData[ index ] = _.extend( existingData[ index ], dataObject );
		} else {
			existingData[ index ] = dataObject;
		}

		this.props.setAttributes( {
			content: existingData
		} );
	}

	render() {
		const { focus, attributes, setAttributes } = this.props;
		const imageColumns = [];

		const inspectorControls = focus && (
			<InspectorControls key="inspector">
				<h3>{ __( 'Settings' ) }</h3>
				<RangeControl
					label={ __( 'Columns' ) }
					value={ attributes.columns }
					onChange={ ( value ) => setAttributes( { columns: value } ) }
					min={ 1 }
					max={ 5 }
				/>
			</InspectorControls>
		);

		for ( let index = 0; index < attributes.columns; index++ ) {
			let columnClass = `column-${ index } single-column`;
			let imageColumnKey = `column-${ index }`;

			const columnAttributes = attributes.content[ index ] || {};

			imageColumns.push(
				<ImageColumn
					onSelectImage={ ( media ) => this.onSelectImage( index, media ) }
					onChangeTitle={ ( title ) => this.setColumnsAttributes( index, { title } ) }
					onChangeContent={ ( content ) => this.setColumnsAttributes( index, { content } ) }
					onChangeReadMore = { ( readMore ) => this.setColumnsAttributes( index, { readMore } ) }
					className={ columnClass }
					attributes={ columnAttributes }
					focus={ focus }
					key={ imageColumnKey }
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

export default ImageColumns;