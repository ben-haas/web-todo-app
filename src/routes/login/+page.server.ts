import type { Actions } from './$types'
import { login } from '$lib/server/database';
import { fail, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';

export const actions = {
  default: async ({ request, cookies }) => {
    const formData = await request.formData();

    const loginSchema = zfd.formData({
      email: zfd.text(),
      password: zfd.text()
    })

    const result = loginSchema.safeParse(formData)

    if (!result.success) {
      const data = {
        data: Object.fromEntries(formData),
        errors: result.error.flatten().fieldErrors
      }
      return fail(400, data)
    }

    const res = await login(result.data.email, result.data.password)
    const tokens = await res.json()


    cookies.set("access-token", tokens.access_token, { path: '/' })
    cookies.set("refresh-token", tokens.refresh_token, { path: '/' })

    redirect(303, '/')

  }


} satisfies Actions
