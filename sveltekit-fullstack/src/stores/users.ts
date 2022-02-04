import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type { User } from 'src/types';

export const setUsers = function () {
	fetchUsers();
};

export async function fetchUsers() {
	const res = await fetch('/api/users');
	const jsonRes = await res.json();
	user.set(jsonRes.result);
}

export async function addUser(user: User) {
	try {
		await fetch('/api/users', {
			method: 'POST',
			body: JSON.stringify(user)
		});
		setUsers();
	} catch (err) {
		alert('err: ' + err);
	}
}

export async function delUser(user: User) {
	try {
		await fetch('/api/users', {
			method: 'DELETE',
			body: JSON.stringify(user)
		});
		setUsers();
	} catch (err) {
		alert('err: ' + err);
	}
}

export async function fetchUserById(id: string): Promise<string | User> {
	if (id === '') return 'invalid id';
	const res = await fetch('/api/users/' + id);
	const jsonRes = await res.json();
	return jsonRes.result;
}

export const user:Writable<User[]> = writable([], setUsers);
