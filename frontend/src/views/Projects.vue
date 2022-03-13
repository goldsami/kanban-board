<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import Loader from '@/components/Loader.vue';
import {computed, onMounted, ref} from 'vue';
import {useStore} from 'vuex';

import M from 'materialize-css';

const store = useStore();

const showModal = ref(false);

const loading = computed(() => store.state.projectsModule.isLoading);
const projects = computed(() => store.state.projectsModule.projects);

const projectName = ref('');

function deleteProject(id) {
  store.dispatch('deleteProject', id);
}

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
        <ProjectCard @close="deleteProject(proj.id)"
                     :key="index" v-for="(proj, index) in projects"
                     @click="() => $router.push(`/projects/${proj.id}`)" :title="proj.name">

        </ProjectCard>
        <!--        @click="createProject({-->
        <!--        name: 'proj-' + Math.random().toFixed(5)-->
        <!--        })"-->
        <ProjectCard @click="showModal = true" title="Add project" type="secondary"></ProjectCard>

      </div>
    </div>
  </div>

<!--  todo: refactor - move to separate components-->
  <div :class="{active: showModal}" id="modal1" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h4>Create project</h4>
      </div>
      <input placeholder="Project name" v-model="projectName">
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-yellow btn-flat"
         @click="showModal = false">Cancel</a>
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" @click="createProject()">Create</a>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  margin: 2rem;
}
</style>
