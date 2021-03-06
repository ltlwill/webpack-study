const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname,'dist'),
	},
	plugins: [
		new CleanWebpackPlugin({}),
		new HtmlWebpackPlugin({title: 'Out put management'})
	]
};