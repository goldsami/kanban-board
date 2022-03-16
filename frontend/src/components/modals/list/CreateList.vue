<template>
  <BaseModal :visible="visible" title="Create list">
    <template v-slot:content>
      <input :class="{invalid: v$.listName.$errors.length}" placeholder="List name" v-model="listName" class="validate">
      <span v-for="error of v$.listName.$errors" :key="error.$uid"
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
  name: 'CreateList',
  setup: () => ({ v$: useVuelidate() }),
  props: {
    visible: Boolean,
    listId: String,
  },
  data() {
    return {
      listName: '',
    };
  },
  validations() {
    return {
      listName: { required },
    };
  },
  methods: {
    async create() {
      const result = await this.v$.$validate();
      if (!result) return;

      this.$store.dispatch('createList', {
        name: this.listName,
        listId: this.listId,
      });

      this.listName = ''
      this.$emit('close');
    },
  },
  components: { BaseModal },
};
</script>

<style scoped>

</style>
