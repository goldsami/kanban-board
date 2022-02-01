<script>
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";

  const auth = getAuth();
  function createUser() {
    createUserWithEmailAndPassword(auth, "email@gmail.com", "password")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", { user: user.email, tok: user.getIdToken() });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  async function login() {
    signInWithEmailAndPassword(auth, "email@gmail.com", "password")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        user.getIdToken().then(console.log);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
</script>

<div>
  <button on:click={createUser}>Create</button>
  <button on:click={login}>Login</button>
</div>
