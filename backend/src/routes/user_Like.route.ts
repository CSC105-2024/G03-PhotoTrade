import { Hono } from "hono";

import {
    likePhoto,
    countLike,
    unlikePhoto,
} from "../controllers/user_Like.controller.ts";

const userlikeRoutes = new Hono()

userlikeRoutes.post("/like", ...likePhoto)
userlikeRoutes.get("/count", ...countLike)
userlikeRoutes.delete("/unlike", ...unlikePhoto);
export default userlikeRoutes;
