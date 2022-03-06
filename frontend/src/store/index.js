import { createStore } from 'vuex';
import { authModule } from '@/store/modules/auth';
import { projectsModule } from '@/store/modules/projects';
import { listsModule } from '@/store/modules/lists';
import { tasksModule } from '@/store/modules/tasks';

export const store = createStore({
  modules: {
    authModule,
    projectsModule,
    listsModule,
    tasksModule,
  },
});
