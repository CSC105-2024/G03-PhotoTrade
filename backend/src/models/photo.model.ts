import { prisma } from "../index.ts";

const uploadPhoto = async (data: {
  title: string;
  description: string;
  thumbnail_url: string;
  price: number;
  user_id: number;
  categoryIds: number[];
}) => {
  return prisma.picture.create({
    data: {
      title: data.title,
      description: data.description,
      thumbnail_url: data.thumbnail_url,
      price: data.price,
      user: {
        connect: {
          id: data.user_id,
        },
      },
      pic_category: {
        create: data.categoryIds.map((category_id) => ({
          category: {
            connect: {
              id: category_id,
            },
          },
        })),
      },
    },
  });
};

const getAllPhotos = async (page: number, perPage: number) => {
  const total = await prisma.picture.count();
  const photos = await prisma.picture.findMany({
    skip: (page - 1) * perPage,
    take: perPage,
    include: {
      user: {
        select: { name: true },
      },
      pic_category: {
        include: {
          category: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  return { photos, total };
};

const getPhotoById = async (id: number) => {
  return prisma.picture.findUnique({
    where: { id: id },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });
};

const getPhotosByUser = async (userId: number) => {
  return prisma.picture.findMany({
    where: {
      user_id: userId,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });
};

const getPhotosByCategory = async (categoryIds: number[]) => {
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

const getPhotosByPriceHighToLow = async () => {
  return prisma.picture.findMany({
    orderBy: {
      price: "desc",
    },
    include: {
      user: {
        select: { name: true },
      },
    },
  });
};

const getPhotosByPriceLowToHigh = async () => {
  return prisma.picture.findMany({
    orderBy: {
      price: "asc",
    },
    include: {
      user: {
        select: { name: true },
      },
    },
  });
};

const getNewestPhotos = async () => {
  return prisma.picture.findMany({
    orderBy: {
      create_at: "asc",
    },
    include: {
      user: {
        select: { name: true },
      },
    },
  });
};

// const getBestSellerPhotos = async () => {
//   return prisma.picture.findMany({
//     orderBy: {
//       trade: 'desc',
//     },
//     include: {
//       user: {
//         select: { name: true },
//       },
//     },
//   });
// };

const updatePhoto = async (
  id: number,
  data: {
    title?: string;
    description?: string;
    thumbnail_url?: string;
    price?: number;
  },
) => {
  return prisma.picture.update({
    where: { id },
    data: {
      title: data.title,
      description: data.description,
      thumbnail_url: data.thumbnail_url,
      price: data.price,
    },
  });
};

const deletePhoto = async (id: number) => {
  await prisma.user_Like.deleteMany({ where: { picture_id: id } });
  await prisma.collection_Picture.deleteMany({ where: { picture_id: id } });
  await prisma.pic_Category.deleteMany({ where: { picture_id: id } });
  await prisma.trade.deleteMany({ where: { picture_id: id } });

  return prisma.picture.delete({
    where: { id: id },
  });
};

export {
  uploadPhoto,
  getAllPhotos,
  getPhotoById,
  getPhotosByUser,
  getPhotosByCategory,
  getPhotosByPriceHighToLow,
  getPhotosByPriceLowToHigh,
  getNewestPhotos,
  //   getBestSellerPhotos,
  updatePhoto,
  deletePhoto,
};
