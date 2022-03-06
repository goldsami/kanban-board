import { ListService } from '@/services/list.service';

export const listsModule = {
  state() {
    return {
      lists: [],
    };
  },
  mutations: {
    setLists(store, lists) {
      store.lists = lists;
    },
    pushLists(store, lists) {
      store.lists = [...store.lists, ...lists];
    },
    deleteList(store, id) {
      store.lists = store.lists.filter((x) => x.id !== id);
    },
  },
  actions: {
    setLists(context, lists) {
      context.commit('setTasks', lists.map((x) => x.tasks).flat());
      context.commit('setLists', lists.map((x) => ({ ...x, tasks: x.tasks.map((t) => t.id) })));
    },
    createList(context, createData) {
      ListService.create(createData).then((lists) => {
        context.commit('pushLists', [lists]);
      }).catch(console.error);
    },
    deleteList(context, id) {
      ListService.delete(id).then(() => context.commit('deleteList', id)).catch(console.error);
    },
  },
  getters: {
    listsByProject: (store) => (projectId) => store.lists.filter((x) => x.projectId === projectId),
  },
};
