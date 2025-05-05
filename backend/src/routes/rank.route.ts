import { Hono } from "hono";

import {
    getrank
} from "../controllers/rank.controller.ts";

const rankRoutes = new Hono()

rankRoutes.get("/getrank", ...getrank);

export default rankRoutes;