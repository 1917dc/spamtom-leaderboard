import { fail, redirect } from '@sveltejs/kit'
import db from '$lib/database'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {};
};

export const actions = {
    post: async ({ cookies, request }) => {
        const data = await request.formData()

        const username = data.get('username')
        const password = data.get('password')

        if (
            typeof username !== 'string' ||
            typeof password !== 'string' ||
            !username ||
            !password
          ) {
            return fail(400, { invalid: true })
        }

        const user = await db.user.findUnique({ where: { username } })

        if (!user) {
          return fail(400, { credentials: true })
        }

        if (!password) {
            return fail(400, { credentials: true })
        }

        cookies.set('session', crypto.randomUUID(), {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30,
        })

        redirect(302, '/home')
    }
};