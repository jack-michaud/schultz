var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: './assets/default/js/index',
  output: {
      path: path.resolve('./assets/default/bundles/'),
      filename: "[name]Default.js"
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ],

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader", query: {plugins: ['transform-decorators-legacy'], presets:['react','es2015','stage-0']}}, // to transform JSX into JS
    ],
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

}