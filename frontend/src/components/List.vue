<template>
  <div class="list">
    <div class="list-header">
      <b class="list-name">{{name}}</b>
      <i class="material-icons" ref="dropdownTrigger" :data-target='"dropdown-" + id'>more_vert</i>
    </div>
    <ul :id='"dropdown-" + id' class='dropdown-content'>
      <li><a @click="showUpdateModal = true" href="#!">Update</a></li>
      <li><a @click="deleteList" href="#!">Delete</a></li>
    </ul>
    <draggable class="tasks" group="tasks" :list="tasks" @change="dragHandle($event)">
      <Task v-for="task of tasks" :id="task.id" :name="task.name" :order="task.order"></Task>
    </draggable>

    <div class="list-footer" @click="toggleCreateTaskModal()">
      <i class="grey-icon material-icons">add</i>
      <span>Add task</span>
    </div>
  </div>

  <CreateTask :visible="showCreateTaskModal" :listId="id" @close="showCreateTaskModal = false"
  />
  <UpdateList :visible="showUpdateModal" :id="id" :listName="name" @close="showUpdateModal = false"></UpdateList>
</template>

<script>
import Task from '@/components/Task.vue';
import CreateTask from '@/components/modals/task/CreateTask';
import M from 'materialize-css';
import UpdateList from '@/components/modals/list/UpdateList';

export default {
  name: 'List',
  components: { UpdateList, CreateTask, Task },
  props: {
    id: String,
    name: String,
    order: Number,
  },
  data() {
    return {
      showCreateTaskModal: false,
      showUpdateModal: false,
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.tasksByList(this.id);
    },
  },
  mounted() {
    M.Dropdown.init(this.$refs.dropdownTrigger);
  },
  methods: {
    toggleCreateTaskModal() {
      this.showCreateTaskModal = !this.showCreateTaskModal;
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
    min-width: 250px;
    min-height: 50px;
    background-color: #eaeaea;
    margin: 10px;
    padding: 5px 10px;
    height: fit-content;
    max-height: 95%;
    display: flex;
    flex-direction: column;
  }

  .list-header, .list-footer {
    display: flex;
    align-items: center;
  }

  .tasks {
    overflow-y: auto;
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
