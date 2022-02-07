import { createListUseCase } from '../../../domain';
import { CreateListType, ListType } from '../../types';

export const createListMutation = {
  type: ListType,
  args: {
    data: { type: CreateListType },
  },
  resolve: (_, { data }, context) => {
    return createListUseCase(data, context.userId);
  },
};
