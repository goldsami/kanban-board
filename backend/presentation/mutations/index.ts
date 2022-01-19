import { GraphQLObjectType } from 'graphql';
import { createUserMutation } from './user';

export const mutation = new GraphQLObjectType({
  name: 'mutation',
  description: 'Kanban Application Schema Mutation Root',
  fields: {
    addUser: createUserMutation,
  },
});
