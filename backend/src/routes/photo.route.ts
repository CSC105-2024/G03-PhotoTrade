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

const Photo_Routes = new Hono()

Photo_Routes.post("/upload", uplodephoto);
Photo_Routes.get("/all", getallphoto);
Photo_Routes.get("/all/:userid", getallphotobyuserid);
Photo_Routes.get("/category/:category", photocategory);
Photo_Routes.get("/:id", getphotobyid);
Photo_Routes.put("/update/:id", updatephoto);
Photo_Routes.delete("/delete/:id", deletephoto);

export default Photo_Routes;