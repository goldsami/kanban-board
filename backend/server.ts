import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Schema } from './presentation';


async function start() {
  try {

    const port = 3000;
    const app = express();
    app.use('/', graphqlHTTP({
      schema: Schema,
      graphiql: true,
    }));

    app.listen(port);

    console.log(`GraphQL API server running at localhost:${port}`);
  } catch (e) {
    console.log(
      'server error', e.message
    );

  }
}

start();
