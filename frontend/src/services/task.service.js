import {
  CreateTaskMutation,
  DeleteTaskMutation,
  UpdateTaskMutation,
} from '@/services/queries/task.query';
import { apolloClient } from '@/main';

export class TaskService {
  static delete(id) {
    return apolloClient.mutate({
      mutation: DeleteTaskMutation,
      variables: {
        id,
      },
    });
  }

  static async create(data) {
    const result = await apolloClient.mutate({
      mutation: CreateTaskMutation,
      variables: {
        data,
      },
    });

    return result.data.createTask;
  }

  static async update(id, data) {
    const result = await apolloClient.mutate({
      mutation: UpdateTaskMutation,
      variables: {
        id,
        data,
      },
    });

    return result.data.updateTask;
  }
}
