<?php
/**
 * Instantiates the Rt Gutenberg Blocks plugin
 *
 * @package RtGutenbergBlocks
 */

namespace RtGutenbergBlocks;

global $rt_gutenberg_blocks_plugin;

require_once __DIR__ . '/php/class-plugin-base.php';
require_once __DIR__ . '/php/class-plugin.php';

$rt_gutenberg_blocks_plugin = new Plugin();

/**
 * Rt Gutenberg Blocks Plugin Instance
 *
 * @return Plugin
 */
function get_plugin_instance() {
	global $rt_gutenberg_blocks_plugin;
	return $rt_gutenberg_blocks_plugin;
}
