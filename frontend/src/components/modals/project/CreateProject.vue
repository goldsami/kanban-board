<template>
  <BaseModal :visible="visible" title="Create project">
    <template v-slot:content>
      <input :class="{invalid: v$.projectName.$errors.length}"
             placeholder="Project name" v-model="projectName" class="validate">
      <span v-for="error of v$.projectName.$errors" :key="error.$uid"
            class="helper-text" :data-error="error.$message" data-success="right">
      </span>
    </template>
    <template v-slot:footer>
      <a @click="$emit('close')">Cancel</a>
      <a href="#!" class="modal-close waves-effect waves-green btn-flat" @click="create()">
        Create
      </a>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/modals/BaseModal.vue';
import { required } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

export default {
  name: 'CreateProject',
  setup: () => ({ v$: useVuelidate() }),
  props: {
    visible: Boolean,
    listId: String,
  },
  data() {
    return {
      projectName: '',
    };
  },
  validations() {
    return {
      projectName: { required },
    };
  },
  methods: {
    async create() {
      const result = await this.v$.$validate();
      if (!result) return;

      this.$store.dispatch('createProject', {
        name: this.projectName,
      });

      this.$emit('close');
    },
  },
  components: { BaseModal },
};
</script>

<style scoped>

</style>
