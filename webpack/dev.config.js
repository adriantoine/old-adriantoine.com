const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const base = require('./base.config');
const root = path.join(__dirname, '..');

module.exports = merge(base, {
  module: {
    rules: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(root, 'src', 'index.html'),
    }),
  ],

  devServer: {
    contentBase: path.join(root, 'public'),
    port: 9000,
  },

  devtool: 'cheap-module-source-map',
});
