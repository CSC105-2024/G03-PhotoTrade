import { prisma } from "../index.ts";

const uploadPhoto = async (data: {
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

const getNewestPhotos = async () => {
  try {
    return prisma.picture.findMany({
      orderBy: {
        create_at: 'desc',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profile_url: true
          },
        },
        pic_category: {
          include: {
            category: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error getting newest photos:", error);
    throw error;
  }
};


const getBestSellerPhotos = async () => {
  try {
    return prisma.picture.findMany({
      orderBy: {
        trade: { _count: 'desc' }
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profile_url: true
          }
        },
        pic_category: {
          include: {
            category: true,
          },
        },
        _count: { select: { trade: true } }
      },
    });
  } catch (error) {
    console.error("Error getting best seller photos:", error);
    throw error;
  }
};

const getPhotosLikedByUser = async (userId: number) => {
  return prisma.user_Like.findMany({
    where: { user_id: userId },
    include: {
      picture: {
        include: {
          user: { select: { name: true } },
        },
      },
    },
  });
};

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

const getPhotosByUserTradeHistory = async (userId: number) => {
  return prisma.trade.findMany({
    where: { user_id: userId },
    include: {
      picture: {
        include: {
          user: { select: { name: true } },
        },
      },
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

 const getPhotosByCategory = async (categoryIds: number[]) => {
  try {
    const photos = await prisma.picture.findMany({
      where: {
        pic_category: {
          some: {
            category_id: {
              in: categoryIds,
            },
          },
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profile_url: true,
          },
        },
        pic_category: {
          include: {
            category: true,
          },
        },
      },
    });
    return photos;
  } catch (error) {
    console.error("Error getting photos by category:", error);
    throw error;
  }
};

 const getPhotosByPriceHighToLow = async () => {
  try {
    const photos = await prisma.picture.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profile_url: true,
          },
        },
        pic_category: {
          include: {
            category: true,
          },
        },
      },
      orderBy: {
        price: 'desc',
      },
    });
    return photos;
  } catch (error) {
    console.error("Error getting photos by price high to low:", error);
    throw error;
  }
};

 const getPhotosByPriceLowToHigh = async () => {
  try {
    const photos = await prisma.picture.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            profile_url: true,
          },
        },
        pic_category: {
          include: {
            category: true,
          },
        },
      },
      orderBy: {
        price: 'asc',
      },
    });
    return photos;
  } catch (error) {
    console.error("Error getting photos by price low to high:", error);
    throw error;
  }
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
  getBestSellerPhotos,
  updatePhoto,
  deletePhoto,
  // getPhotosBySearchword,
  getPhotosByUserTradeHistory,
  getPhotosLikedByUser,
  // updatePhotoPriceByLikes,
};
