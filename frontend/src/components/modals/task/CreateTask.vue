<template>
  <BaseModal :visible="visible" title="Create task">
    <template v-slot:content>
      <input :class="{invalid: v$.taskName.$errors.length}" placeholder="Task name" v-model="taskName" class="validate">
      <span v-for="error of v$.taskName.$errors" :key="error.$uid"
            class="helper-text" :data-error="error.$message" data-success="right">
      </span>
    </template>
    <template v-slot:footer>
      <a href="#!" class="modal-close waves-effect waves-yellow btn-flat"
         @click="visible = false">Cancel</a>
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" @click="create()">Create</a>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/modals/BaseModal';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

export default {
  name: 'CreateTask',
  setup: () => ({ v$: useVuelidate() }),
  props: {
    visible: Boolean,
    listId: String,
  },
  data() {
    return {
      taskName: '',
    };
  },
  validations() {
    return {
      taskName: { required },
    };
  },
  methods: {
    async create() {
      const result = await this.v$.$validate();
      if (!result) return;

      this.$store.dispatch('createTask', {
        name: this.taskName,
        listId: this.listId,
      });

      this.taskName = '';
      this.$emit('close');
    },
  },
  components: { BaseModal },
};
</script>

<style scoped>

</style>
