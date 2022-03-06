import {CreateTaskMutation, DeleteTaskMutation} from "@/services/queries/task.query";
import {apolloClient} from "@/main";

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
}
