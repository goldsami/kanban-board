import { getTasksUseCase } from '../../../domain';
import { GraphQLList, GraphQLNonNull, GraphQLString } from 'graphql';
import { TaskType } from '../../types';

export const tasksQuery = {
  type: new GraphQLList(TaskType),
  args: {
    projectId: { type: new GraphQLNonNull(GraphQLString) }
  },
  description: 'List of all Tasks',
  resolve(_, { projectId }) {
    return getTasksUseCase(projectId);
  },
};
