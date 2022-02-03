import { setupDatabase } from '$lib/database';
import { UserModel } from '../../../models/Users';

export async function get({ params, request }) {
	// reminder on params parsing - /users?filter=MyFilerSearchInput&okay=AnotherParam
	// request.url.searchParams.get('okay');
	// const filterUsersByName = request.url.searchParams.get('filter');
	try {
		setupDatabase();
		const id = params.slug;
		let result = await UserModel.findById(id);
		if (result) {
			return {
				status: 200,
				body: {
					result
				}
			};
		} else {
			return {
				status: 404,
				body: {
					error: 'User not found'
				}
			};
		}
	} catch (err) {
		console.log(err);
		return {
			status: 400,
			body: {
				error: 'User by ID not found'
			}
		};
	}
}
