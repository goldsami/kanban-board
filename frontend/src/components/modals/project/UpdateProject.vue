<template>
  <BaseModal :visible="visible" title="Update project">
    <template v-slot:content>
      {{id}}
      <input :class="{invalid: v$.projectName.$errors.length}"
             placeholder="Project name" v-model="projectName" class="validate">
      <span v-for="error of v$.projectName.$errors" :key="error.$uid"
            class="helper-text" :data-error="error.$message" data-success="right">
      </span>
    </template>
    <template v-slot:footer>
      <a href="#!" class="modal-close waves-effect waves-yellow btn-flat"
         @click="$emit('close')">Cancel</a>
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" @click="update()">
        Update
      </a>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/modals/BaseModal.vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

export default {
  name: 'UpdateProject',
  setup: () => ({ v$: useVuelidate() }),
  props: {
    visible: Boolean,
    id: String,
    projectName: String,
  },
  validations() {
    return {
      projectName: { required },
    };
  },
  methods: {
    async update() {
      const result = await this.v$.$validate();
      if (!result) return;

      this.$store.dispatch('updateProject', {
        id: this.id,
        data: {
          name: this.projectName,
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
