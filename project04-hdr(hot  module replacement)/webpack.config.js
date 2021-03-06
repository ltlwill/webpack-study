const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	devtool: 'inline-source-map',
	devServer:{
		contentBase: './dist',
		hot: true
	},
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname,'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
			{test: /\.css$/,use: ['style-loader','css-loader']}
		]
	},
	plugins: [
		new CleanWebpackPlugin({}),
		new HtmlWebpackPlugin({title: 'Hot Module Replacement'}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
};