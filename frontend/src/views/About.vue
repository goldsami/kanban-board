<template>
  <div>
    <draggable  style="display: flex" :list="lists" @change="log($event, 'tst')" group="lsts">
      <div class="list" v-for="list of lists">
        <draggable
          :list="list.data"
          @change="log($event, list.name)"
          group="people"
        >
          <div
            class="list-group-item"
            v-for="element in list.data"
            :key="element.name"
          >
            {{ element.name }}
          </div> </draggable
        >
      </div>
    </draggable>

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
      lists: [
        {
          name: 'list1',
          data: [
            { name: 'John', id: 1 },
            { name: 'Joao', id: 2 },
            { name: 'Jean', id: 3 },
            { name: 'Gerard', id: 4 },
          ],
        },
        {
          name: 'list2',
          data: [
            { name: 'John1', id: 11 },
            { name: 'Joao1', id: 21 },
            { name: 'Jean1', id: 31 },
            { name: 'Gerard1', id: 41 },
          ],
        },
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
