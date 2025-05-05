import { Hono } from "hono";

import {
    uplodephoto,
    getallphoto,
    getphotobyid,
    getallphotobyuserid,
    photocategory,
    updatephoto,
    deletephoto,
} from "../controllers/photo.controller.ts";

const photoRoutes = new Hono()

photoRoutes.post("/upload", ...uplodephoto);
photoRoutes.get("/all", ...getallphoto);
photoRoutes.get("/all/:userid", ...getallphotobyuserid);
photoRoutes.get("/category/:category", ...photocategory);
photoRoutes.get("/:id",...getphotobyid);
photoRoutes.put("/update/:id", ...updatephoto);
photoRoutes.delete("/delete/:id", ...deletephoto);

export default photoRoutes;