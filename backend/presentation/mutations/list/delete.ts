import { GraphQLNonNull, GraphQLString } from 'graphql';
import { deleteListUseCase } from '../../../domain';
import { ListType } from '../../types';

export const deleteListMutation = {
  type: ListType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_, { id }, context) => {
    return deleteListUseCase(id, context.userId);
  },
};
