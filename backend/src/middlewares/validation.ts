import type { Context, Next } from "hono";
import type { ZodSchema } from "zod";

export const signUp = (schema: ZodSchema<any>) => (
    async (c: Context, next: Next) => {
        const data = await c.req.json()
        const parsed = schema.safeParse(data)

        if (!parsed.success) {
            return c.json({ error: parsed.error}, 400)
        }

        c.set('SignUp', parsed.data)
        await next()
    }
)