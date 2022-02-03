import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Schema } from './presentation';
import cors from 'cors';
// import { defalult as serviceAccount } from 'firebase/kanban-board-175b9-firebase-adminsdk-m9m5x-ef3afb6c6a.json';
import config from './firebase/config.json';
// import admin from 'firebase-admin';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

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
      const body = req.body;
      console.log('body:', body);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, req.body.email, req.body.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          user.getIdToken(true).then(token => {
            res.send(token);
          });
          // ...
        })
        .catch((error) => {
          console.log('err', error.message);

          const errorCode = error.code;
          const errorMessage = error.message;
          res.send(error);
        });
    });
    app.post('/sign-up', express.json(), async (req, res) => {
      const body = req.body;
      console.log('body:', body);
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          user.getIdToken().then((tok) => {
            console.log('token:', tok);
            res.send(tok);

          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          res.send(error);
          // ..
        });
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
