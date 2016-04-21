module.exports = {
	entry: './src/js/main.js',
	output: {
		filename: './src/bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
