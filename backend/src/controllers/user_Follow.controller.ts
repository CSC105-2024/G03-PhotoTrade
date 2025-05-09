import { createFactory } from "hono/factory";
import * as UserFollowModel from "../models/user_Follow.models.ts";
const factory = createFactory();

export const followUser = factory.createHandlers(async (c) => {
  try {
    const { followerId, followingId } = await c.req.json();
    const result = await UserFollowModel.followUser(
      Number(followerId),
      Number(followingId),
    );
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
      500,
    );
  }
});

export const unfollowUser = factory.createHandlers(async (c) => {
  try {
    const { followerId, followingId } = await c.req.json();
    await UserFollowModel.unfollowUser(Number(followerId), Number(followingId));
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
      500,
    );
  }
});
