<template>
  <div class="list">
    <b>{{name}}</b><span @click="deleteList" style="padding: 5px">X</span><br>
    <draggable group="tasks" :list="tasks" @change="dragHandle($event)">
      <Task v-for="task of tasks" :id="task.id" :name="task.name"></Task>
    </draggable>
    <button @click="createTask({
    name: `tsk-${Math.random().toFixed(3).toString()}`,
    listId: id
    })"> + </button>
  </div>
</template>

<script>
import Task from '@/components/Task.vue';

export default {
  name: 'List',
  components: { Task },
  props: {
    id: String,
    name: String,
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksByList(this.id);
    },
  },
  methods: {
    createTask(createData) {
      this.$store.dispatch('createTask', createData);
    },
    deleteList() {
      this.$store.dispatch('deleteList', this.id);
    },
    addTask(taskId) {
      this.$store.dispatch('updateTask', { id: taskId, data: { listId: this.id } });
    },
    dragHandle(event) {
      if (event.added) {
        this.addTask(event.added.element.id);
      }
    },
  },
};
</script>

<style scoped>
  .list {
    width: 200px;
    min-height: 50px;
    background-color: lightgray;
    margin: 10px;
  }
</style>
