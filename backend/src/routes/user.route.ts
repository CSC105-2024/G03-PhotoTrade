import { Hono } from "hono";
import { 
    getUser,
    getUserById,
    loginController, 
    logoutController, 
    signUpController, 
} from "../controllers/user.controller.ts";

import { auth } from "../middlewares/token.ts";

const userRoutes = new Hono()

userRoutes.post('/register', ...signUpController)
userRoutes.post('/login', ...loginController)
export default userRoutes