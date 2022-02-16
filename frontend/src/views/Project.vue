<script setup>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { useRoute } from 'vue-router';

const q = gql`
  query Project($id: id!) {
    project(id: $id {
      id
      name
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
      res: {{JSON.stringify(result)}}
    </div>
  </div>
</template>
