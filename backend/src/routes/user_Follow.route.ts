import { Hono } from "hono";

import {
    followUser,
    unfollowUser,
} from "../controllers/user_Follow.controller.ts";

const User_Follow_Routes = new Hono()

User_Follow_Routes.post("/follow", followUser);
User_Follow_Routes.delete("/unfollow", unfollowUser);

export default User_Follow_Routes;