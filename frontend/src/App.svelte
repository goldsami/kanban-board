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
	<nav class="breadcrumb" aria-label="breadcrumbs">
		<ul>
			<li class="">active</li>
			<li><Link to="/">Home</Link></li>
			<li><Link to="login">Login</Link></li>
		</ul>
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
	@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
</style>
