const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, "dist"),
  },
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: "bundle.js",
  },
};
