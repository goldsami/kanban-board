import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { BlogAppSchema } from './src/schema';

const port = 3000;
const app = express();
app.use('/', graphqlHTTP({
  schema: BlogAppSchema,
  // mutation:
  graphiql: true,
}));

app.listen(port);
console.log(`GraphQL API server running at localhost:${port}`);
