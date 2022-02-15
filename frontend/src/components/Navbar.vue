<template>
  <nav id="nav" class="teal lighten-2">
    <div class="nav-wrapper">
      <router-link class="brand-logo" to="/">Kanban board</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <template v-if="!store.isAuthenticated">
          <li><router-link to="/login">Log in</router-link></li>
          <li>
            <router-link class="waves-effect waves-light btn teal" to="/login">Sign up</router-link>
          </li>
        </template>
        <template v-else>
          <li
              @focusout="showDropdown=false"
              tabindex="0">
            <a
              @click="showDropdown=true" class="dropdown-trigger" href="#!" data-target="dropdown1">
              {{store.user.name}}
            </a>
            <ul v-if="showDropdown" id="dropdown1" class="dropdown-content">
              <li><router-link href="/logout">Logout</router-link></li>
            </ul>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { store } from '@/store';
import { ref } from 'vue';

const showDropdown = ref(false);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
