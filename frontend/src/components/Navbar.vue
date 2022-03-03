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
          <li>
            <a class="dropdown-trigger" ref="dropdownTrigger"
               data-target="dropdown1">{{store1.user?.name || 'drop'}}</a>
            <ul id='dropdown1' class='dropdown-content'>
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
import M from 'materialize-css';
import {onMounted, ref} from "vue";

const dropdownTrigger = ref(null)
onMounted(() => {
  console.log('on mount', dropdownTrigger)
  M.Dropdown.init(dropdownTrigger)
})

</script>

<style scoped>
 .nav-wrapper {
   margin-left: 15px;
 }
</style>
