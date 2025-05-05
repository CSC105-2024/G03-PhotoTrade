import { Hono } from "hono";

import {
    getallcategory,
    addcategory,
    getcategorybyid,
    removecategory,
} from "../controllers/category.controller.ts";