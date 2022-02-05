import { GraphQLNonNull, GraphQLString } from 'graphql';
import { deleteTaskUseCase } from '@domain';
import { TaskType } from '../../types';

export const deleteTaskMutation = {
  type: TaskType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (_, { id }, context) => {

    return deleteTaskUseCase(id, context.userId);
  },
};
