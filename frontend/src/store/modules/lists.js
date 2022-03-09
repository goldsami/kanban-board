import { ListService } from '@/services/list.service';
import {TaskService} from "@/services/task.service";

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
        store.lists[index] = {...store.lists[index], ...list};
      }
    },
    increaseOrderFrom(store, {order, except}) {
      store.lists.filter(x => x.order >= order).forEach((x, index) => {
        if (except !== x.id) {
          store.lists[index] = {...store.lists[index], order: store.lists[index].order + 1}
        }
      })
    }
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
    updateList(context, {id, data}) {
      if ('order' in data) {
        context.commit('upsertList', {id, ...data});
        context.commit('increaseOrderFrom', {order: data.order, except: id})
      }
      ListService.update(id, data).catch(console.error);
    },
  },
  getters: {
    listsByProject: (store) => (projectId) => store.lists.filter((x) => x.projectId === projectId).sort((a, b) => a.order - b.order),
  },
};
