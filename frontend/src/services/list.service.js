import { apolloClient } from '@/main';
import { CreateListMutation, DeleteListMutation } from '@/services/queries/list.query';

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
}
