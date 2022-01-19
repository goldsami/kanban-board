import { GraphQLSchema } from 'graphql';
import { mutation } from './mutations';
import { query } from './queries';

export const Schema = new GraphQLSchema({
  query,
  mutation,
});
