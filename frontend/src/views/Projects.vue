<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import Loader from '@/components/Loader.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import CreateProject from '@/components/modals/project/CreateProject.vue';

const store = useStore();

const showModal = ref(false);

const loading = computed(() => store.state.projectsModule.isLoading);
const projects = computed(() => store.state.projectsModule.projects);

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
        <ProjectCard :key="index" v-for="(proj, index) in projects"
                     :id="proj.id" :title="proj.name">
        </ProjectCard>
        <div class="col add-project" @click="showModal=true">
          <i class="medium material-icons">add</i>
        </div>

      </div>
    </div>
  </div>

  <CreateProject :visible="showModal" @close="showModal=false"></CreateProject>
</template>

<style scoped>
.projects-container {
  margin: 2rem;
}

.add-project {
  width: fit-content;
  margin: 8px;
}

.add-project i {
  padding: 16px;
  transition: background-color 200ms;
  border-radius: 50%;
}

.add-project:hover i {
  background-color: lightblue;
}
</style>
