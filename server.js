
// Very simple server to serve static files on Heroku

import express from 'express';
import { express as bloql } from 'bloql/middleware';

const app = express();

let port = process.env.PORT || 3001;

app.use('/graphql', bloql({ pretty: true, postsPath: 'posts' }));
app.use(express.static('public'));

app.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});
