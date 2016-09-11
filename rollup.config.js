/* eslint-env node */

const path = require('path');
const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const replace = require('rollup-plugin-replace');
const postcss = require('rollup-plugin-postcss');

const plugins = [
  postcss({
    include: '**/*.css',
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
      require('postcss-svg')({paths: ['./public/img/icons', './public/img/icons/logos']}),
      require('lost'),
      require('postcss-responsive-type'),
      require('cssnano'),
      require('autoprefixer'),
    ],
  }),

  nodeResolve({
    jsnext: true,
    main: true,
    browser: true,
    preferBuiltins: false,
  }),

  commonjs({
    include: 'node_modules/**',
  }),

  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  }),

  buble({
    jsx: 'h',
    objectAssign: 'Object.assign',
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(uglify({
    sourceMap: true,
    compress: {
      screw_ie8: true, // eslint-disable-line camelcase
      hoist_vars: true, // eslint-disable-line camelcase
      collapse_vars: true, // eslint-disable-line camelcase
      pure_getters: true, // eslint-disable-line camelcase
      keep_fargs: false, // eslint-disable-line camelcase
      warnings: false,
    },
    output: {
      comments: false,
    },
  }));
}

module.exports = {
  sourceMap: true,
  entry: 'src/index.js',
  plugins: plugins,
};
