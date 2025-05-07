import { createFactory } from 'hono/factory'
import * as UserLikeModel from '../models/user_Like.models.ts'

const factory = createFactory()

export const likePhoto = factory.createHandlers(
    async (c) => {
        try {
            const { userId, pictureId } = await c.req.json()

            const userIdNum = Number(userId)
            const pictureIdNum = Number(pictureId)
            if (!userIdNum || !pictureIdNum || isNaN(userIdNum) || isNaN(pictureIdNum)) {
                return c.json(
                    {
                        success: false,
                        data: null,
                        msg: 'userId and pictureId are required and must be numbers',
                    },
                    400
                )
            }

            const result = await UserLikeModel.likePhoto(userIdNum, pictureIdNum)
            return c.json({
                success: true,
                data: result,
                msg: 'like successfully',
            })
        } catch (e) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: `Internal Server Error: ${e}`,
                },
                500
            )
        }
    }
)

export const unlikePhoto = factory.createHandlers(
    async (c) => {
        try {
            const { userId, pictureId } = await c.req.json()

            const userIdNum = Number(userId)
            const pictureIdNum = Number(pictureId)
            if (!userIdNum || !pictureIdNum || isNaN(userIdNum) || isNaN(pictureIdNum)) {
                return c.json(
                    {
                        success: false,
                        data: null,
                        msg: 'userId and pictureIdId are required and must be numbers',
                    },
                    400
                )
            }

            const result = await UserLikeModel.unlikePhoto(userIdNum, pictureIdNum)
            return c.json({
                success: true,
                data: result,
                msg: 'unlike successfully',
            })
        } catch (e) {
            return c.json(
                {
                    success: false,
                    data: null,
                    msg: `Internal Server Error: ${e}`,
                },
                500
            )
        }
    }
)
