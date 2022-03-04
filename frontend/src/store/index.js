import { createStore } from 'vuex';
import { authModule } from '@/store/modules/auth';
import { projectsModule } from '@/store/modules/projects';

export const store = createStore({
  modules: {
    authModule,
    projectsModule,
  },
});
