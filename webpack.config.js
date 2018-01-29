const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		entry: {
			blocks: [
				'./blocks/slider/index.js',
				'./blocks/simple-block/index.js',
				'./blocks/editable-block/index.js',
				'./blocks/bio-block/index.js',
			]
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
			'editor.css': [
				'./blocks/slider/editor.css',
				'./blocks/simple-block/editor.css',
				'./blocks/editable-block/editor.css',
				'./blocks/bio-block/editor.css',
			],
			'style.css': [
				'./blocks/slider/style.css',
				'./blocks/simple-block/style.css',
				'./blocks/editable-block/style.css',
				'./blocks/bio-block/style.css',
			]
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
