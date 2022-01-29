import { getTasksUseCase } from '../../../domain';
import { GraphQLList } from 'graphql';
import { TaskType } from '../../types';

export const tasksQuery = {
  type: new GraphQLList(TaskType),
  description: 'List of all Tasks',
  resolve() {
    return getTasksUseCase();
  },
};
