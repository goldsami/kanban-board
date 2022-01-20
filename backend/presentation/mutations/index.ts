import { GraphQLObjectType } from 'graphql';
import { createUserMutation, deleteUserMutation, updateUserMutation } from './user';

export const mutation = new GraphQLObjectType({
  name: 'mutation',
  description: 'Kanban Application Schema Mutation Root',
  fields: {
    createUser: createUserMutation,
    updateUser: updateUserMutation,
    deleteUser: deleteUserMutation,
  },
});
