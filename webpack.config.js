const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
	mode: "development",
	entry: ["babel-polyfill", "./src/js/models/Search.js"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/autoComplete.js",
		library: "autoComplete",
		libraryTarget: "umd"
	},
	devServer: {
		contentBase: "./dist"
	},
	plugins: [
		new CopyWebpackPlugin(
			[
				{ from: "src/index.html", to: "" },
				{ from: "src/css/", to: "css/" },
				{ from: "src/js/index.js", to: "js/" }
			],
			{ debug: "debug" }
		),
		new MinifyPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	}
};
