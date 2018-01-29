const glob = require("glob");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		entry: {
			blocks: glob.sync( './blocks/*/index.js' ),
		},
		output: {
			path: __dirname + '/js/',
			filename: 'block.build.js',
		},
		module: {
			loaders: [
				{
					test: /.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
				}
			],
		},
	},
	{
		entry: {
			'editor.css': glob.sync( './blocks/*/editor.css' ),
			'style.css': glob.sync( './blocks/*/style.css' ),
		},
		output: {
			path: __dirname + '/css/',
			filename: '[name]',
		},
		module: {
			loaders: [
				{
					test: /\.css$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader'
					})
				},
			],
		},
		plugins: [
			new ExtractTextPlugin( '[name]' ),
		]
	}
];
