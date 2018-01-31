/**
 * Contains bio car component.
 */

const { Component } = wp.element;
const { InspectorControls } = wp.blocks;
const { TextControl } = InspectorControls;
const { __ } = wp.i18n;

class GithubGist extends Component {
	constructor() {
		super( ...arguments );

		this.gistContainerId = 'gist-' + this.props.id;
	}

	onInputChange( newVal ) {
		this.props.setAttributes( { url: newVal } );
	}

	makeGithubRequest() {
		jQuery.getJSON( this.props.attributes.url.trim(/\/$/) + '.json?callback=?', data => {
			let div = jQuery( '#' + this.gistContainerId ),
				stylesheet = jQuery('<link />');

			div.html( '' );
			stylesheet.attr( 'ref', 'stylesheet' )
				.attr( 'href', data.stylesheet )
				.attr( 'type', 'text/css' );
			div.append( stylesheet ).append( data.div );
		});
	}

	render() {
		const attributes = this.props.attributes;
		const { focus } = this.props;

		let url = attributes.url || '',
			retval = [];

		/**
		 * When the block is in focus or there's no URL value,
		 * show the text input control so the user can enter a URL.
		 */
		if ( !! focus || ! url.length ) {
			retval.push( ( <TextControl
					value={ url }
					key='controlOptions'
					onChange={ this.onInputChange.bind( this ) }
					placeholder={ __( 'Enter a GitHub Gist URL' ) }
				/> )
			);
		}

		if ( url.length ) {

			/**
			 * setTimeout is used to delay the GitHub JSON API request
			 * until after the block is initially rendered. From the response,
			 * we update the rendered div.
			 */
			setTimeout( this.makeGithubRequest.bind( this ), 10 );

			retval.push( (
				<div id={ this.gistContainerId } key={ this.gistContainerId } />
			) );
		}

		return retval;
	}
}

export default GithubGist;
