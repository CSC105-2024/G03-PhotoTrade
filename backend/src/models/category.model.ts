import { prisma } from '../index.ts'

export const getcategorybyid = async (categoryId: number) => {
    const category = await prisma.category.findUnique({
        where: { id: categoryId },
    });

    if (!category) {
        throw new Error("Dont found this category");
    }
    return category;
};

export const getallcategory = async () => {
    return await prisma.category.findMany();
};

export const addcategory = async (pictureId: number, categoryId: number) => {
    const picture = await prisma.picture.findUnique({
        where: { id: pictureId }
    });

    if (!picture) {
        throw new Error("Dont found this photo");
    }

    const category = await prisma.category.findUnique({
        where: { id: categoryId }
    });

    if (!category) {
        throw new Error("Dont found this category");
    }

    const alreadyhavecategory = await prisma.pic_Category.findUnique({
        where: {
            picture_id_category_id: {
                picture_id: pictureId,
                category_id: categoryId
            }
        }
    });

    if (alreadyhavecategory) {
        throw new Error("This photo already has this category");
    }

    return await prisma.pic_Category.create({
        data: {
            picture_id: pictureId,
            category_id: categoryId
        }
    });
};

export const removecategory = async (pictureId: number, categoryId: number) => {
    const picCategory = await prisma.pic_Category.findUnique({
        where: {
            picture_id_category_id: {
                picture_id: pictureId,
                category_id: categoryId
            }
        }
    });

    if (!picCategory) {
        throw new Error("This photo doesnt has this category");
    }

    return await prisma.pic_Category.delete({
        where: {
            picture_id_category_id: {
                picture_id: pictureId,
                category_id: categoryId
            }
        }
    });
};
