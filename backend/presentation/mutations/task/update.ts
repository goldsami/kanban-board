import { GraphQLNonNull, GraphQLString } from 'graphql';
import { updateTaskUseCase } from '../../../domain';
import { CreateTaskType, TaskType } from '../../types';

export const updateTaskMutation = {
  type: TaskType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    data: { type: CreateTaskType },
  },
  resolve: (_, { id, data }, context) => {

    return updateTaskUseCase(id, context.userId, data);
  },
};
