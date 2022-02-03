<script>
	import { user, delUser } from '../../stores/users';

	let subscribedUsers = [];

	user.subscribe((value) => {
		subscribedUsers = value;
	});

	async function onDeleteUser(user) {
		await delUser(user); // retrive yes/no => alerts
	}
</script>

<div class="users">
	{#each subscribedUsers as user}
		<div class="user">
			<p class="user--text">{user._id}</p>
			<p class="user--text">{user.name}</p>
			<p class="user--text">{user.age}</p>
			<p class="user--text">{user.height}</p>
			<button class="user--text" on:click={() => onDeleteUser(user)}>Remove</button>
		</div>
	{/each}
</div>

<style>
	.users {
		display: flex;
		flex-direction: column;
		flex-basis: 0;
	}
	.user--text {
		text-align: center;
		padding: 0px 20px;
		background-color: rgb(60, 87, 42);
	}
	.user {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-basis: 0;
		flex: 1 1 0px;
		width: 100%;
	}
</style>
