import { PrismaClient } from '../../generated/prisma/index.js'
import { createFactory } from 'hono/factory'
import type { Register } from '../schemas/user.schema.js'

const prisma = new PrismaClient()

const factory = createFactory<{
    Variables: {
        SignUp: Register
    }
}>()

export const getUsers = factory.createHandlers(async (c) => {
    const users = await prisma.user.findMany()
    return c.json({ data: users })
})

export const createUser = factory.createHandlers(
    async (c) => {
        const input = c.get('SignUp') as Register
        
        const user = await prisma.user.create({
            data: {
                name: input.name,
                email: input.email,
                password: input.password,
            }
        })

        return c.json({
            message: 'User created',
            data: user
        }, 201)
    }
)
