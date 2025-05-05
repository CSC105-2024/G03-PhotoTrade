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
    countLike,
    unlikePhoto,
} from "../controllers/user_Like.controller.ts";
import {
    followUser,
    unfollowUser,
} from "../controllers/user_Follow.controller.ts";
import { auth } from "../middlewares/token.ts";
import {
    buyPhoto,
    getphotohistorybyuser
} from "../controllers/trade.controller.ts";
import {
    getallcategory,
    addcategory,
    getcategorybyid,
    removecategory,
} from "../controllers/category.controller.ts";


const userRoutes = new Hono()

userRoutes.post('/register', ...signUpController)
userRoutes.post('/login', ...loginController)
userRoutes.post('/logout', ...logoutController)
userRoutes.get('/me', auth, ...getUser)
userRoutes.get('/all', ...getUserAll)
userRoutes.get('/:id', ...getUserById)

// userRoutes.post('/like', likePhoto)
// userRoutes.delete('/unlike', unlikePhoto)
// userRoutes.get('/like/count', countLike)

// userRoutes.post('/follow', followUser)
// userRoutes.delete('/unfollow', unfollowUser)

// userRoutes.post('/buy', buyPhoto)
// userRoutes.get('/photohistory', getphotohistorybyuser)

// userRoutes.get('/categories', getallcategory)
// userRoutes.get('/categories/:id', getcategorybyid)
// userRoutes.put('/photo/category', addcategory)
// userRoutes.delete('/photo/category', removecategory)

export default userRoutes