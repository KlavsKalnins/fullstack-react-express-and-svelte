<script lang="ts">
	import { fetchUserById } from '../../stores/users';
	import type { User } from "../../types";

	let userId = '';

	let fetcherUserById: User;
	async function onFetchUserById(id:string) {
		if (id === '') return;
		const result = await fetchUserById(id);
		if (result === undefined) {
			alert("user by id not found");
		} else {
			if (result instanceof Object)
				fetcherUserById = result;
		}
	}
</script>

<main class="retrievedUser--main">
	<p>Input userID:</p>
	<input type="text" bind:value={userId} />
	<button on:click={() => onFetchUserById(userId)}>Fetch user by ID</button>
	{#if fetcherUserById !== undefined}
		<div class="retrievedUser--div">
			<p>{fetcherUserById.name}</p>
			<p>{fetcherUserById.age}</p>
			<p>{fetcherUserById.height}</p>
		</div>
	{/if}
</main>

<style>
	.retrievedUser--main {
		margin: 10px;
		background-color: rgba(0, 0, 0, 0.377);
		width: 20vw;
		display: flex;
		flex-direction: column;
	}
	.retrievedUser--div {
		display: flex;
		flex-direction: row;
		margin: 10px;
		padding: 10px;
		justify-content: space-evenly;
	}
</style>
