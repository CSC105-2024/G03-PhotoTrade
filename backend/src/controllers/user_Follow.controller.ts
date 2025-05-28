import { createFactory } from 'hono/factory';
import * as UserFollowModel from '../models/user_Follow.model.ts';
const factory = createFactory<{
  Variables: {
    userId: number
  }
}>();

export const followUser = factory.createHandlers(async (c) => {
  try {
    const id = c.get('userId')
    const { followingId } = await c.req.json();
    const result = await UserFollowModel.followUser(Number(id), Number(followingId));
    return c.json({
      success: true,
      data: result,
      msg: 'follow successfully',
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
});

export const unfollowUser = factory.createHandlers(async (c) => {
  try {
    const { followerId, followingId } = await c.req.json();
    await UserFollowModel.unfollowUser(Number(followerId), Number(followingId));
    return c.json({
      success: true,
      isFollowing: false,
      msg: 'unfollow successfully',
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
});
