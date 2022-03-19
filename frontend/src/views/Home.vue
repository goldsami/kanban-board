<script>
</script>
<template>
  <div class="home">
    <h2>Welcome to Kanban board</h2>
    <h5>Tool for tasks tracking</h5>

    <router-link to="/signup" class="waves-effect waves-light btn-large">
      <i class="material-icons right">arrow_forward</i>Sign up for free
    </router-link>
  </div>
</template>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 1rem;
  }

  .home h2 {
    text-align: center;
  }

  a {
    margin-top: 2rem;
  }
</style>
