import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ fetch, request }) => {
	const res = await fetch('http://localhost:8080/v1/signup', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(request.body)
	});

	if (res.ok) {
		const message = await res.json();
		return json(message, { status: 200 });
	}

	throw error(res.status, res.statusText);
};