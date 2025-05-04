import type { Context } from 'hono'
import * as UserFollowModel from '../models/user_Follow.models.ts'

export const followUser = async (c: Context) => {
  try {
    const { followerId, followingId } = await c.req.json()
    const result = await UserFollowModel.followUser(Number(followerId), Number(followingId))
    return c.json({
      success: true,
      data: result,
      msg: "follow successfully",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
}

export const unfollowUser = async (c: Context) => {
  try {
    const { followerId, followingId } = await c.req.json()
    await UserFollowModel.unfollowUser(Number(followerId), Number(followingId))
    return c.json({
      success: true,
      msg: "unfollow successfully",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
}
