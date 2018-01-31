<?php
/**
 * Bootstraps the Rt Gutenberg Blocks plugin.
 *
 * @package RtGutenbergBlocks
 */

namespace RtGutenbergBlocks;

/**
 * Main plugin bootstrap file.
 */
class Plugin extends Plugin_Base {

	/**
	 * Initiate the plugin resources.
	 *
	 * Priority is 9 because WP_Customize_Widgets::register_settings() happens at
	 * after_setup_theme priority 10. This is especially important for plugins
	 * that extend the Customizer to ensure resources are available in time.
	 *
	 * @action after_setup_theme, 9
	 */
	public function init() {
		$this->config = apply_filters( 'rt_gutenberg_blocks_plugin_config', $this->config, $this );
		require_once 'class-meta-box.php';
	}

	/**
	 * Enqueue block editor assets
	 *
	 * @action enqueue_block_editor_assets
	 */
	public function enqueue_block_editor_assets() {
		wp_register_script(
			'slick-slider',
			$this->dir_url . 'js/slick.js',
			[ 'jquery' ]
		);

		wp_enqueue_script(
			'rtgb-block',
			$this->dir_url . 'js/block.build.js',
			[ 'slick-slider', 'wp-blocks', 'wp-i18n', 'wp-element', 'moment' ],
			filemtime( $this->dir_path . '/js/block.build.js' )
		);

		wp_enqueue_style(
			'rtgb-editor-style',
			$this->dir_url . 'css/editor.css',
			[ 'wp-edit-blocks' ],
			filemtime( $this->dir_path . '/css/editor.css' )
		);
	}

	/**
	 * Enqueue block assets
	 *
	 * @action enqueue_block_assets
	 */
	public function enqueue_block_assets() {
		wp_enqueue_style(
			'rtgb-style',
			$this->dir_url . '/css/style.css',
			[ 'wp-blocks' ],
			filemtime( $this->dir_path . '/css/style.css' )
		);
	}

	/**
	 * Enqueue front end styles.
	 *
	 * @action wp_enqueue_scripts
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'rt-gutenberg-blocks', $this->dir_url . 'css/style.css' );
	}

	/**
	 * Registers all block assets so that they can be enqueued through Gutenberg in
	 * the corresponding context.
	 *
	 * @action init
	 * @see https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/#enqueuing-block-scripts
	 */
	function github_gist_block_init() {
		add_shortcode( 'github-gist', [ $this, 'render_github_gist' ] );

		register_block_type( 'rtgb/github-gist', [
			'attributes' => [
				'url' => [
					'type' => 'string',
					'default' => ''
				]
			],
			'render_callback' => [ $this, 'render_github_gist' ],
		] );
	}

	/**
	 * Renders github gist.
	 *
	 * @param array $attributes Attributes.
	 * @return string
	 */
	function render_github_gist( $attributes ) {
		if ( empty( $attributes['url'] ) || 'gist.github.com' !== parse_url( $attributes['url'], PHP_URL_HOST ) ) {
			return '';
		}

		return sprintf( '<script src="%s"></script>', esc_url( rtrim( $attributes['url'], '/' ) . '.js' ) );
	}
}
