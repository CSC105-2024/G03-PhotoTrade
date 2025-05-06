import { prisma } from '../index.ts'

export const uplodephoto = async (data: {
    title: string
    description: string
    thumbnail_url: string
    price: number
    user_id: number
    categoryIds: number[]
}) => {
    return prisma.picture.create({
        data: {
            title: data.title,
            description: data.description,
            thumbnail_url: data.thumbnail_url,
            price: data.price,
            user_id: data.user_id,
            pic_category: {
                create: data.categoryIds.map((category_id) => ({
                    category_id,
                })),
            }
        }
    })
}

export const getallphoto = async () => {
    return prisma.picture.findMany({
        include: {
            user: {
                select: { name: true },
            },
        },
    })
}

export const getphotobyid = async (id: number) => {
    return prisma.picture.findUnique({
        where: { id },
    })
}

export const getallphotobyuserid = async (userId: number) => {
    return prisma.picture.findMany({
        where: { user_id: userId }
    })
}

export const photocategory = async (categoryIds: number[]) => {
    return prisma.picture.findMany({
        where: {
            pic_category: {
                some: {
                    category_id: {
                        in: categoryIds,
                    },
                },
            },
        },
    });
};


export const updatephoto = async (
    id: number,
    data: {
        title?: string
        description?: string
        thumbnail_url?: string
        price?: number
    }
) => {
    return prisma.picture.update({
        where: { id },
        data: {
            title: data.title,
            description: data.description,
            thumbnail_url: data.thumbnail_url,
            price: data.price
        }
    })
}

export const deletephoto = async (id: number) => {
    return prisma.picture.delete({ where: { id } })
}