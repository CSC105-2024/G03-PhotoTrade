import { Hono } from "hono";
import { 
    loginController, 
    signUpController, 
} from "../controllers/user.controller.ts";
import {
    likePhoto,
    countLike,
    unlikePhoto,
} from "../controllers/user_Like.controller.ts";
import { 
    followUser, 
    unfollowUser, 
} from "../controllers/user_Follow.controller.ts";
import { auth } from "../middlewares/token.ts";

const userRoutes = new Hono()

userRoutes.post('/register', ...signUpController)
userRoutes.post('/login', ...loginController)

export default userRoutes