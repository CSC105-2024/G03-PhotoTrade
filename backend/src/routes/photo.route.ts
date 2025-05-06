import { Hono } from "hono";

import {
    uploadPhoto,
    getAllPhotos,
    getPhotoById,
    getPhotosByUserId,
    getPhotosByCategory,
    deletePhoto,
} from "../controllers/photo.controller.ts";

const photoRoutes = new Hono()

photoRoutes.post("/upload", ...uploadPhoto);
photoRoutes.get("/all", ...getAllPhotos);
photoRoutes.get("/:id", ...getPhotoById);
photoRoutes.get("/user/:id", ...getPhotosByUserId);
// photoRoutes.put("/:id",...updatePhoto);
photoRoutes.get("/category/:id", ...getPhotosByCategory); 
photoRoutes.delete("/:id", ...deletePhoto);

export default photoRoutes;