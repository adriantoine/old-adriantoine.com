
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index',

  output: {
    filename: 'index.js',
    path: path.resolve('./public'),
    libraryTarget: 'umd'
  },

  module: {
    preLoaders: [
      { test: /\.json$/, loader: 'json'},
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          stage: 0,
          optional: [
            'optimisation.react.constantElements',
            'optimisation.react.inlineElements'
          ]
        },
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: [/node_modules/, /bloql/]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?sourceMap!postcss-loader'
        )
      },
    ]
  },

  postcss: [
    require('postcss-import')({
      path: ['components']
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
    require('autoprefixer-core')
  ],

  resolve: {
    fallback: path.join(__dirname, 'node_modules'),
  },
  resolveLoader: {
    fallback: path.join(__dirname, 'node_modules')
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!isomorphic-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true)
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.DedupePlugin()
  ]
};
