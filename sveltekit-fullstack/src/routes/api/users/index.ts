import type { RequestHandler } from '@sveltejs/kit';
import { setupDatabase } from '$lib/database';
import { UserModel } from '../../../models/Users';

export async function get(request: RequestHandler, res: Response) {
	// reminder on params parsing
	// http://localhost:3000/users?filter=hkj&okay=hell
	// request.url.searchParams.get('okay');
	// const filterUsersByName = request.url.searchParams.get('filter');
	// console.log(filterUsersByName);
	setupDatabase();

	let result = await UserModel.find({});
	if (!result) {
		return {
			status: 404,
			body: {
				error: 'bad request'
			}
		};
	} else {
		return {
			status: 200,
			body: {
				result
			}
		};
	}
}

export async function post({ params, request }) {
	// ADD validation
	setupDatabase();
	const body = await request.json();
	const newUser = new UserModel(body);
	await newUser.save();

	return {
		status: 200,
		body: newUser
	};
}

export async function del({ params, request }) {
	// ADD validation
	setupDatabase();
	const body = await request.json();

	const result = await UserModel.findOneAndDelete({ _id: body._id }, { new: true });
	if (!result) {
		return {
			status: 404,
			body: {
				error: 'bad delete request'
			}
		};
	} else {
		return {
			status: 200,
			body: {
				result
			}
		};
	}
}
