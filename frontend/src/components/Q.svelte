<script lang="ts">
	import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
	import { setClient, query, mutation } from "svelte-apollo";

	export let name: string;
	const uid = "UMT2MPF0vkgqA4itSwqh";

	const client = new ApolloClient({
		uri: "http://localhost:3000",
		cache: new InMemoryCache(),
	});
	setClient(client);

	const usersQ = gql`
		query Users {
			users {
				id
				name
			}
		}
	`;
	const projectsQ = gql`
		query Projects($userId: String!) {
			projects(userId: $userId) {
				id
				name
			}
		}
	`;
	const createProjectQ = gql`
		mutation CreateProject($data: CreateProjectType!) {
			createProject(data: $data) {
				id
				name
			}
		}
	`;

	const addProj = mutation(createProjectQ);
	addProj({ variables: { data: { name: "proj33", userId: uid } } }).then(
		console.log
	);

	const res = query(usersQ);
	const res2 = query(projectsQ, {
		variables: { userId: uid },
	});
	$: res2.refetch({ userId: uid });
	res2.subscribe(console.log);
</script>

<div>
	<h1>Hello {name}!</h1>

	{#if $res.loading}
		Loading...
	{:else if $res.error}
		Error: {$res.error}
	{:else}
		{JSON.stringify($res.data)}
	{/if}
</div>

<style>
</style>
