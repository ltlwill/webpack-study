const path = require('path');
// import path from 'path'; // why error

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'dist'),
	},
	module: {
		rules: [
			{test: /\.css$/,use: ['style-loader','css-loader']},
			{test: /\.(png|jpg|svg|gif)$/,use: ['file-loader']},
			{test: /\.(woff|woff2|eot|ttf|otf)$/,use: ['file-loader']},
			{test: /\.xml$/,use: ['xml-loader']},
			{test: /\.(csv|tsv)$/,use: ['csv-loader']}
		]
	}
};