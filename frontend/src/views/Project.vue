<script setup>
import Loader from '@/components/Loader.vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import List from '@/components/List.vue';

const store = useStore();
const route = useRoute();

const loading = computed(() => store.state.projectsModule.isLoading);
const project = computed(() => store.getters.project(route.params.id));
const lists = computed(() => store.getters.listsByProject(project?.value?.id));

function deleteList(id) {
  store.dispatch('deleteList', id);
}

function createList(createData) {
  store.dispatch('createList', createData);
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
  <div>
    <Loader v-if="loading"></Loader>
    <template v-else>
      <h5>{{ project?.name }}</h5>
      <div class="lists">
        <draggable group="lists" :list="lists" style="display: flex" @change="dragHandle($event)">
          <List :id="list.id" :name="list.name" v-for="list of lists" :order="list.order"></List>
        </draggable>

        <!--      @click="createList({-->
        <!--      name: 'ls-' + Math.random().toFixed(3).toString(),-->
        <!--      projectId: project.id-->
        <!--      })"-->
        <!--      todo: fix styles not to use list classes-->
        <div class="add-list list-footer list">
          <i class="grey-icon material-icons">add</i>
          <span>Add list</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.lists {
  display: flex;
}

.add-list {
  min-height: unset;
  height: fit-content;
}

h5 {
  margin-left: 2rem;
}
</style>
