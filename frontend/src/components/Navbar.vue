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
          <li>
            {{store.user?.name}}
          </li>
          <li><router-link to="/logout">Logout</router-link></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { store } from '@/store';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .nav-wrapper {
   margin-left: 15px;
 }
</style>
