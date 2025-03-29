import PrismaClientPkg from '@prisma/client'

const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient()

function getUsers() {
	return [
		{
            username: 'Anael',
            password: 'morango1',
            userAuthToken: crypto.randomUUID()
        },
        {
            username: 'Luiz',
            password: 'morango2',
            userAuthToken: crypto.randomUUID()
        }
	]
}

async function seed() {
    const users = getUsers();
    for (const user of users) {
        await prisma.user.create({ data: user })
    }
}

seed()