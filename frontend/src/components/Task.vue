<template>
  <div class="task z-depth-1">
    {{name}}
    <i class="material-icons" ref="dropdownTrigger" :data-target='"dropdown-" + id'>more_vert</i>
  </div>
  <ul :id='"dropdown-" + id' class='dropdown-content'>
    <li><a @click="deleteTask" href="#!">Delete</a></li>
  </ul>
</template>

<script>
import M from 'materialize-css';

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
  mounted() {
    M.Dropdown.init(this.$refs.dropdownTrigger)
  }
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
