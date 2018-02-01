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
		this.props.setAttributes( { readMore } );
	}

	render() {
		const { focus, attributes, setAttributes } = this.props;

		const inspectorControls = focus && (
			<InspectorControls key="inspector">
				<h3>{ __( 'Settings' ) }</h3>
				<RangeControl
					label={ __( 'Columns' ) }
					value={ attributes.columns }
					onChange={ ( value ) => setAttributes( { columns: value } ) }
					min={ 2 }
					max={ 5 }
				/>
			</InspectorControls>
		);

		const column = (
			<ImageColumn
				onSelectImage={ this.onSelectImage }
				onChangeTitle={ this.onChangeTitle }
				onChangeContent={ this.onChangeContent }
				onChangeReadMore = { this.onChangeReadMore }
				attributes={ attributes }
				focus={ focus }
			/>
		);

		return [
			inspectorControls,
			<div key='image-columns'>
				{ column }
			</div>
		];
	}
}

export default ImageColumns;