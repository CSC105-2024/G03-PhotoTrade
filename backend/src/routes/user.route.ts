import { Hono } from "hono";
import { 
    getUser,
    getUserAll,
    getUserById,
    loginController, 
    logoutController, 
    signUpController, 
} from "../controllers/user.controller.ts";

import {
    likePhoto,
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
userRoutes.post('/logout', auth, ...logoutController)
userRoutes.post("/like", ...likePhoto)
userRoutes.post("/follow", ...followUser)
userRoutes.get('/me', auth, ...getUser)
userRoutes.get('/all', ...getUserAll)
userRoutes.get('/:id', ...getUserById)
userRoutes.delete("/unfollow", ...unfollowUser)
userRoutes.delete("/unlike", ...unlikePhoto)


export default userRoutes