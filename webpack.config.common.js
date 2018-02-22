const path = require('path');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: 'last 2 versions',
                  },
                },
              ],
              'react',
            ],
            plugins: [
              'syntax-dynamic-import',
              'react-loadable/babel',
              'react-hot-loader/babel',
              [
                'transform-runtime',
                {
                  helpers: false,
                  polyfill: false,
                  regenerator: true,
                  moduleName: 'babel-runtime',
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new ReactLoadablePlugin({
      filename: path.resolve(__dirname, 'public', 'dist', 'react-loadable.json'),
    }),
  ],
};
