<template>
  <div :class="{active: visible}" id="modal1" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h4>{{title}}</h4>
      </div>
      <slot name="content"></slot>
    </div>
    <div class="modal-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    visible: Boolean,
    title: String,
  },
};
</script>

<style scoped>

</style>
