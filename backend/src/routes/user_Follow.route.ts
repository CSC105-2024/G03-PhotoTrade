import { Hono } from "hono";

import {
    followUser,
    unfollowUser,
} from "../controllers/user_Follow.controller.ts";

const userfollowRoutes = new Hono()

userfollowRoutes.post("/follow", ...followUser);
userfollowRoutes.delete("/unfollow", ...unfollowUser);

export default userfollowRoutes;