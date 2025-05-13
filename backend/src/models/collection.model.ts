import { prisma } from '../index.ts'

export const getAllCollections = async () => {
  return prisma.collection.findMany({
    include: { 
      pictures: true,
      user: {
        select: {
          name: true
        }
      }
    },
  });
};

export const getCollectionsByUserId = async (userId: number) => {
  return prisma.collection.findMany({
    where: { user_id: userId },
    include: { 
      pictures: true,
      user: {
        select: {
          name: true
        }
      }
    },
  });
};

export const getTop3Collections = async () => {
  return prisma.collection.findMany({
    take: 3,
    orderBy: { pictures: { _count: 'desc' } },
    include: { pictures: true },
  });
};

export const createCollection = async (userId: number, name: string) => {
  return prisma.collection.create({
    data: {
      name,
      user_id: userId,
    },
  });
};

export const addPhotoToCollection = async (collectionId: number, pictureId: number) => {
  const current = await prisma.collection_Picture.findMany({
    where: { collection_id: collectionId },
  });

  if (current.length >= 4) {
    throw new Error("Collection already has 4 photos");
  }

  return prisma.collection_Picture.create({
    data: {
      collection_id: collectionId,
      picture_id: pictureId,
    },
  });
};

export const deletePhotoFromCollection = async (collectionId: number, pictureId: number) => {
  return prisma.collection_Picture.delete({
    where: {
      collection_id_picture_id: {
        collection_id: collectionId,
        picture_id: pictureId,
      },
    },
  });
};
