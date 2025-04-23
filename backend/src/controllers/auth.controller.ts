import { PrismaClient } from '../../generated/prisma/index.js'
import { createFactory } from 'hono/factory'
import { registerSchema, type SuccessResponse } from '../types/index.js'
import { zValidator } from '@hono/zod-validator'
import * as argon2 from "argon2"
import { HTTPException } from 'hono/http-exception'
import { createTokenAndSetCookie } from "../utils/index.js";

const prisma = new PrismaClient()
const factory = createFactory<{
    Variables: {
        userId: number
    }
}>()

export const signUpController = factory.createHandlers(
    zValidator('json', registerSchema), async (c) => {
        const { name, email, password } = c.req.valid('json')
        const passwordHash = await argon2.hash(password)

            const duplicate = await prisma.user.findFirst({
                where: {
                    OR: [
                        {
                            name: name
                        },
                        {
                            email: email
                        }
                    ],
                },
                select: {
                    name: true,
                    email: true,
                }
            })

            if (duplicate) {
                const nameExists = duplicate.name === name
                const emailExists = duplicate.email === email

                let error = ''

                if (nameExists && emailExists) {
                    error = 'name & email'
                } else if (nameExists) {
                    error = 'name'
                } else if (emailExists) {
                    error = 'email'
                }

                throw new HTTPException(409, {
                    message: `${error} aready exists`,
                    cause: { form: true },
                })
            }

            await prisma.user.create({
                data: {
                    name,
                    email,
                    password: passwordHash,
                }
            })

            return c.json<SuccessResponse>(
                {
                    success: true,
                    message: "User created",
                },
                201,
            )
    }
)

export const loginController = factory.createHandlers(async (c) => {
    const data = await c.req.json()
    const user = await prisma.user.findUnique({
        where: {
            email: data.email
        },
    })
    
    if (!user) {
        throw new HTTPException(401, { message: 'Invalid credentials' })
    }
    createTokenAndSetCookie(c, user.id)

    if (!await argon2.verify(user.password, data.password)) {
        throw new HTTPException(401, { message: 'Invalid credentials' })
    }
    return c.json({ message: 'Logged in' })
})

export const userController = factory.createHandlers(async (c) => {
    const userId = c.get('userId')
    const user = await prisma.user.findUnique({ where: { id: userId } })
    return c.json({ data: user })
})