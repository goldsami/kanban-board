<script lang="ts">
	import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
	import { setClient, query } from "svelte-apollo";

	export let name: string;

	const client = new ApolloClient({
		uri: "http://localhost:3000",
		cache: new InMemoryCache(),
	});
	setClient(client);

	const q = gql`
		query Users {
			users {
				id
				name
			}
		}
	`;

	const res = query(q);
	console.log("res:", res);
</script>

<main>
	<h1>Hello {name}!</h1>

	{#if $res.loading}
		Loading...
	{:else if $res.error}
		Error: {$res.error}
	{:else}
		{JSON.stringify($res.data)}
	{/if}
</main>

<style>
</style>
