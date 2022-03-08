<template>
  <div class="task">
    {{order}}::{{name}}
    <span @click="deleteTask" style="padding: 5px">X</span>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    id: String,
    name: String,
    order: Number,
  },
  methods: {
    deleteTask() {
      this.$store.dispatch('deleteTask', this.id);
    },
  },
};
</script>

<style scoped>
  .task {
    min-height: 25px;
    background-color: white;
    padding: 10px;
    margin: 10px;
  }
</style>
