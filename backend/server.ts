import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Schema } from './presentation';
import { initializeApp } from 'firebase/app';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDING_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

async function start() {
  try {
    await initializeApp(firebaseConfig);
    console.log('firebase initialized');

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
