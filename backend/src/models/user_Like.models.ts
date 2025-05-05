import { prisma } from '../index.ts'

export const likePhoto = async (userId: number, pictureId: number) => {
  const alreadyLiked = await prisma.user_Like.findFirst({
    where: { user_id: userId, picture_id: pictureId },
  });

  if (alreadyLiked) {
    throw new Error("You already like this picture");
  }

  return await prisma.user_Like.create({
    data: { user_id: userId, picture_id: pictureId },
  });
};

export const unlikePhoto = async (userId: number, pictureId: number) => {
  return await prisma.user_Like.delete({
    where: {
      user_id_picture_id: {
        user_id: userId,
        picture_id: pictureId
      }
    },
  });
};

export const countLike = async (pictureId: number) => {
  return await prisma.user_Like.count({
    where: { picture_id: pictureId },
  });
};
