/**
 * Registers bio block.
 */
import ImageColumn from "./image-column";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'rtgb/image-column', {
	title: __( 'Image Column' ),
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
		openExternalLinks: {
			type: 'boolean',
			default: false,
		}
	},
	edit: ImageColumn,
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