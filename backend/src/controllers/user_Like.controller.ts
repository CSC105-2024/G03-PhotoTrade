import { createFactory } from 'hono/factory'
import * as UserLikeModel from '../models/user_Like.models.ts'

const factory = createFactory()

export const likePhoto = factory.createHandlers(
    async (c) => {
        try {
            const { userId, photoId } = await c.req.json()
            const result = await UserLikeModel.likePhoto(userId, photoId)
            return c.json({
                success: true,
                data: result,
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
)


export const unlikePhoto = factory.createHandlers(
    async (c) => {
        try {
            const { userId, photoId } = await c.req.json()
            const result = await UserLikeModel.unlikePhoto(userId, photoId)
            return c.json({
                success: true,
                data: result,
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
)
