<script>
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
</script>

<div>
  <button on:click={createUser}>Create</button>
</div>
