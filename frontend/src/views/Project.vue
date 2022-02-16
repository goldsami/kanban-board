<script setup>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { useRoute } from 'vue-router';

const q = gql`
  query Project($id: String!) {
    project(id: $id) {
      id
      name
      lists {
        name
        tasks {
          name
        }
      }
    }
  }
`;

const route = useRoute();

const { result, loading } = useQuery(q, {
  id: route.params.id,
});

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
      id: {{route.params.id}}
      res: {{result.project.name}}
      <div v-for="(list, index) in result.project.lists" :key="index">
        list: {{list.name}}
        <div v-for="(task, taskI) in list.tasks" :key="taskI">
          task: {{task.name}}
        </div>
      </div>
    </div>
  </div>
</template>
