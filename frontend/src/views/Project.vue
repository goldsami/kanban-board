<script setup>
import Loader from '@/components/Loader.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import List from '@/components/List.vue';

const store = useStore();
const route = useRoute();

const showModal = ref(false);

const loading = computed(() => store.state.projectsModule.isLoading);
const project = computed(() => store.getters.project(route.params.id));
const lists = computed(() => store.getters.listsByProject(project?.value?.id));

function deleteList(id) {
  store.dispatch('deleteList', id);
}

const listName = ref('');

function createList() {
  store.dispatch('createList', {
    name: listName.value,
    projectId: project.value.id,
  });
  showModal.value = false;
}

function updateList(id, data) {
  store.dispatch('updateList', { id, data });
}

function dragHandle(event) {
  const newOrder = lists.value[event.moved.newIndex + 1]?.order || (lists.value[lists.value.length - 2].order + 1);
  updateList(event.moved.element.id, { order: newOrder });
}

onMounted(() => {
  store.dispatch('getProject', route.params.id);
});

</script>

<template>
  <div style="height: 100%">
    <Loader v-if="loading"></Loader>
    <template v-else>
      <h5 class="project-name">{{ project?.name }}</h5>
      <div class="lists">
        <draggable group="lists" :list="lists" style="display: flex" @change="dragHandle($event)">
          <List :id="list.id" :name="list.name" v-for="list of lists" :order="list.order"></List>
        </draggable>

        <!--      todo: fix styles not to use list classes-->
        <div class="add-list list-footer list" @click="showModal=true">
          <i class="grey-icon material-icons">add</i>
          <span>Add list</span>
        </div>
      </div>
    </template>
  </div>

  <div :class="{active: showModal}" id="modal1" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h4>Create list</h4>
      </div>
      <input placeholder="List name" v-model="listName">
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-yellow btn-flat"
         @click="showModal = false">Cancel</a>
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" @click="createList()">Create</a>
    </div>
  </div>
</template>

<style scoped>
.lists {
  display: flex;
  overflow-x: scroll;
  height: calc(100% - 50px);
}

.project-name {
  padding: 16px 0 8px 2rem;
  margin: 0;
}

.add-list {
  min-height: unset;
  height: fit-content;
  display: flex;
  flex-direction: row;
}
</style>
