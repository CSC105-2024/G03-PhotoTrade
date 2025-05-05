import { Hono } from "hono";

import {
    buyPhoto,
    getphotohistorybyuser
} from "../controllers/trade.controller.ts";

const Trade_Routes = new Hono()

Trade_Routes.post("/buy", buyPhoto);
Trade_Routes.get("/history", getphotohistorybyuser)


export default Trade_Routes;