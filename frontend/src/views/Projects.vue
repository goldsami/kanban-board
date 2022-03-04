<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import Loader from '@/components/Loader.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const loading = computed(() => store.state.projectsModule.isLoading);
const projects = computed(() => store.state.projectsModule.projects);

function deleteProject(id) {
  store.dispatch('deleteProject', id);
}
function createProject(createData) {
  store.dispatch('createProject', createData);
}

onMounted(() => {
  store.dispatch('getProjects');
});

</script>
<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <div class="row">
          <ProjectCard @close="deleteProject(proj.id)"
                       :key="index" v-for="(proj, index) in projects"
                       @click="() => $router.push(`/projects/${proj.id}`)" :title="proj.name">

          </ProjectCard>
        <ProjectCard title="Add project" type="secondary" @click="createProject({
            name: 'proj-' + Math.random().toFixed(5)
          })"></ProjectCard>

      </div>
    </div>
  </div>
</template>

<style>
</style>
