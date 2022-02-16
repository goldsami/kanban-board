<script setup>
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@vue/apollo-composable';
import { useRoute } from 'vue-router';

const q = gql`
  query Project($id: String!) {
    project(id: $id) {
      id
      name
      lists {
        id
        name
        tasks {
          id
          name
        }
      }
    }
  }
`;

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

const { result, loading } = useQuery(q, {
  id: route.params.id,
});

const { mutate: createTask } = useMutation(createTaskM);
const { mutate: deleteTask } = useMutation(deleteTaskM);

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
        <button
          @click="createTask({
          data: {listId: list.id, name: 'task' + Math.random().toFixed(4)}
          })">
          create task </button>
        <div v-for="(task, taskI) in list.tasks" :key="taskI">
          task: {{task.name}} <a @click="deleteTask({id: task.id})">&times;</a>
        </div>
      </div>
    </div>
  </div>
</template>
