
// Very simple server to serve static files on Heroku

import path from 'path';
import express from 'express';
import { express as bloql } from 'bloql/server';

const app = express();

let port = process.env.PORT || 3001;

bloql(app, {
  pretty: true,
  postsPath: path.join(__dirname, 'posts'),
  database: require('bloql-markdown-file-database')
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});
