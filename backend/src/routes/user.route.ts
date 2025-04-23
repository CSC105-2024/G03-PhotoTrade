import { Hono } from "hono";
import { 
    loginController, 
    signUpController, 
    userController 
} from "../controllers/auth.controller.js";
import { auth } from "../middlewares/token.js";

const userRoutes = new Hono()

userRoutes.get('', auth, ...userController)
userRoutes.post('/register', ...signUpController)
userRoutes.post('/login', ...loginController)

export default userRoutes
