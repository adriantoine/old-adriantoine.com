const path = require('path');
const root = path.join(__dirname, '..');

module.exports = {
  entry: path.join(root, 'src', 'index.js'),

  output: {
    path: path.resolve(root, 'public'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'buble-loader',
        query: {
          jsx: 'h',
          objectAssign: 'Object.assign',
        },
      },
      {
        exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.json$/, /\.svg$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
};
