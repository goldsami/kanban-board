<script>
  import axios from 'axios';

  function createUser(email = 'email11@gmail1.com', password = 'password') {
    console.log('create user');
    axios
      .post('http://localhost:3000/sign-up', {
        email,
        password,
      })
      .then((x) => console.log('sing-up:', x));
  }

  function login(email = 'email@gmail.com', password = 'password') {
    console.log('login');
    axios
      .post('http://localhost:3000/login', {
        email,
        password,
      })
      .then((x) => console.log('login:', x));
  }
</script>

<div>
  <button on:click={createUser}>Create</button>
  <button on:click={login}>Login</button>
</div>
