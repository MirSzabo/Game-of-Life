const path = require("path");
require("babel-register");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: true,
    }),
  ],

  watch: true,
  devtool: 'source-map',
};
// Exports
module.exports = config;
