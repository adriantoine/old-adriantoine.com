const fs = require('fs');
const path = require('path');

const fileSize = require('filesize');
const gzip = require('gzip-size');
const chalk = require('chalk');

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const replace = require('rollup-plugin-replace');
const postcss = require('rollup-plugin-postcss');

var crypto = require('crypto');
var hash = crypto.createHash('sha256');

rollup.rollup({
  sourceMap: true,
  entry: 'src/index.js',
  plugins: [
    postcss({
      include: '**/*.css',
      sourceMap: true,
      plugins: [
        require('postcss-import')({
          path: [ path.resolve(__dirname, 'src/components') ]
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
      namedExports: {
        './node_modules/react/react.js': ['Component', 'PropTypes', 'createElement'],
      },
    }),

    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.BROWSER': JSON.stringify(true),
    }),

    babel({
      sourceMap: true,
      babelrc: false,
      presets: [ ['es2015', { loose: true, modules: false }], 'react' ],
      plugins: [ 'external-helpers' ]
    }),

    uglify({
      sourceMap: true,
      compress: {
        screw_ie8: true,
        hoist_vars: true,
        collapse_vars: true,
        pure_getters: true,
        keep_fargs: false,
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ],
})
.then(bundle => {
  const { code, map } = bundle.generate({
    format: 'umd',
    sourceMap: true,
  });

  const hashValue = hash.update(code).digest('hex');
  const jsFileName = `bundle.${hashValue}.js`;

  let size = fileSize(Buffer.byteLength(code));
  let gzipSize = fileSize(gzip.sync(code));

  console.log(chalk.blue('\nsize: '), size);
  console.log(chalk.blue('gzip: '), gzipSize);

  fs.writeFileSync(path.join(__dirname, `public/${jsFileName}`), code);
  fs.writeFileSync(path.join(__dirname, `public/${jsFileName}.map`), map);

  fs.writeFileSync(path.join(__dirname, 'public/assets.json'), `{"jsPath": "${jsFileName}"}`);
})
.catch(err => {
  console.error(err);
});
