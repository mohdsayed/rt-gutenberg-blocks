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
	}

	/**
	 * Enqueue block editor assets
	 *
	 * @action enqueue_block_editor_assets
	 */
	public function enqueue_block_editor_assets() {
		wp_register_script(
			'slick-slider',
			$this->dir_url . '/js/slick.js',
			[ 'jquery' ]
		);

		wp_enqueue_script(
			'rtgb-block',
			$this->dir_url . '/js/block.build.js',
			[ 'slick-slider', 'wp-blocks', 'wp-i18n', 'wp-element', 'moment' ],
			filemtime( $this->dir_path . '/js/block.build.js' )
		);

		wp_enqueue_style(
			'rtgb-editor-style',
			$this->dir_url . '/css/editor.css',
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
}
