import { Hono } from "hono";

import {
  getallcategory,
  addcategory,
  getcategorybyid,
  removecategory,
} from "../controllers/category.controller.ts";

const categoryRoutes = new Hono();

categoryRoutes.post("/add", ...addcategory);
categoryRoutes.get("/all", ...getallcategory);
categoryRoutes.get("/:id", ...getcategorybyid);
categoryRoutes.delete("/", ...removecategory);

export default categoryRoutes;
