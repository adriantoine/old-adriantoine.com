
// Very simple server to serve static files on Heroku

delete process.env.BROWSER;

import path from 'path';
import express from 'express';
import Handlebars from 'handlebars';
import fs from 'fs';

import bloql from 'bloql/server/middleware/express';

const app = express();

let port = process.env.PORT || 3001;

bloql(app, {
  pretty: true,
  postsPath: path.join(__dirname, 'posts'),
  database: require('bloql-markdown-file-database')
});

// Temporary fix
const indexTpl = Handlebars.compile(fs.readFileSync(path.join(__dirname, 'src', 'index.hbs'), 'utf8'));
fs.writeFileSync(path.join(__dirname, 'public', 'index.html'), indexTpl());

app.use(express.static('public'));

// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import { RoutingContext, match } from 'react-router';
// import createLocation from 'history/lib/createLocation';

// import routes from './src/routes';
// app.use((req, res) => {
//   const location = createLocation(req.url);

//   match({ routes, location }, (err, redirectLocation, renderProps) => {

//     const componentHTML = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);

//     const html = indexTpl({
//       body: componentHTML
//     });

//     res.end(html);

//   });
// });

app.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});
