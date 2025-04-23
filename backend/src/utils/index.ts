import { SignJWT}  from "jose";
import { setCookie } from 'hono/cookie'
import { env } from "process";
import type { Context } from "hono";

export const createTokenAndSetCookie = (async (c: Context, userId: number) => {
    const [accessToken, refreshToken] = await Promise.all([
        new SignJWT({ userId })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('30m')
            .sign(new TextEncoder().encode(env.JWT_ACCESS_SECRET)),
        new SignJWT({ userId })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('30d')
            .sign(new TextEncoder().encode(env.JWT_REFRESH_SECRET)),
    ])
    setCookie(c, 'accessToken', accessToken)
    setCookie(c, 'refreshToken', refreshToken)
})