import { getListUseCase } from '../../../domain';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { ListType } from '../../types';

export const listQuery = {
  type: ListType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  description: 'Single List',
  resolve(_, { id }, context) {
    return getListUseCase(id, context.userId);
  },
};
