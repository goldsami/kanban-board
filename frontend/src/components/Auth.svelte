<script>
  import axios from "axios";

  function createUser(email = "email@gmail.com", password = "password") {}

  function login(email = "email@gmail.com", password = "password") {
    axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((x) => console.log("login:", x));
  }
</script>

<div>
  <button on:click={createUser}>Create</button>
  <button on:click={login}>Login</button>
</div>
