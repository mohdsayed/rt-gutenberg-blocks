/**
 * Registers bio block.
 */

const { __ } = wp.i18n;
const { registerBlockType, Editable, MediaUpload } = wp.blocks;
const { Button } = wp.components;

registerBlockType( 'rtgb/bio-block', {
	title: __( 'Bio Block' ),
	icon: 'index-card',
	category: 'layout',
	attributes: {
		title: {
			type: 'array',
			source: 'children',
			selector: 'h2',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		socialLinks: {
			type: 'array',
			source: 'children',
			selector: '.social-links',
		},
		aboutYou: {
			type: 'array',
			source: 'children',
			selector: '.about-you',
		},
	},
	edit: props => {
		const focusedEditable = props.focus ? props.focus.editable || 'title' : null;
		const attributes = props.attributes;
		const onChangeTitle = value => {
			props.setAttributes( { title: value } );
		};
		const onFocusTitle = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'title' } ) );
		};
		const onSelectImage = media => {
			props.setAttributes( {
				mediaURL: media.sizes.thumbnail.url,
				mediaID: media.id,
			} );
		};
		const onChangeSocialLinks = value => {
			props.setAttributes( { socialLinks: value } );
		};
		const onFocusIngredients = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'socialLinks' } ) );
		};
		const onChangeAboutYou = value => {
			props.setAttributes( { aboutYou: value } );
		};
		const onFocusInstructions = focus => {
			props.setFocus( _.extend( {}, focus, { editable: 'aboutYou' } ) );
		};

		return (
			<div className={ props.className }>
				<div className="bio-profile-pic">
					{ attributes.mediaID ? <img src={ attributes.mediaURL } /> : '' }
					<MediaUpload
						onSelect={ onSelectImage }
						value={ attributes.mediaID }
						type="image"
						render={ ( { open } ) => (
							<Button isLarge onClick={ open }>
								{ ! attributes.mediaID ? __( 'Profile Picture' ) : __( 'Change Profile Picture' ) }
							</Button>
						) }
					/>
					<Editable
						tagName="h2"
						placeholder={ __( 'Write title…' ) }
						value={ attributes.title }
						onChange={ onChangeTitle }
						focus={ focusedEditable === 'title' }
						onFocus={ onFocusTitle }
					/>
					<h3>{ __( 'About You' ) }</h3>
					<Editable
						tagName="div"
						multiline="p"
						className="about-you"
						placeholder={ __( 'Write about you…' ) }
						value={ attributes.aboutYou }
						onChange={ onChangeAboutYou }
						focus={ focusedEditable === 'aboutYou' }
						onFocus={ onFocusInstructions }
						inlineToolbar
					/>
				</div>
				<h3>{ __( 'Social Links' ) }</h3>
				<Editable
					tagName="ul"
					multiline="li"
					placeholder={ __( 'Enter social Links…' ) }
					value={ attributes.socialLinks }
					onChange={ onChangeSocialLinks }
					focus={ focusedEditable === 'socialLinks' }
					onFocus={ onFocusIngredients }
					className="social-links"
					inlineToolbar
				/>
			</div>
		);
	},
	save: props => {
		const {
			className,
			attributes: {
				title,
				mediaURL,
				socialLinks,
				aboutYou
			}
		} = props;
		return (
			<div className={ className }>
				<h2>
					{ title }
				</h2>
				{
					mediaURL && (
						<img className="bio-profile-pic" src={ mediaURL } />
					)
				}
				<h3>{ __( 'About' ) }</h3>
				<div className="about-you">
					{ aboutYou }
				</div>
				<h3>{ __( 'Find me Here' ) }</h3>
				<ul className="social-links">
					{ socialLinks }
				</ul>
			</div>
		);
	}
} );