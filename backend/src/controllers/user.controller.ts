import { createFactory } from 'hono/factory'
import { registerSchema, type SuccessResponse } from '../types/index.ts'
import { zValidator } from '@hono/zod-validator'
import * as argon2 from "argon2"
import { HTTPException } from 'hono/http-exception'
import { createTokenAndSetCookie } from "../utils/index.ts"
import { prisma } from '../index.ts'

const factory = createFactory()

const signUpController = factory.createHandlers(
    zValidator('json', registerSchema), async (c) => {
        const { name, email, password } = c.req.valid('json')
        const passwordHash = await argon2.hash(password)

            const duplicate = await prisma.user.findFirst({
                where: {
                   name: name,
                   email: email
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
                    message: "User create successfully",
                },
                201,
            )
    }
)

const loginController = factory.createHandlers(async (c) => {
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


const getUserById = factory.createHandlers(
    async (c) => {
        const id = c.req.param('id')

        if (id === undefined) {
            throw new HTTPException (400, {
                message: 'Missing "id" parameter in the URL. Example: /users/123',
                cause: {frome: true}
            })
        }

        const newId = parseInt(id)
        const user = await prisma.user.findFirst({
            where: {
                id: newId
            },
            select: {
                name: true,
                bio: true
            }
        })

        if (!user) {
            throw new HTTPException (500, {
                message: 'Not found this id in database',
                cause: {frome: true}
            })
        }

        return c.json<SuccessResponse<{name: string; bio: string | null}>>(
            {  
                success: true,
                message: 'Fetch user by id successfully',
                data: {
                    name: user.name,
                    bio: user.bio
                }
            },
            201
        )
    }
)

//

export { signUpController, loginController, getUserById }