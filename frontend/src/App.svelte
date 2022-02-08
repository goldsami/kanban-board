<script>
	import { Router, Route, Link } from 'svelte-navigator';
	import axios from 'axios';
	async function login(email, password) {
	  axios
	    .post('https://goldsami-kanban-board.herokuapp.com/login', {
	      email,
	      password,
	    })
	    .then((x) => console.log('login:', x))
	    .catch(console.log);
	}

	function onSubmit(e) {
	  const formData = new FormData(e.target);

	  const data = {};
	  for (let field of formData) {
	    const [key, value] = field;
	    data[key] = value;
	  }
	  console.log(data);
	  login(data.email, data.password);
	}
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="login">Login</Link>
	</nav>
	<div>
		<Route path="/">home</Route>
		<Route path="login">
			<form on:submit|preventDefault={onSubmit}>
				<div>
					<label for="name">Email</label>
					<input type="text" id="email" name="email" value="" />
				</div>
				<div>
					<label for="name">Password</label>
					<input type="password" id="password" name="password" value="" />
				</div>
				<button type="submit">Submit</button>
			</form>
		</Route>
	</div>
</Router>

<style>
</style>
