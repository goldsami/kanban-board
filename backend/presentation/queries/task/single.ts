import { getTaskUseCase } from '../../../domain';
import { GraphQLNonNull, GraphQLString } from 'graphql';
import { TaskType } from '../../types';

export const taskQuery = {
  type: TaskType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) }
  },
  description: 'Single Task',
  resolve(_, { id }, context) {
    return getTaskUseCase(id, context.userId);
  },
};
