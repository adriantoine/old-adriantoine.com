/* eslint-env node */
delete process.env.BROWSER;

const path = require('path');
const fs = require('fs');

const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const Handlebars = require('handlebars');

const app = express();

let port = process.env.PORT || 3000;

// Enable Gzip
app.use(compression());

// Serve static cache with the expiry header
app.use(express.static('public', {
  maxAge: 365 * 24 * 60 * 60 * 1000,
}));

// Set default paths to assets
var assetsPaths = {js: 'bundle.js'};

app.use(morgan('dev'));

app.use((req, res) => {
  // Generate Handlebars templates
  const indexTpl = Handlebars.compile(fs.readFileSync(path.join(__dirname, 'src', 'index.hbs'), 'utf8'));

  // Respond to all request by the index
  res.end(indexTpl({
    jsPath: assetsPaths.js,
  }));
});

app.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});
