import { prisma } from '../index.ts';

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
      user_id: data.user_id,
      pic_category: {
        create: data.categoryIds.map((category_id) => ({ category_id })),
      },
    },
  });
};

const getAllPhotos = async () => {
  return prisma.picture.findMany({
    include: {
      user: {
        select: { name: true },
      },
    },
  });
};

const getPhotoById = async (id: number) => {
  return prisma.picture.findUnique({
    where: { id },
  });
};


const getPhotosByUserId = async (userId: number) => {
  return prisma.picture.findMany({
    where: { user_id: userId },
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
      price: 'desc',
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
      price: 'asc',
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
      create_at: 'asc',
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
  }
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

// Delete a photo
const deletePhoto = async (id: number) => {
  return prisma.picture.delete({
    where: { id },
  });
};

export {
  uploadPhoto,
  getAllPhotos,
  getPhotoById,
  getPhotosByUserId,
  getPhotosByCategory,
  getPhotosByPriceHighToLow,
  getPhotosByPriceLowToHigh,
  getNewestPhotos,
//   getBestSellerPhotos,
  updatePhoto,
  deletePhoto,
};
