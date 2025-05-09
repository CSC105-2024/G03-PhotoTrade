import { Hono } from "hono";

import {
  buyPhoto,
  getphotohistorybyuser,
} from "../controllers/trade.controller.ts";

const tradeRoutes = new Hono();

tradeRoutes.post("/buy", ...buyPhoto);
tradeRoutes.get("/history", ...getphotohistorybyuser);

export default tradeRoutes;
