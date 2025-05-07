import { Hono } from "hono";
import { 
    getUser,
    getUserAll,
    getUserById,
    loginController, 
    logoutController, 
    signUpController, 
    updateUserProfile,
    getFollowerCount,
    getFollowingCount,
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
userRoutes.post("/like", ...likePhoto) //d
userRoutes.post("/follow", ...followUser) //d
userRoutes.get('/me', auth, ...getUser)
userRoutes.get('/all', ...getUserAll)
userRoutes.get('/:id', ...getUserById)
userRoutes.get('/follower/:id', ...getFollowerCount) 
userRoutes.get('/following/:id', ...getFollowingCount) 
userRoutes.patch('/updateprofile/:id', ...updateUserProfile) //d
userRoutes.delete("/unfollow", ...unfollowUser) //d
userRoutes.delete("/unlike", ...unlikePhoto) //d


export default userRoutes