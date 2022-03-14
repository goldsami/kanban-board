<template>
  <div class="list">
    <div class="list-header">
      <b class="list-name">{{name}}</b>
      <i class="grey-icon material-icons" @click="deleteList">clear</i>
    </div>
    <draggable group="tasks" :list="tasks" @change="dragHandle($event)">
      <Task v-for="task of tasks" :id="task.id" :name="task.name" :order="task.order"></Task>
    </draggable>

    <div class="list-footer" @click="showModal = true">
      <i class="grey-icon material-icons">add</i>
      <span>Add task</span>
    </div>
  </div>

  <div :class="{active: showModal}" id="modal1" class="modal">
    <div class="modal-content" :class="{ error: v$.taskName.$errors.length }">
      <div class="modal-header">
        <h4>Create task</h4>
      </div>
      <input :class="{invalid: v$.taskName.$errors.length}" placeholder="Task name" v-model="taskName" class="validate">
      <span v-for="error of v$.taskName.$errors" :key="error.$uid"
            class="helper-text" :data-error="error.$message" data-success="right">
      </span>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-yellow btn-flat"
         @click="showModal = false">Cancel</a>
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" @click="createTask()">Create</a>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task.vue';
import useVuelidate from "@vuelidate/core";
import {required} from "@vuelidate/validators";

export default {
  name: 'List',
  components: { Task },
  setup: () => ({v$: useVuelidate()}),
  props: {
    id: String,
    name: String,
    order: Number,
  },
  data() {
    return {
      showModal: false,
      taskName: '',
    }
  },
  validations() {
    return {
      taskName: {required}
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksByList(this.id);
    },
  },
  methods: {
    async createTask() {
      const result = await this.v$.$validate()
      if (!result) return;

      this.$store.dispatch('createTask', {
        name: this.taskName,
        listId: this.id,
      });
      this.showModal = false
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
    height: fit-content;
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

  .grey-icon, span {
    color: grey;
    cursor: pointer;
  }
</style>
