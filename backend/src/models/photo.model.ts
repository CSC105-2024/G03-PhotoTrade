import { prisma } from '../index.ts';

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
      user_id: data.user_id,
      pic_category: {
        create: data.categoryIds.map((category_id) => ({
          category: { connect: { id: category_id } }
        })),
      }
    }
  })
}

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
      create_at: 'desc',
    },
    include: {
      user: {
        select: { name: true },
      },
    },
  });
};

const getBestSellerPhotos = async () => {
  return prisma.picture.findMany({
    orderBy: {
      trade: { _count: 'desc' }
    },
    include: {
      user: { select: { name: true } },
      _count: { select: { trade: true } }
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

const getPhotosBySearchword = async (search: string) => {
  const lowerSearch = search.toLowerCase();

  return prisma.picture.findMany({
    where: {
      OR: [
        { title: { contains: lowerSearch } },
        { description: { contains: lowerSearch } },
      ],
    },
    include: {
      user: { select: { name: true } },
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

const updatePhotoPriceByLikes = async (id: number) => {
  const likeCount = await prisma.user_Like.count({
    where: { picture_id: id },
  });

  // ทุก 100 ไลก์ เพิ่ม 20 บาท
  const priceIncrease = Math.floor(likeCount / 100) * 20;

  // ดึงราคาปัจจุบัน
  const currentPhoto = await prisma.picture.findUnique({
    where: { id },
    select: { price: true },
  });

  if (!currentPhoto) {
    throw new Error('Photo not found');
  }

  // คำนวณราคาที่เพิ่มแล้ว
  const newPrice = currentPhoto.price + priceIncrease;

  const updatedPhoto = await prisma.picture.update({
    where: { id },
    data: {
      price: newPrice,
    },
  });

  return updatedPhoto;
};




const deletePhoto = async (id: number) => {
  await prisma.pic_Category.deleteMany({ where: { picture_id: id } });
  await prisma.trade.deleteMany({ where: { picture_id: id } });
  await prisma.user_Like.deleteMany({ where: { picture_id: id } });
  await prisma.collection_Picture.deleteMany({ where: { picture_id: id } });
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
  getBestSellerPhotos,
  updatePhoto,
  deletePhoto,
  getPhotosBySearchword,
  getPhotosByUserTradeHistory,
  getPhotosLikedByUser,
  updatePhotoPriceByLikes,
};
