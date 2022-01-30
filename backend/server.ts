import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Schema } from './presentation';
import cors from 'cors';

async function start() {
  try {
    const port = process.env.PORT || 3000;
    const app = express();
    app.use(cors({
      origin: process.env.BACKEND_URL || ''
    }));
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
