import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { API_URL} from '$env/static/private';

export const GET: RequestHandler = async ({ fetch, params, cookies }) => {
	const { id } = params;
	const access_token = cookies.get('access-token')

	const res = await fetch(`${API_URL}/v1/todos/${id}`, {
		method: 'PUT',
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

export const PUT: RequestHandler = async ({ fetch, request, params, cookies }) => {
	const { id } = params;
	const access_token = cookies.get('access-token')

	const data = await request.json()

	const res = await fetch(`${API_URL}/v1/todos/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${access_token}`
		},
		body: JSON.stringify(data.body)
	});

	if (res.ok) {
		const todo = await res.json();

		return json(todo, { status: 204 });
	}

	throw error(res.status, res.statusText);
};