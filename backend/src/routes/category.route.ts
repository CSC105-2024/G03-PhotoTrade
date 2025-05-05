import { Hono } from "hono";

import {
    getallcategory,
    addcategory,
    getcategorybyid,
    removecategory,
} from "../controllers/category.controller.ts";

const category_Routes = new Hono()

category_Routes.get("/all", getallcategory);
category_Routes.post("/add", addcategory);
category_Routes.get("/:id", getcategorybyid);
category_Routes.delete("/remove/:id", removecategory);

export default category_Routes;