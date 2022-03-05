export const tasksModule = {
  state() {
    return {
      tasks: [],
    };
  },
  mutations: {
    setTasks(store, tasks) {
      store.tasks = tasks;
    },
  },
  getters: {
    tasksByList: (store) => (listId) => {
      return store.tasks.filter((x) => x.listId === listId);
    },
  },
};
