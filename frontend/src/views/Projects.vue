<script setup>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

const q = gql`
  query Projects {
    projects {
      id
      name
    }
  }
`;

const { result, loading } = useQuery(q);

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
      <div :key="index" v-for="(proj, index) in result.projects"
           @click="() => $router.push(`/projects/${proj.id}`)">
        {{proj.name}}
      </div>
    </div>
  </div>
</template>
