const path = require('path');
const webpack = require('webpack');

const PATHS = {
  entry: path.join(__dirname, "src/"),
  output: path.join(__dirname, "dist/")
};

module.exports = {
  entry: {
    path: PATHS.entry
  },
  output: {
    path: PATHS.output,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: PATHS.output
  }
};
