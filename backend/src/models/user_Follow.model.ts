import { prisma } from "../index.ts";

export const followUser = async (followerId: number, followingId: number) => {
  if (followerId === followingId) {
    throw new Error("You cant follow yourself");
  }

  const alreadyfollow = await prisma.user_Follow.findUnique({
    where: {
      follower_id_following_id: {
        follower_id: followerId,
        following_id: followingId,
      },
    },
  });

  if (alreadyfollow) {
    throw new Error("You already follow this user");
  }

  return await prisma.user_Follow.create({
    data: {
      follower_id: followerId,
      following_id: followingId,
      is_follow: true,
    },
  });
};

export const unfollowUser = async (followerId: number, followingId: number) => {
  return await prisma.user_Follow.delete({
    where: {
      follower_id_following_id: {
        follower_id: followerId,
        following_id: followingId,
      },
    },
  });
};
