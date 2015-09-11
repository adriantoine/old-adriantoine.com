
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
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint'
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
    require('postcss-extend'),
    require('cssnano'),
    require('autoprefixer-core')
  ],

  resolve: {
    modulesDirectories: ['node_modules', 'src/components']
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};
