import { getUserUseCase } from '../../../domain';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { UserType } from '../../types';

export const userQuery = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  description: 'Single User',
  resolve(_, { id }) {
    return getUserUseCase(id);
  },
};
