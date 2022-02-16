<script setup>
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@vue/apollo-composable';

const q = gql`
  query Projects {
    projects {
      id
      name
    }
  }
`;

const createProjectM = gql`
  mutation CreateTask($data: CreateProjectType!) {
    createProject(data: $data){
      id
      name
    }
  }
`;

const { result, loading } = useQuery(q);

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
    <div v-if="loading" class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
      </div>
    </div>
    <div v-else>
      <a @click="createProject({
          data: {
            name: 'proj-' + Math.random().toFixed(5)
          }
        })">add project</a>
      <div :key="index" v-for="(proj, index) in result.projects"
           @click="() => $router.push(`/projects/${proj.id}`)">
        {{proj.name}}
      </div>
    </div>
  </div>
</template>
