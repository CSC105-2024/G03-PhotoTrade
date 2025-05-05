import { Hono } from "hono";
import {
    loginController,
    signUpController,
} from "../controllers/user.controller.ts";

import { auth } from "../middlewares/token.ts";

const userRoutes = new Hono()

userRoutes.post('/register', ...signUpController)
userRoutes.post('/login', ...loginController)
export default userRoutes