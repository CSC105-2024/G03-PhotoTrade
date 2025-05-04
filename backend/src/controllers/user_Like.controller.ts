import type { Context } from 'hono'
import * as UserLikeModel from '../models/user_Like.models.ts'

export const likePhoto = async (c: Context) => {
    try {
        const { userId, photoId } = await c.req.json()
        const result = await UserLikeModel.likePhoto(userId, photoId)
        return c.json({
            success: true,
            data : result,
            msg: "like successfully",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error: ${e}`,
            },
            500
        );
    }
}

export const countLike = async (c: Context) => {
    try {
        const photoId = Number(c.req.query('photoId'))
        const count = await UserLikeModel.countLike(photoId)
        return c.json({
            success: true,
            data : count,
            msg: "count successfully",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error: ${e}`,
            },
            500
        );
    }
}

export const unlikePhoto = async (c: Context) => {
    try {
        const { userId, photoId } = await c.req.json()
        const result = await UserLikeModel.unlikePhoto(userId, photoId)
        return c.json({
            success: true,
            data : result,
            msg: "unlike successfully",
        });
    } catch (e) {
        return c.json(
            {
                success: false,
                data: null,
                msg: `Internal Server Error: ${e}`,
            },
            500
        );
    }
}

