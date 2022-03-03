<template>
  <nav id="nav" class="teal lighten-2">
    <div class="nav-wrapper">
      <router-link class="brand-logo" to="/">Kanban board</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <template v-if="!store1.isAuthenticated">
          <li><router-link to="/login">Log in</router-link></li>
          <li>
            <router-link class="waves-effect waves-light btn teal" to="/signup">
              Sign up</router-link>
          </li>
        </template>
        <template v-else>
          <li @click.prevent>
            <a @click.stop="showDropdown = !showDropdown">{{store1.user?.name}}</a>
            <ul v-if="showDropdown" v-click-outside="hideDropdown"
                id='dropdown1' class='dropdown-content'>
              <li><router-link to="/logout">Logout</router-link></li>
            </ul>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { store1 } from '@/store1';
import { ref } from 'vue';

const showDropdown = ref(false);

const hideDropdown = () => {
  showDropdown.value = false;
};
</script>

<style scoped>
 .nav-wrapper {
   margin-left: 15px;
 }

 .dropdown-content {
   display: block;
   opacity: 1;
   position: relative;
 }
</style>
