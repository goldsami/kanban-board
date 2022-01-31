<script lang="ts">
	import Q from "./components/Q.svelte";
	import Auth from "./components/Auth.svelte";
	let __myapp;
	export let name: string;

	import { initializeApp } from "firebase/app";

	const firebaseConfig = {
		apiKey: __myapp["env"].FIREBASE_API_KEY,
		authDomain: __myapp["env"].FIREBASE_AUTH_DOMAIN,
		projectId: __myapp["env"].FIREBASE_PROJECT_ID,
		storageBucket: __myapp["env"].FIREBASE_STORAGE_BUCKET,
		messagingSenderId: __myapp["env"].FIREBASE_MESSAGE_SENDING_ID,
		appId: __myapp["env"].FIREBASE_APP_ID,
		measurementId: __myapp["env"].FIREBASE_MEASUREMENT_ID,
	};
	console.log("config", firebaseConfig);

	const app = initializeApp(firebaseConfig);
</script>

<main>
	<Q {name} />
	<Auth />
</main>

<style>
</style>
