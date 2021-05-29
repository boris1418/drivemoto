const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	devtool: "source-map",
	mode: 'production',
    entry: {
        main: ['./src/js/jquery.min.js', './src/js/slick.min.js', './src/js/ion.rangeSlider.min.js', './src/js/jquery.formstyler.min.js', './src/js/jquery.rateyo.min.js', './src/js/main.js'],
		styles: './src/styles-custom.js',
    },
	output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
	plugins: [new MiniCssExtractPlugin({filename:'bundle.css'})],
	module: {
        rules: [
            //used for loading css files
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
	externals: {
		// require("jquery") is external and available
		//  on the global var jQuery
		"jquery": "jQuery"
	}
}