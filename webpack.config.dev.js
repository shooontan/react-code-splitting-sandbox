/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config.common');

module.exports = merge(webpackConfig, {
  entry: {
    bundle: [path.join(__dirname, '/src/client')],
  },
  output: {
    publicPath: '/',
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
  },
});
