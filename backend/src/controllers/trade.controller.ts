import { createFactory } from 'hono/factory';
import * as TradeModel from '../models/trade.model.ts';
const factory = createFactory();

export const buyPhoto = factory.createHandlers(async (c) => {
  try {
    const { userId, pictureId } = await c.req.json();

    if (!userId || !pictureId) {
      return c.json(
        {
          success: false,
          msg: `Must have userId and pictureId`,
        },
        500
      );
    }
    const result = await TradeModel.buyphoto(Number(userId), Number(pictureId));
    return c.json({
      success: true,
      data: result,
      msg: 'buy successfully',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
});

export const getphotohistorybyuser = factory.createHandlers(async (c) => {
  try {
    const userId = Number(c.req.query('userId'));
    if (!userId) {
      return c.json(
        {
          success: false,
          msg: `Must have userId`,
        },
        500
      );
    }
    const history = await TradeModel.getphotohistorybyuser(userId);
    return c.json({
      success: true,
      data: history,
      msg: 'get history successfully',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        msg: `Internal Server Error: ${e}`,
      },
      500
    );
  }
});
