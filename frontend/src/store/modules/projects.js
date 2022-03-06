import { ProjectService } from '@/services/project.service';

export const projectsModule = {
  state() {
    return {
      projects: [],
      isLoading: false,
    };
  },
  mutations: {
    setProjects(store, projects) {
      store.projects = projects;
    },
    setProjectsLoading(store, value) {
      store.isLoading = value;
    },
    pushProjects(store, projects) {
      store.projects = [...store.projects, ...projects];
    },
    deleteProject(store, id) {
      store.projects = store.projects.filter((x) => x.id !== id);
    },
  },
  actions: {
    getProjects(context) {
      context.commit('setProjectsLoading', true);
      ProjectService.getProjects().then((projects) => {
        context.commit('setProjects', projects);
      }).finally(() => context.commit('setProjectsLoading', false));
    },
    getProject(context, id) {
      context.commit('setProjectsLoading', true);
      ProjectService.getProject(id).then((project) => {
        context.dispatch('setLists', project.lists);
        context.commit('pushProjects', [{ ...project, lists: project.lists.map((x) => x.id) }]);
      }).finally(() => context.commit('setProjectsLoading', false));
    },
    createProject(context, createData) {
      ProjectService.createProject(createData).then((project) => {
        context.commit('pushProjects', [project]);
      }).catch(console.error);
    },
    deleteProject(context, id) {
      ProjectService.deleteProject(id).then(() => context.commit('deleteProject', id)).catch(console.error);
    },
  },
  getters: {
    project: (state) => (id) => state.projects.find((projects) => projects.id === id),
  },
};
