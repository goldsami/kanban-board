import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Schema } from './presentation';
import cors from 'cors';
import config from './firebase/config.json';
import { loginUseCase, signUpUseCase } from './domain';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const admin = require('firebase-admin');

const authMiddleware = (req, res, next) => {

  if (req.headers.authorization) {
    const tokenParts = req.headers.authorization
      .split(' ')[1];
    // console.log('token:', tokenParts);
    admin.auth().verifyIdToken(tokenParts).then(x => {
      res.locals.userId = x.user_id;
      next();
    }).catch((e) => {
      console.log('err', e.message);
      next();
      // throw '401';
    });
  }
  else throw '402';
};

async function start() {

  admin.initializeApp({
    credential: admin.credential.cert(config),
  });
  try {
    const port = process.env.PORT || 3000;
    const app = express();
    app.use(cors({
      origin: process.env.BACKEND_URL || ''
    }));
    app.post('/login', express.json(), async (req, res) => {
      const { email, password } = req.body;
      const token = await loginUseCase({ email, password });
      res.send(token);
    });
    app.post('/sign-up', express.json(), async (req, res) => {
      const { email, password } = req.body;
      const token = await signUpUseCase({ email, password });
      res.send(token);
    });
    app.use('/graphql', authMiddleware, (req, res) => {
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
