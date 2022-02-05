import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Schema } from './presentation';
import cors from 'cors';
import { loginUseCase, signUpUseCase, verifyTokenUseCase } from './domain';

const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error('There\'s no token provided.');
    res.locals.userId = await verifyTokenUseCase(req.headers.authorization.split(' ')[1]);
    next();
  } catch (e) {
    res.status(401).send(e.message);
  }
};

async function start() {
  try {
    const port = process.env.PORT || 3000;
    const app = express();
    app.use(cors({
      origin: process.env.BACKEND_URL || ''
    }));
    app.post('/login', express.json(), async (req, res) => {
      try {
        const { email, password } = req.body;
        const token = await loginUseCase({ email, password });
        res.send(token);
      } catch (e) {
        res.status(404).send(e.message);
      }
    });
    app.post('/sign-up', express.json(), async (req, res) => {
      const { email, password, name } = req.body;
      try {
        const token = await signUpUseCase({ email, password, name });
        res.send(token);
      } catch (e) {
        res.status(409).send(e.message);
      }
    });
    app.use('/graphql', authMiddleware, (req, res) => {
      graphqlHTTP({
        schema: Schema,
        graphiql: true,
        context: {
          userId: res.locals.userId
        }
      })(req, res);
    });

    app.listen(port);

    console.log(`Server running at localhost:${port}`);
  } catch (e) {
    console.log(
      'server error', e.message
    );

  }
}

start();
