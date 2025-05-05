import type { Context } from 'hono'
import * as photoModel from '../models/photo.models.ts'

export const uplodephoto = async (c: Context) => {
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

export const getallphoto = async (c: Context) => {
    const picture = await photoModel.getallphoto()
    return c.json({
        success: true,
        data: picture,
        msg: "get all photo successfully",
    });
}

export const getphotobyid = async (c: Context) => {
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

export const getallphotobyuserid = async (c: Context) => {
    const userId = Number(c.req.param('userId'))
    const picture = await photoModel.getallphotobyuserid(userId)
    return c.json({
        success: true,
        data: picture,
        msg: "get allphotobyuserid successfully",
    });
}

export const photocategory = async (c: Context) => {
    const categoryId = Number(c.req.param('categoryId'))
    const picture = await photoModel.photocategory(categoryId)
    return c.json({
        success: true,
        data: picture,
        msg: "get photocategory successfully",
    });
}

export const updatephoto = async (c: Context) => {
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

export const deletephoto = async (c: Context) => {
    const id = Number(c.req.param('id'))
    await photoModel.deletephoto(id)
    return c.json({
        success: true,
        msg: "delete successfully",
    });
}
