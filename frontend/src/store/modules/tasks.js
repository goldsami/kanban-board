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
    upsertTask(store, task) {
      const index = store.tasks.findIndex((x) => x.id === task.id);
      if (!(index + 1)) {
        store.tasks.push(task);
      } else {
        store.tasks[index] = { ...store.tasks[index], ...task };
      }
    },
    deleteTask(store, id) {
      store.tasks = store.tasks.filter((x) => x.id !== id);
    },
  },
  actions: {
    createTask(context, createData) {
      TaskService.create(createData).then((task) => {
        context.commit('upsertTask', task);
      }).catch(console.error);
    },
    deleteTask(context, id) {
      TaskService.delete(id).then(() => context.commit('deleteTask', id)).catch(console.error);
    },
    updateTask(context, { id, data }) {
      if ('listId' in data) {
        context.commit('upsertTask', { id, ...data });
      }
      TaskService.update(id, data).then((task) => {
        console.log('task', task);
      }).catch(console.error);
    },
  },
  getters: {
    tasksByList: (store) => (listId) => store.tasks.filter((x) => x.listId === listId),
  },
};
