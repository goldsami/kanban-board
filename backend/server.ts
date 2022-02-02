import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Schema } from './presentation';
import cors from 'cors';
// import { defalult as serviceAccount } from 'firebase/kanban-board-175b9-firebase-adminsdk-m9m5x-ef3afb6c6a.json';
import config from './firebase/config.json';

async function start() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const admin = require('firebase-admin');

  admin.initializeApp({
    credential: admin.credential.cert(config),
  });
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
        admin.auth().verifyIdToken(tokenParts).then(x => {
          res.locals.userId = x.user_id;
          next();
        }).catch(() => {
          throw '401';
        });
      }
      else throw '401';
    });
    app.use('/graphql', (req, res) => {
      graphqlHTTP({
        schema: Schema,
        graphiql: true,
        context: {
          user: {
            id: res.locals.userId
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
