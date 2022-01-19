import { GraphQLList } from 'graphql';
import { UserType } from '../../types';

export const usersQuery = {
  type: new GraphQLList(UserType),
  description: 'List of all Users',
  resolve() {
    console.log('list of users');

    return null;
  },
};
