
// Very simple server to serve static files on Heroku

import path from 'path';
import express from 'express';

// import React from 'react';
// import { RoutingContext, match } from 'react-router';
// import createLocation from 'history/lib/createLocation';

import { express as bloql } from 'bloql/server';

const app = express();

let port = process.env.PORT || 3001;

bloql(app, {
  pretty: true,
  postsPath: path.join(__dirname, 'posts'),
  database: require('bloql-markdown-file-database')
});

app.use(express.static('public'));

// app.use( (req, res) => {
//   const location = createLocation(req.url);

//   match({ routes, location }, (err, redirectLocation, renderProps) => {
//     if(err) {
//       console.error(err);
//       return res.status(500).end('Internal server error');
//     }

//     if(!renderProps)
//       return res.status(404).end('Not found');

//     function renderView() {
//       const InitialView = (
//         <RoutingContext {...renderProps} />
//       );

//       const componentHTML = React.renderToString(InitialView);

//       const initialState = store.getState();

//       const HTML = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <meta charset="utf-8">
//           <title>Redux Demo</title>
//           <script>
//             window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
//           </script>
//         </head>
//         <body>
//           <div id="react-view">${componentHTML}</div>
//           <script type="application/javascript" src="/bundle.js"></script>
//         </body>
//       </html>
//       `;

//       return HTML;
//     }

//     fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
//       .then(renderView)
//       .then(html => res.end(html))
//       .catch(err => res.end(err.message));
//   });
// });

app.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});
