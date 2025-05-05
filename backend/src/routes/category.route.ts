import { Hono } from "hono";

import {
    getallcategory,
    addcategory,
    getcategorybyid,
    removecategory,
} from "../controllers/category.controller.ts";

const categoryRoutes = new Hono()

categoryRoutes.get("/all", ...getallcategory);
categoryRoutes.post("/add", ...addcategory);
categoryRoutes.get("/:id", ...getcategorybyid);
categoryRoutes.delete("/remove/:id", ...removecategory);

export default categoryRoutes;