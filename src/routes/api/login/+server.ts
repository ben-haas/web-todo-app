import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { API_URL} from '$env/static/private';

export const POST: RequestHandler = async ({ fetch, request, cookies }) => {
	const data = await request.json()

	if (!data.email) {
		throw error(400, 'Username is required');
	}

	if (!data.password) {
		throw error(400, 'Password is required');
	}

	const res = await fetch(`${API_URL}/v1/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (res.ok) {
		const { access_token, refresh_token } = await res.json();
		cookies.set('access-token', access_token, {path: '/'})
		cookies.set('refresh-token', refresh_token, {path: '/'})

		return json(access_token, { status: 200 });
	}

	throw error(res.status, res.statusText);
};