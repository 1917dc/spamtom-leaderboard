import PrismaClientPkg from '@prisma/client'

const PrismaClient = PrismaClientPkg.PrismaClient
const prisma = new PrismaClient()

async function seed() {
    const admins = [
        {
            name: 'Anael',
            password: 'morango1'
        },
        {
            name: 'Luiz',
            password: 'morango2'
        }
    ]
    

    await prisma.user.create({ data: admins })
}

seed()