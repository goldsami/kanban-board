<template>
  <div style="display: flex">
    <div class="list">
      <draggable
        :list="list"
        @change="log($event, 'list1')"
        group="people"
      >
        <div
          class="list-group-item"
          v-for="element in list"
          :key="element.name"
        >
          {{ element.name }}
        </div> </draggable
      >
    </div>
    <div class="list">
      <draggable
        :list="list2"
        @change="log($event, 'list2')"
        group="people"
      >
        <div
          class="list-group-item"
          v-for="element in list2"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

export default defineComponent({
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: 'John', id: 1 },
        { name: 'Joao', id: 2 },
        { name: 'Jean', id: 3 },
        { name: 'Gerard', id: 4 },
      ],
      list2: [
        { name: 'John1', id: 11 },
        { name: 'Joao1', id: 21 },
        { name: 'Jean1', id: 31 },
        { name: 'Gerard1', id: 41 },
      ],
      dragging: false,
    };
  },
  methods: {
    log(event, list) {
      console.log({ event, list });
    },
  },
});
</script>

<style>
.list {
  border: 1px solid black;
  padding: 6px;
  margin: 6px;
  background: grey;
}

.list-group-item {
  padding: 24px;
  margin: 6px;
  border: 1px solid gray;
  background: white;
  min-width: 300px;
  /*cursor: pointer;*/
}

.sortable-ghost {
  background: red;
}

[group] {
  height: 100%;
}
</style>
