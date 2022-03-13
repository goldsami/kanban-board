<template>
  <div class="col s6 m3">
    <div class="card"
         :class="{'teal lighten-5': type === 'primary', 'blue lighten-5': type === 'secondary'}">
      <a v-if="type === 'primary'" @click.stop="this.$emit('close')"
         class="close-btn btn-small btn-floating waves-effect waves-light red">
        <i class="material-icons">clear</i></a>
      <div class="card-content">
        <span class="card-title">{{title}} </span>

        <p>{{description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: String,
    description: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style scoped>
  .close-btn {
    opacity: 0;
    position: absolute;
    right: 3px;
    top: 3px;
    transition: opacity 500ms;
  }

  .card-title {
    color: black;
  }

  .card-content {
    cursor: pointer;
  }

  .card:hover .close-btn {
    opacity: 1;
  }
</style>
