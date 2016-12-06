var webpack = require('webpack');
var path = require('path');


var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');
var IMAGES_DIR = path.resolve(__dirname, 'images');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: APP_DIR,
      loader: 'babel'
    },
    {
      test: /\.css/,
      include: APP_DIR,
      loader: 'style-loader!css-loader'      
    },
    {
      test: /\.(jpg|png)$/,
      include: APP_DIR,
      loader: 'file?name=[path][name].[ext]'
    }]
  }
};

module.exports = config;
