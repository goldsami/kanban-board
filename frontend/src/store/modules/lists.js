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
    // TODO: move upsert and increase order to separate file and reuse it in tasks
    upsertList(store, list) {
      const index = store.lists.findIndex((x) => x.id === list.id);
      if (!(index + 1)) {
        store.lists.push(list);
      } else {
        store.lists[index] = { ...store.lists[index], ...list };
      }
    },
  },
  actions: {
    setLists(context, lists) {
      context.commit('setTasks', lists.map((x) => x.tasks).flat());
      context.commit('setLists', lists.map((x) => ({ ...x, tasks: x.tasks.map((t) => t.id) })));
    },
    getLists(context, projectId) {
      ListService.get(projectId).then((lists) => lists.forEach((l) => context.commit('upsertList', l))).catch(console.error);
    },
    createList(context, createData) {
      ListService.create(createData).then((lists) => {
        context.commit('pushLists', [lists]);
      }).catch(console.error);
    },
    deleteList(context, id) {
      ListService.delete(id).then(() => context.commit('deleteList', id)).catch(console.error);
    },
    updateList(context, { id, data }) {
      context.commit('upsertList', { id, ...data });

      ListService.update(id, data).then((list) => context.dispatch('getLists', list.projectId)).catch(console.error);
    },
  },
  getters: {
    listsByProject: (store) => (projectId) => store.lists.filter((x) => x.projectId === projectId).sort((a, b) => a.order - b.order),
  },
};
