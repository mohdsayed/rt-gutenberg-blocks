/**
 * Contains simple block registration.
 */

var el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType;

registerBlockType( 'riad/alert', {
	title: 'Alert Block',
	icon: 'warning',
	category: 'common',

	attributes: {
		type: {
			type: 'string',
			default: 'danger',
		},
		message: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},

	edit: function( props ) {
		var className = props.className,
			type = props.attributes.type,
			message = props.attributes.message;

		function updateMessage( event ) {
			props.setAttributes( { message: event.target.value } );
		}

		return el(
			'p',
			{ className: className + ' alert-' + type },
			el(
				'textarea',
				{ value: message, onChange: updateMessage }
			)
		);
	},

	transforms: {
		to: {
			type: 'block',
			blocks: [ 'core/paragraph' ],
			transform: function( attrs ) {
				return wp.blocks.createBlock( 'riad/paragraph', {
					content: attrs.message,
				} );
			}
		}
	},


	save: function( props ) {
		var type = props.attributes.type,
			message = props.attributes.message;

		return el(
			'p',
			{ className: 'alert-' + type },
			message
		);
	},
} );