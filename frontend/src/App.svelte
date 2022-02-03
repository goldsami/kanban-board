<script>
	import Q from './components/Q.svelte';
	import Auth from './components/Auth.svelte';
	export let name;
</script>

<main>
	<Q {name} />
	<Auth />
</main>

<style>
</style>
