module.exports = {
	entry: {
		slider: './blocks/slider/index.js'
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
