import { TaskService } from '@/services/task.service';

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
    pushTasks(store, tasks) {
      store.tasks = [...store.tasks, ...tasks];
    },
    deleteTask(store, id) {
      store.tasks = store.tasks.filter((x) => x.id !== id);
    },
  },
  actions: {
    createTask(context, createData) {
      TaskService.create(createData).then((tasks) => {
        context.commit('pushTasks', [tasks]);
      }).catch(console.error);
    },
    deleteTask(context, id) {
      TaskService.delete(id).then(() => context.commit('deleteTask', id)).catch(console.error);
    },
  },
  getters: {
    tasksByList: (store) => (listId) => store.tasks.filter((x) => x.listId === listId),
  },
};
