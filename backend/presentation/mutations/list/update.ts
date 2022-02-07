import { GraphQLNonNull, GraphQLString } from 'graphql';
import { updateListUseCase } from '../../../domain';
import { CreateListType, ListType } from '../../types';

export const updateListMutation = {
  type: ListType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    data: { type: CreateListType },
  },
  resolve: (_, { id, data }, context) => {
    return updateListUseCase(id, context.userId, data);
  },
};
