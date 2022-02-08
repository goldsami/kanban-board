<script lang="ts">
	import { ApolloClient, gql, HttpLink, InMemoryCache } from '@apollo/client';
	import { setClient, query, mutation } from 'svelte-apollo';

	export let name: string;
	const uid = 'UMT2MPF0vkgqA4itSwqh';

	const authToken =
		'eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxMGM5MGJhNGMzNjYzNTE2ZTA3MDdkMGU5YTg5NDgxMDYyODUxNTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20va2FuYmFuLWJvYXJkLTE3NWI5IiwiYXVkIjoia2FuYmFuLWJvYXJkLTE3NWI5IiwiYXV0aF90aW1lIjoxNjQzNzQ0NTY2LCJ1c2VyX2lkIjoiN09kTzZMWGlYTmZ3QkFpaFVOcWE2WGFDSzVxMSIsInN1YiI6IjdPZE82TFhpWE5md0JBaWhVTnFhNlhhQ0s1cTEiLCJpYXQiOjE2NDM3NDQ1NjYsImV4cCI6MTY0Mzc0ODE2NiwiZW1haWwiOiJlbWFpbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZW1haWxAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.VgTTF7fT-KuRl-8ChCHTxEjFP0W5qb5nXK49jHOK7VkNVn-114Xf58VYlFTG_7cGgDRF9qOQiHhBWLhZ6P4OnFpt5qQCIz8SI-KZC_ib9CxwA7jhVIBHs2PBtgSM5gOvQjv5R8bhftEKaVllDhBmUWnBjoZcf-ARMhED4sHo-7uMjNA4b5UlfRfkx0Y484JGhz2dTH5DOgHudbIOvEt4dWcHZByKv1NpALfZ5Pr33BPhIwGu0Lb77klRbsq07NjcAFDmsjXI7kqxEsAaLcr7w3sdFMkFXC35ClHTyUgoQZKNwlW0Jb3lPFGFEnnnNN2TZsLQHlEvks0qOQD6B74X8A';

	const httpLink = new HttpLink({
	  uri: 'http://localhost:3000/graphql',
	  headers: {
	    Authorization: `Bearer ${authToken}`,
	  },
	});
	const client = new ApolloClient({
	  // uri: "http://localhost:3000",
	  link: httpLink,
	  cache: new InMemoryCache(),
	});
	setClient(client);

	const selfQ = gql`
		query Me {
			me {
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

	// ADD PROJECT MUTATION
	// const addProj = mutation(createProjectQ);
	// addProj({ variables: { data: { name: "proj33", userId: uid } } }).then(
	// 	console.log
	// );

	const res = query(selfQ);
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
