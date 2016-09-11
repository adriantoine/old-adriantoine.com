/* eslint-env node */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const fileSize = require('filesize');
const gzip = require('gzip-size');
const chalk = require('chalk');

const rollup = require('rollup');
const config = require('./rollup.config');

var hash = crypto.createHash('sha256');

rollup.rollup(config)
.then(bundle => {
  const {code, map} = bundle.generate({
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

  let index = fs.readFileSync(path.join(__dirname, 'src/index.hbs'), 'utf8');
  index = index.replace('{{jsPath}}', `/${jsFileName}`);
  fs.writeFileSync(path.join(__dirname, 'public/index.html'), index);
})
.catch(err => {
  console.error(err);
});
