<script setup>
import gql from 'graphql-tag';
import Loader from '@/components/Loader.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

const store = useStore();

const createTaskM = gql`
  mutation CreateTask($data: CreateTaskType!) {
    createTask(data: $data){
      id
      name
    }
  }
`;

const deleteTaskM = gql`
  mutation DeleteTask($id: String!) {
    deleteTask(id: $id){
      id
      name
    }
  }
`;

const route = useRoute();

const loading = computed(() => store.state.projectsModule.isLoading);
const project = computed(() => store.getters.project(route.params.id));
const lists = computed(() => store.getters.listsByProject(project?.value?.id));

onMounted(() => {
  store.dispatch('getProject', route.params.id);
});

</script>
<template>
  <div>
    Project:
    <Loader v-if="loading"></Loader>
    <div v-else>Proj: {{JSON.stringify(project)}}</div>
    Lists:
    <div v-for="list of lists">{{list.name}}</div>
  </div>
</template>
