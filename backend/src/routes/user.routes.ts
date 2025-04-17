import { Hono } from "hono";
import { createUser, getUsers } from "../controllers/user.controller.js";
import { signUp } from "../middlewares/validation.js";
import { registerSchema } from "../schemas/user.schema.js";

const userRoutes = new Hono()

userRoutes.get('/', ...getUsers)
userRoutes.post('/register', signUp(registerSchema), ...createUser)

export default userRoutes
