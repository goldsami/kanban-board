import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Schema } from './presentation';
import cors from 'cors';
import { getAuth } from 'firebase/auth';

async function start() {
  try {
    const port = process.env.PORT || 3000;
    const app = express();
    app.use(cors({
      origin: process.env.BACKEND_URL || ''
    }));
    app.use((req, res, next) => {
      if (req.headers.authorization) {
        const tokenParts = req.headers.authorization
          .split(' ')[1];
        // console.log('token:', tokenParts);
        // getAuth().verifyIdToken(tokenParts)
      }
      // else return 401;
      next();
    });
    app.use('/', (req, res) => {
      graphqlHTTP({
        schema: Schema,
        graphiql: true,
        context: {
          user: {
            name: ''
          }
        }
      })(req, res);
    });

    app.listen(port);

    console.log(`GraphQL API server running at localhost:${port}`);
  } catch (e) {
    console.log(
      'server error', e.message
    );

  }
}

start();
