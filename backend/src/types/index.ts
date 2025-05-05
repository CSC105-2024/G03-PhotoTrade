import { z } from 'zod'

export const registerSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().trim().refine(value =>
        /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/
            .test(value),
    )
})

export type User = {
    id: number,
    name: string,
    bio: string | null
    create_at: Date,
    update_at: Date,
}

export type ErrorResponse = {
    success: false
    error: string
    isFormError?: boolean
}

export type SuccessResponse<T = void> = {
    success: true
    message: string
} & (T extends void ? {} : { data: T })

