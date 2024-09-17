import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, params, cookies }) => {
	const { id } = params;
	const access_token = cookies.get('access-token')

	const res = await fetch(`http://localhost:8080/v1/todos/${id}`, {
		headers: {
			'Authorization': `Bearer ${access_token}`
		}
	});

	if (res.ok) {
		const todo = await res.json();

		return json(todo, { status: 200 });
	}

	throw error(res.status, res.statusText);
};