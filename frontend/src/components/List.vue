<template>
  <div class="list">
    <div class="list-header">
      <b class="list-name">{{name}}</b>
      <i class="material-icons" @click="deleteList">clear</i>
    </div>
    <draggable group="tasks" :list="tasks" @change="dragHandle($event)">
      <Task v-for="task of tasks" :id="task.id" :name="task.name" :order="task.order"></Task>
    </draggable>

    <div class="list-footer" @click="createTask({
    name: `tsk-${Math.random().toFixed(3).toString()}`,
    listId: id
    })">
      <i class="material-icons">add</i>
      <span>Add task</span>
    </div>
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
    order: Number,
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
    updateTask(id, data) {
      this.$store.dispatch('updateTask', { id, data });
    },
    addTask(taskId, order) {
      this.updateTask(taskId, { listId: this.id, order });
    },
    moveTask(taskId, order) {
      this.updateTask(taskId, { order });
    },
    dragHandle(event) {
      if (event.added) {
        // TODO: refactor
        this.addTask(event.added.element.id, (this.tasks[event.added.newIndex + 1]?.order || 0) + 1);
      } else if (event.moved) {
        this.moveTask(event.moved.element.id, (this.tasks[event.moved.newIndex + 1]?.order || 0) + 1);
      }
    },
  },
};
</script>

<style>
  .list {
    width: 250px;
    min-height: 50px;
    background-color: #eaeaea;
    margin: 10px;
    padding: 5px 10px;
  }

  .list-header, .list-footer {
    display: flex;
    align-items: center;
  }

  .list-header {
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .list-footer {
    cursor: pointer;
  }

  .list-footer:hover {
    background-color: #dcdcdc;
  }

  i, span {
    color: grey;
    cursor: pointer;
  }
</style>
