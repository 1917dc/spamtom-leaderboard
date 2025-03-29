import db from '$lib/database'

export const handle = async ({ event, resolv }) => {
  const session = event.cookies.get('session')

  if (!session) {
    return await resolve(event)
  }

  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { username: true },
  })

  if (user) {
    event.locals.user = {
      name: user.username,
    }
  }

  console.log(user?.username)

  return await resolve(event)
}