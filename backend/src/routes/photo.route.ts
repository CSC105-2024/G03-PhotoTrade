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