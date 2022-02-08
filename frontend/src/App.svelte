<script>
	import { Router, Route, Link } from "svelte-navigator";
</script>

<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
		<Link to="blog">Blog</Link>
	</nav>
	<div>
		<Route path="/">home</Route>
		<Route path="about">about</Route>
		<Route path="blog/*">blog</Route>
	</div>
</Router>

<style>
</style>
