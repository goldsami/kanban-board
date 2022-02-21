<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import Loader from '@/components/Loader.vue';
import { ProjectService } from '@/services/project.service';

const { result, loading } = ProjectService.getProjects();

</script>
<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <div class="row">
          <ProjectCard @close="ProjectService.deleteProject({id: proj.id})"
                       :key="index" v-for="(proj, index) in result.projects"
                       @click="() => $router.push(`/projects/${proj.id}`)" :title="proj.name">

          </ProjectCard>
        <ProjectCard title="Add project" type="secondary" @click="ProjectService.createProject({
          data: {
            name: 'proj-' + Math.random().toFixed(5)
          }
        })"></ProjectCard>

      </div>
    </div>
  </div>
</template>

<style>
  .card {
    cursor: pointer;
  }
</style>
