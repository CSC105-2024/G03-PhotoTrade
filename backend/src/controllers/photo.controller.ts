import { createFactory } from "hono/factory";
import * as photoModel from "../models/photo.model.ts";
import { HTTPException } from "hono/http-exception";

const factory = createFactory<{
  Variables: {
    userId: number;
  };
}>();

const uploadPhoto = factory.createHandlers(async (c) => {
  //call from middleware auth
  const user_id = c.get("userId");

  const body = await c.req.json();
  const { title, description, thumbnail_url, price, categoryIds } = body;

  const photo = await photoModel.uploadPhoto({
    title,
    description,
    thumbnail_url,
    price,
    user_id,
    categoryIds,
  });

  return c.json({
    success: true,
    data: photo,
    msg: "Upload photo successfully",
  });
});

const getAllPhotos = factory.createHandlers(async (c) => {
  const { _start, _limit } = c.req.query();
  const start = parseInt(_start) || 1;
  const limit = parseInt(_limit) || 5;

  const { photos, total } = await photoModel.getAllPhotos(start, limit);
  c.header("X-Total-Count", total.toString());

  return c.json({
    success: true,
    data: photos,
    msg: "Get all photos successfully",
  });
});

const getPhotoById = factory.createHandlers(async (c) => {
  const id = c.req.param("id");

  if (!id) {
    throw new HTTPException(400, {
      message: 'Missing "id" parameter in the URL. Example: /users/123',
      cause: { form: true },
    });
  }

  const newId = parseInt(id);
  const photo = await photoModel.getPhotoById(newId);

  if (!photo) {
    return c.json(
      {
        success: false,
        msg: "Photo not found",
      },
      404,
    );
  }

  return c.json({
    success: true,
    data: photo,
    msg: "Get photo by ID successfully",
  });
});

const getPhotosByUser = factory.createHandlers(async (c) => {
  const userId = c.get("userId");

  const photos = await photoModel.getPhotosByUser(userId);
  return c.json({
    success: true,
    data: photos,
    msg: "Get photos by user successfully",
  });
});

const getPhotosByCategory = factory.createHandlers(async (c) => {
  const categoryIdsParam = c.req.query("categoryIds");

  if (!categoryIdsParam) {
    return c.json(
      {
        success: false,
        msg: "Missing categoryIds query parameter",
      },
      400,
    );
  }

  const categoryIds = categoryIdsParam
    .split(",")
    .map((id) => Number(id.trim()))
    .filter((id) => !isNaN(id));

  const photos = await photoModel.getPhotosByCategory(categoryIds);

  return c.json({
    success: true,
    data: photos,
    msg: "Get photos by category successfully",
  });
});

// const updatePhoto = factory.createHandlers(async (c) => {
//   const id = Number(c.req.param('id'));
//   const body = await c.req.json();
//   const { title, description, thumbnail_url, price } = body;

//   const updatedPhoto = await photoModel.updatePhoto(id, {
//     title,
//     description,
//     thumbnail_url,
//     price,
//   });

//   return c.json({
//     success: true,
//     data: updatedPhoto,
//     msg: 'Update photo successfully',
//   });
// });

const deletePhoto = factory.createHandlers(async (c) => {
  const id = c.req.param("id");
  if (!id) {
    throw new HTTPException(400, {
      message: 'Missing "id" parameter in the URL. Example: /users/123',
      cause: { form: true },
    });
  }
  const newId = parseInt(id);
  await photoModel.deletePhoto(newId);

  return c.json({
    success: true,
    msg: "Delete photo successfully",
  });
});

export {
  uploadPhoto,
  getAllPhotos,
  getPhotoById,
  getPhotosByUser,
  getPhotosByCategory,
  deletePhoto,
};
