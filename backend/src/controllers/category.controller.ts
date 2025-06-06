import { createFactory } from 'hono/factory';
import * as CategoryModel from '../models/category.model.ts';

const factory = createFactory();

export const getcategorybyid = factory.createHandlers(async (c) => {
  try {
    const categoryId = Number(c.req.param('id'));
    if (isNaN(categoryId)) {
      return c.json(
        {
          success: false,
          msg: `Must use correct categoryId`,
        },
        500
      );
    }
    const category = await CategoryModel.getcategorybyid(categoryId);
    return c.json({
      success: true,
      data: category,
      msg: 'get category by id successfully',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
});

export const getallcategory = factory.createHandlers(async (c) => {
  try {
    const category = await CategoryModel.getallcategory();
    return c.json({
      success: true,
      data: category,
      msg: 'get all category successfully',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
});

export const addcategory = factory.createHandlers(async (c) => {
  try {
    const { pictureId, categoryId } = await c.req.json();
    if (!pictureId || !categoryId) {
      return c.json(
        {
          success: false,
          msg: `Must have pictureId and categoryId`,
        },
        500
      );
    }
    const result = await CategoryModel.addcategory(Number(pictureId), Number(categoryId));
    return c.json({
      success: true,
      data: result,
      msg: 'add category to photo successfully',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
});

export const removecategory = factory.createHandlers(async (c) => {
  try {
    const { pictureId, categoryId } = await c.req.json();
    if (!pictureId || !categoryId) {
      return c.json(
        {
          success: false,
          msg: `Must have pictureId and categoryId`,
        },
        500
      );
    }
    await CategoryModel.removecategory(Number(pictureId), Number(categoryId));
    return c.json({
      success: true,
      msg: 'remove category to photo successfully',
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
});
