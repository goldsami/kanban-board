import { getUsersUseCase } from '../../../domain';
import { GraphQLList } from 'graphql';
import { UserType } from '../../types';

export const usersQuery = {
  type: new GraphQLList(UserType),
  description: 'List of all Users',
  resolve() {
    return getUsersUseCase();
  },
};
