<template>
  <nav id="nav" class="teal lighten-2">
    <div class="nav-wrapper">
      <router-link class="brand-logo" to="/">Kanban board</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <template v-if="!isAuthenticated">
          <li><router-link to="/login">Log in</router-link></li>
          <li>
            <router-link class="waves-effect waves-light btn teal" to="/signup">
              Sign up</router-link>
          </li>
        </template>
        <li v-show="isAuthenticated">
          <a class="dropdown-trigger" ref="dropdownTrigger"
             data-target="dropdown1">{{user?.name}}</a>
          <ul id='dropdown1' class='dropdown-content'>
            <li><a @click="logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import M from 'materialize-css';
import {
  computed, onMounted, ref,
} from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isAuthenticated = computed(() => store.getters.isAuthenticated);
const user = computed(() => store.state.authModule.user);

function logout() {
  store.dispatch('logout');
  location.reload();
}

const dropdownTrigger = ref(null);

onMounted(() => {
  M.Dropdown.init(dropdownTrigger);
});

</script>

<style scoped>
 .nav-wrapper {
   margin-left: 15px;
 }
</style>
