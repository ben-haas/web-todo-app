import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch, cookies }) => {
	const access_token = cookies.get('access-token');
	const res = await fetch(`http://localhost:8080/v1/todos`, {
		headers: {
			'Authorization': `Bearer ${access_token}`
		}
	});

	if (res.ok) {
		const todos = await res.json();
		return json(todos, { status: 200 });
	}

	throw error(res.status, res.statusText);
};

export const POST: RequestHandler = async ({ fetch, cookies }) => {
	const access_token = cookies.get('access-token');

	const res = await fetch(`http://localhost:8080/v1/todos`, {
		method: 'POST',
		headers: {
			'Authorization': `Bearer ${access_token}`
		}
		//TODO: Add body
	});

	if (res.ok) {
		const message = await res.json();
		return json(message, { status: 201 });
	}

	throw error(res.status, res.statusText);

};

//TODO: Add PUT handler