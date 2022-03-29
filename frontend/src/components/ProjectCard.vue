<template>
  <div class="col s6 m3"
       @click="() => $router.push(`/projects/${id}`)">
    <div class="card teal lighten-5">
      <a @click.stop ref="dropdownTrigger" :data-target='"dropdown-" + id'
         class="close-btn btn-small btn-floating waves-effect waves-light grey">
        <i class="material-icons">more_vert</i></a>
      <ul :id='"dropdown-" + id' class='dropdown-content'>
        <li><a @click="showUpdateModal = true" href="#!">Update</a></li>
        <li><a @click="deleteProject()" href="#">Delete</a></li>
      </ul>
      <div class="card-content">
        <span class="card-title truncate">{{title}} </span>

        <p>{{description}}</p>
      </div>
    </div>
  </div>

  <UpdateProject :id="id" :visible="showUpdateModal" :projectName="title"></UpdateProject>
</template>

<script>
import UpdateProject from '@/components/modals/project/UpdateProject';
import M from 'materialize-css';

export default {
  name: 'ProjectCard',
  components: { UpdateProject },
  props: {
    title: String,
    description: String,
    id: String,
  },
  data() {
    return {
      showUpdateModal: false,
    };
  },
  mounted() {
    M.Dropdown.init(this.$refs.dropdownTrigger);
  },
  methods: {
    deleteProject() {
      this.$store.dispatch('deleteProject', this.id);
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
