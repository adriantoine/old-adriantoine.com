
// Very simple server to serve static files on Heroku

import express from 'express';
import morgan from 'morgan';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

let port = process.env.PORT || 3001;

app.use('/graphql', graphqlHTTP({ schema: schema, pretty: true }));
app.use(express.static('public'));
app.use(morgan('dev'));

app.listen(port, () => {
  console.log('Server started and listening on port ' + port);
});
