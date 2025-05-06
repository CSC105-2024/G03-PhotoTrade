import { createFactory } from 'hono/factory'
import * as photoModel from '../models/photo.models.ts'
const factory = createFactory()

export const uplodephoto = factory.createHandlers(
    async (c) => {
        const body = await c.req.json()
        const { title, description, thumbnail_url, price, user_id, categoryIds } = body
        const picture = await photoModel.uplodephoto({
            title,
            description,
            thumbnail_url,
            price,
            user_id,
            categoryIds,
        })
        return c.json({
            success: true,
            data: picture,
            msg: "uplodephoto successfully",
        });
    }
)

export const getallphoto = factory.createHandlers(
    async (c) => {
        const picture = await photoModel.getallphoto()
        return c.json({
            success: true,
            data: picture,
            msg: "get all photo successfully",
        });
    }
)
export const getphotobyid = factory.createHandlers(
    async (c) => {
        const id = Number(c.req.param('id'))
        const picture = await photoModel.getphotobyid(id)
        if (!picture) return c.json(
            {
                success: false,
                msg: `photo not found`,
            },
            500
        );
        return c.json({
            success: true,
            data: picture,
            msg: "get photobyid successfully",
        });
    }
)
export const getallphotobyuserid = factory.createHandlers(
    async (c) => {
        const userId = Number(c.req.param('userId'))
        const picture = await photoModel.getallphotobyuserid(userId)
        return c.json({
            success: true,
            data: picture,
            msg: "get allphotobyuserid successfully",
        });
    }
)
export const photocategory = factory.createHandlers(
    async (c) => {
        const categoryIdsParam = c.req.query('categoryIds'); 

        if (!categoryIdsParam) {
            return c.json({
                success: false,
                msg: "Missing categoryIds query parameter",
            }, 400);
        }

        const categoryIds = categoryIdsParam
            .split(',')
            .map((id) => Number(id.trim()))
            .filter((id) => !isNaN(id));

        const picture = await photoModel.photocategory(categoryIds);
        return c.json({
            success: true,
            data: picture,
            msg: "get photocategory successfully",
        });
    }
);

export const updatephoto = factory.createHandlers(
    async (c) => {
        const id = Number(c.req.param('id'))
        const body = await c.req.json()
        const { title, description, thumbnail_url, price } = body
        const picture = await photoModel.updatephoto(id, {
            title,
            description,
            thumbnail_url,
            price,
        })
        return c.json({
            success: true,
            data: picture,
            msg: "updatephoto successfully",
        });
    }
)

export const deletephoto = factory.createHandlers(
    async (c) => {
        const id = Number(c.req.param('id'))
        await photoModel.deletephoto(id)
        return c.json({
            success: true,
            msg: "delete successfully",
        });
    }
)