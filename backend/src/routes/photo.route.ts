import { Hono } from "hono";

import {
    uploadPhoto,
    getAllPhotos,
    getPhotoById,
    getPhotosByUserId,
    getPhotosByCategory,
    deletePhoto,
} from "../controllers/photo.controller.ts";
import { auth } from "../middlewares/token.ts";

const photoRoutes = new Hono()

photoRoutes.post("/upload", auth, ...uploadPhoto);
photoRoutes.get("/all", ...getAllPhotos);
photoRoutes.get("/:id", ...getPhotoById);
photoRoutes.get("/user/:id", ...getPhotosByUserId);
// photoRoutes.put("/:id",...updatePhoto);
photoRoutes.get("/category/:id", ...getPhotosByCategory); 
photoRoutes.delete("/:id", ...deletePhoto);

export default photoRoutes;