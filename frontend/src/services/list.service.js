import { apolloClient } from '@/main';
import {
  CreateListMutation,
  DeleteListMutation, ListsQuery,
  UpdateListMutation,
} from '@/services/queries/list.query';

export class ListService {
  static async get(projectId) {
    const result = await apolloClient.query({
      query: ListsQuery,
      variables: {
        projectId,
      },
    });

    return result.data.lists;
  }

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
