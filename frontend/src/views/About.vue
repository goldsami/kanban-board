<template>
  <div class="flex m-10">
    <draggable
      class="dragArea list-group w-full"
      :list="list"
      @change="log"
      group="people"
    >
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        v-for="element in list"
        :key="element.name"
      >
        {{ element.name }}
      </div> </draggable
    ><draggable
      class="dragArea list-group w-full"
      :list="list2"
      @change="log"
      group="people"
    >
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        v-for="element in list2"
        :key="element.name"
      >
        {{ element.name }}
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
    log(event) {
      console.log(event);
    },
  },
});
</script>
