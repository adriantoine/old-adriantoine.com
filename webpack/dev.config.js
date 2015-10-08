
/* eslint no-var: 0, no-console: 0 */

import path from 'path';
import webpack from 'webpack';
import WebpackErrorNotificationPlugin from 'webpack-error-notification';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import AssetsPlugin from 'assets-webpack-plugin';

const config = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index.js'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        stage: 0,
        optional: [
          'optimisation.react.constantElements',
          'optimisation.react.inlineElements'
        ]
      }
    }, {
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: [/node_modules/, /bloql/]
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?sourceMap!postcss-loader'
      )
    }]
  },

  postcss: [
    require('postcss-import')({
      path: [ path.resolve(__dirname, '../src/components') ]
    }),
    require('postcss-nested'),
    require('postcss-css-variables'),
    require('postcss-color-function'),
    require('postcss-calc'),
    require('postcss-custom-media'),
    require('postcss-extend'),
    require('postcss-svg')({paths: ['./public/img/icons', './public/img/icons/logos']}),
    require('lost'),
    require('postcss-responsive-type'),
    require('cssnano'),
    require('autoprefixer')
  ],

  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
  },
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules')
  },

  plugins: [

    new ExtractTextPlugin('style.css', { allChunks: true }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify(true)
      }
    }),

    new WebpackErrorNotificationPlugin()

  ]

};

export default config;
