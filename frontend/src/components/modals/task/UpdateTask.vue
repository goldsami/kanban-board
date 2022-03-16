<template>
  <BaseModal :visible="visible" title="Update task">
    <template v-slot:content>
      <input :class="{invalid: v$.taskName.$errors.length}" placeholder="Task name" v-model="taskName" class="validate">
      <span v-for="error of v$.taskName.$errors" :key="error.$uid"
            class="helper-text" :data-error="error.$message" data-success="right">
      </span>
    </template>
    <template v-slot:footer>
      <a href="#!" class="modal-close waves-effect waves-yellow btn-flat"
         @click="visible = false">Cancel</a>
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" @click="update()">Update</a>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/modals/BaseModal';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

export default {
  name: 'UpdateTask',
  setup: () => ({ v$: useVuelidate() }),
  props: {
    visible: Boolean,
    id: String,
    taskName: String,
  },
  validations() {
    return {
      taskName: { required },
    };
  },
  methods: {
    async update() {
      const result = await this.v$.$validate();
      if (!result) return;

      this.$store.dispatch('updateTask', {
        id: this.id,
        data: {
          name: this.taskName,
        },
      });

      this.$emit('close');
    },
  },
  components: { BaseModal },
};
</script>

<style scoped>

</style>
