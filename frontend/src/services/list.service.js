import { apolloClient } from '@/main';
import {
  CreateListMutation,
  DeleteListMutation,
  UpdateListMutation
} from '@/services/queries/list.query';
import {UpdateTaskMutation} from "@/services/queries/task.query";

export class ListService {
  static delete(id) {
    return apolloClient.mutate({
      mutation: DeleteListMutation,
      variables: {
        id,
      },
    });
  }

  static async create(data) {
    const result = await apolloClient.mutate({
      mutation: CreateListMutation,
      variables: {
        data,
      },
    });

    return result.data.createList;
  }

  static async update(id, data) {
    const result = await apolloClient.mutate({
      mutation: UpdateListMutation,
      variables: {
        id,
        data,
      },
    });

    return result.data.updateList;
  }
}
