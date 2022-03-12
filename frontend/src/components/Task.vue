<template>
  <div class="task z-depth-1">
    {{name}}
<!--    <span @click="deleteTask" style="padding: 5px">X</span>-->
    <i class="material-icons">more_vert</i>
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
    margin: 10px 0;
    cursor: pointer;
    position: relative;
  }

  .task i {
    position: absolute;
    top: 4px;
    right: 1px;
    display: none;
  }

  .task:hover i {
    display: block;
  }
</style>
