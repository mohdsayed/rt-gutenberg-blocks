module.exports = {
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
			},
		],
	},
};
