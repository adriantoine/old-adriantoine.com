
/* eslint no-var: 0, no-console: 0 */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');

const dist = path.resolve(__dirname, '../public');

const config = {
  devtool: 'source-map',
  entry: './src/index',

  output: {
    path: dist,
    filename: '[name]-[hash].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
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

    new ExtractTextPlugin('[name]-[chunkhash].css'),
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BROWSER: JSON.stringify(true)
      }
    }),

    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(__dirname, '../public')
    })

  ]

};

module.exports = config;
