<script setup>
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@vue/apollo-composable';
import ProjectCard from '@/components/ProjectCard.vue';
import Loader from '@/components/Loader.vue';

const q = gql`
  query Projects {
    projects {
      id
      name
    }
  }
`;

const createProjectM = gql`
  mutation CreateProject($data: CreateProjectType!) {
    createProject(data: $data){
      id
      name
    }
  }
`;

const deleteProjM = gql`
  mutation DeleteProject($id: String!) {
    deleteProject(id: $id){
      id
      name
    }
  }
`;

const { result, loading } = useQuery(q);
const { mutate: deleteProject } = useMutation(deleteProjM, () => ({
  update: (cache, { data }) => {
    const list = cache.readQuery({ query: q });
    cache.writeQuery({
      query: q,
      data: {
        projects: list.projects.filter((x) => x.id !== data.deleteProject.id),
      },
    });
  },
}));
const { mutate: createProject } = useMutation(createProjectM, () => ({
  // variables: {
  //   text: newMessage.value,
  // },
  update: (cache, { data }) => {
    const list = cache.readQuery({ query: q });
    // console.log('update', data.createProject, list);
    cache.writeQuery({
      query: q,
      data: {
        projects: [...list.projects, data.createProject],
      },
    });
  },
}));

</script>
<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else>
      <div class="row">
          <ProjectCard @close="deleteProject({id: proj.id})"
                       :key="index" v-for="(proj, index) in result.projects"
                       @click="() => $router.push(`/projects/${proj.id}`)" :title="proj.name">

          </ProjectCard>
        <ProjectCard title="Add project" type="secondary" @click="createProject({
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
