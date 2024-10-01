import { API_URL } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

export const login = async (email: string, password: string) => {
  const data = { email: email, password: password }
  const res = await fetch(`${API_URL}/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const { access_token, refresh_token } = await res.json();
    const tokens = {
      access_token,
      refresh_token
    }

    return json(tokens, { status: 200 });
  }

  throw error(res.status, res.statusText);
}
