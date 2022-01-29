import { createTaskUseCase } from '../../../domain';
import { CreateTaskType, TaskType } from '../../types';

export const createTaskMutation = {
  type: TaskType,
  args: {
    data: { type: CreateTaskType },
  },
  resolve: (_, { data }) => {

    return createTaskUseCase(data);
  },
};
