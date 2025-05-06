import { Hono } from "hono";
import { 
    getUser,
    getUserAll,
    getUserById,
    loginController, 
    logoutController, 
    signUpController, 
} from "../controllers/user.controller.ts";

import { auth } from "../middlewares/token.ts";

const userRoutes = new Hono()

userRoutes.post('/register', ...signUpController)
userRoutes.post('/login', ...loginController)
userRoutes.post('/logout', auth, ...logoutController)
userRoutes.get('/me', auth, ...getUser)
userRoutes.get('/all', ...getUserAll)
userRoutes.get('/:id', ...getUserById)


export default userRoutes