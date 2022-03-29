<template>
  <BaseModal :visible="visible" title="Update list">
    <template v-slot:content>
      <input :class="{invalid: v$.listName.$errors.length}"
             placeholder="List name" v-model="listName" class="validate">
      <span v-for="error of v$.listName.$errors" :key="error.$uid"
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
  name: 'UpdateList',
  setup: () => ({ v$: useVuelidate() }),
  props: {
    visible: Boolean,
    id: String,
    listName: String,
  },
  validations() {
    return {
      listName: { required },
    };
  },
  methods: {
    async update() {
      const result = await this.v$.$validate();
      if (!result) return;

      this.$store.dispatch('updateList', {
        id: this.id,
        data: {
          name: this.listName,
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
