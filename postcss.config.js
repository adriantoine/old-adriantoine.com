const path = require('path');

module.exports = {
  sourceMap: true,
  plugins: [
    require('postcss-import')({
      path: [path.resolve(__dirname, 'src/components')],
    }),
    require('postcss-nested'),
    require('postcss-css-variables'),
    require('postcss-color-function'),
    require('postcss-calc'),
    require('postcss-custom-media'),
    require('postcss-extend'),
    require('postcss-svg')(),
    require('lost'),
    require('postcss-responsive-type'),
    require('cssnano'),
    require('autoprefixer'),
  ],
};
