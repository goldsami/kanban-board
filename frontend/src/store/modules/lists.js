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
  },
  actions: {
    setLists(context, lists) {
      context.commit('setTasks', lists.map(x => x.tasks).flat())
      context.commit('setLists', lists.map(x => ({...x, tasks: x.tasks.map(t => t.id)})))
    }
  },
  getters: {
    listsByProject: (store) => (projectId) => {
      return store.lists.filter((x) => x.projectId === projectId);
    },
  },
};
