<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import Loader from '@/components/Loader.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

import M from 'materialize-css';
import CreateProject from '@/components/modals/project/CreateProject';

const store = useStore();

const showModal = ref(false);

const loading = computed(() => store.state.projectsModule.isLoading);
const projects = computed(() => store.state.projectsModule.projects);

const projectName = ref('');

function createProject() {
  store.dispatch('createProject', {
    name: projectName.value,
  });
  showModal.value = !showModal.value;
}

onMounted(() => {
  store.dispatch('getProjects');
});

</script>
<template>
  <div class="projects-container">
    <h4>Your projects</h4>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <div class="row">
        <ProjectCard
                     :key="index" v-for="(proj, index) in projects"
                     @click="() => $router.push(`/projects/${proj.id}`)" :id="proj.id" :title="proj.name">

        </ProjectCard>
        <div class="card col s6 m3 add-project" @click="showModal=true">
          <i class="medium material-icons">add</i>
        </div>

      </div>
    </div>
  </div>

  <CreateProject :visible="showModal"></CreateProject>
</template>

<style scoped>
.projects-container {
  margin: 2rem;
}

.add-project {
  width: fit-content !important;
  margin-left: 0.75rem !important;
  background-color: lightgray;
}

.add-project i {
  padding: 16px;
}
</style>
