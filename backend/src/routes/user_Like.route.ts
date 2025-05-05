import { Hono } from "hono";

import {
    likePhoto,
    countLike,
    unlikePhoto,
} from "../controllers/user_Like.controller.ts";

const User_Like_Routes = new Hono()

User_Like_Routes.post("/like", likePhoto)
User_Like_Routes.get("/count", countLike)
User_Like_Routes.delete("/unlike", unlikePhoto);

export default User_Like_Routes;