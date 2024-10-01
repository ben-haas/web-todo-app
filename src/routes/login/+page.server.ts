import type { Actions } from './$types'
import { login } from '$lib/server/database';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = String(data.get('email'));
    const password = String(data.get('password'));

    const res = await login(email, password)
    const tokens = await res.json()


    cookies.set("access-token", tokens.access_token, { path: '/' })
    cookies.set("refresh-token", tokens.refresh_token, { path: '/' })

    redirect(303, '/')

  }


} satisfies Actions
