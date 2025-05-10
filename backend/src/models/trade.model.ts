import { prisma } from "../index.ts";

export const buyphoto = async (userId: number, pictureId: number) => {
  const photo = await prisma.picture.findUnique({
    where: { id: pictureId },
    include: { user: true },
  });

  if (!photo) {
    throw new Error("photo not found");
  }

  if (photo.user_id === userId) {
    throw new Error("You cant buy your own photo");
  }

  const havephoto = await prisma.trade.findUnique({
    where: {
      user_id_picture_id: {
        user_id: userId,
        picture_id: pictureId,
      },
    },
  });

  if (havephoto) {
    throw new Error("You already buy this photo");
  }

  return await prisma.trade.create({
    data: {
      user_id: userId,
      picture_id: pictureId,
    },
  });
};

export const getphotohistorybyuser = async (userId: number) => {
    return await prisma.trade.findMany({
        where: {
            user_id: userId,
        },
        include: {
            picture: {
                include: {
                    user: {
                        select: { name: true },
                    },
                },
            },
        },
    });

};
