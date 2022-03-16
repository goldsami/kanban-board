<template>
  <div class="task z-depth-1">
    {{name}}
    <i class="material-icons" ref="dropdownTrigger" :data-target='"dropdown-" + id'>more_vert</i>
  </div>
  <ul :id='"dropdown-" + id' class='dropdown-content'>
    <li><a @click="showUpdateModal = true" href="#!">Update</a></li>
    <li><a @click="deleteTask" href="#!">Delete</a></li>
  </ul>

  <UpdateTask :visible="showUpdateModal" :id="id" :taskName="name" @close="showUpdateModal = false"></UpdateTask>
</template>

<script>
import M from 'materialize-css';
import UpdateTask from '@/components/modals/task/UpdateTask';

export default {
  name: 'Task',
  components: { UpdateTask },
  props: {
    id: String,
    name: String,
    order: Number,
  },
  data() {
    return {
      showUpdateModal: false,
    };
  },
  methods: {
    deleteTask() {
      this.$store.dispatch('deleteTask', this.id);
    },
  },
  mounted() {
    M.Dropdown.init(this.$refs.dropdownTrigger);
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
