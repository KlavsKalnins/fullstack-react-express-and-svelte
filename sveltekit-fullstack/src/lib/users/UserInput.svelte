<script>
	import { addUser } from '../../stores/users';

	let name = '';
	let age = undefined;
	let height = undefined;

	async function onUserCreate() {
		if (name === '' || age === undefined || height === undefined) {
			alert('fill out all fields');
			return;
		}
		await addUser({ name: name, age: age, height: height });
		name = '';
		age = '';
		height = '';
	}
</script>

<div>
	<input type="text" bind:value={name} />
	<input type="number" bind:value={age} />
	<input type="number" bind:value={height} />
	<button on:click={onUserCreate}>Create User</button>
</div>
