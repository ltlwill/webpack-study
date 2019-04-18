const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname,'dist'),
	},
	module: {
		rules: [
			{
			  test: /\.js$/,
			  exclude: /(node_modules|bower_components)/,
			  use: {
				loader: 'babel-loader',
				options: {
				  presets: ['babel/preset-env']
				}
			  }
			}
		  ]
	},
	plugins: [
		new CleanWebpackPlugin({}),
		new HtmlWebpackPlugin({title: 'Build production'})
	]
};