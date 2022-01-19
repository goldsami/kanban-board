import { GraphQLObjectType } from 'graphql';
import { CreateUserType, UserType } from '../types';

export const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        data: { type: CreateUserType },
      },
      resolve: (source, args) => {
        console.log('resolve', { source, args });
        return null;
      },
    },
  },
});
