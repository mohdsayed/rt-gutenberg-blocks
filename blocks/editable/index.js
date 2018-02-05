/**
 * Creates RichText block.
 */

const { __ } = wp.i18n;
const { registerBlockType, RichText, source: { children } } = wp.blocks;

registerBlockType( 'rtgb/rt-RichText-block', {
	title: __( 'RT RichText Block' ),
	icon: 'universal-access-alt',
	category: 'common',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit: props => {
		const { attributes: { content }, focus, className, setFocus } = props;
		const onChangeContent = newContent => {
			props.setAttributes( { content: newContent } );
		};
		return (
			<div className={ props.className }>
				<h3>Enter Details</h3>
				<RichText
					className={ className }
					placeholder={ __( 'Write here...' ) }
					onChange={ onChangeContent }
					value={ content }
					focus={ focus }
					onFocus={ setFocus }
				/>
			</div>
		);
	},
	save: props => {
		return (
			<div className={ props.className }>
				<h3>I will only show on frontend and inside code editor</h3>
				<p>
					{ props.attributes.content }
				</p>
			</div>
		)
	}
} );