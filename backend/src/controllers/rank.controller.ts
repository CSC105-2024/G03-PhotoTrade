import { createFactory } from "hono/factory";
import * as RankModel from "../models/rank.model.ts";
import { prisma } from "../index.ts";

const factory = createFactory();

export const getrank = factory.createHandlers(async (c) => {
  try {
    const ranked = await RankModel.getrank();
    return c.json({
      success: true,
      data: ranked,
      msg: "find top 10 successfully",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        msg: `Internal Server Error: ${e}`,
      },
      500,
    );
  }
});
