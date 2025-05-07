import { createFactory } from 'hono/factory';
import * as photoModel from '../models/photo.model.ts';

const factory = createFactory<{
  Variables: {
    userId: number;
  };
}>();

const uploadPhoto = factory.createHandlers(async (c) => {
  //call from middleware auth
  const user_id = c.get('userId')

  const body = await c.req.json();
  const { title, description, thumbnail_url, price, categoryIds } = body;

  await photoModel.uploadPhoto({
    title,
    description,
    thumbnail_url,
    price,
    user_id,
    categoryIds,
  });

  return c.json({
    success: true,
    msg: 'Upload photo successfully',
  });
});



const getAllPhotos = factory.createHandlers(async (c) => {
  const photos = await photoModel.getAllPhotos();
  return c.json({
    success: true,
    data: photos,
    msg: 'Get all photos successfully',
  });
});

const getPhotoById = factory.createHandlers(async (c) => {
  const id = Number(c.req.param('id'));
  const photo = await photoModel.getPhotoById(id);

  if (!photo) {
    return c.json(
      {
        success: false,
        msg: 'Photo not found',
      },
      404
    );
  }

  return c.json({
    success: true,
    data: photo,
    msg: 'Get photo by ID successfully',
  });
});

const getPhotosByUserId = factory.createHandlers(async (c) => {
  const userId = Number(c.req.param('userId'));
  const photos = await photoModel.getPhotosByUserId(userId);
  return c.json({
    success: true,
    data: photos,
    msg: 'Get photos by user ID successfully',
  });
});

const getPhotosByCategory = factory.createHandlers(async (c) => {
  const categoryIdsParam = c.req.query('categoryIds');

  if (!categoryIdsParam) {
    return c.json(
      {
        success: false,
        msg: 'Missing categoryIds query parameter',
      },
      400
    );
  }

  const categoryIds = categoryIdsParam
    .split(',')
    .map((id) => Number(id.trim()))
    .filter((id) => !isNaN(id));

  const photos = await photoModel.getPhotosByCategory(categoryIds);

  return c.json({
    success: true,
    data: photos,
    msg: 'Get photos by category successfully',
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
  const id = Number(c.req.param('id'));
  await photoModel.deletePhoto(id);

  return c.json({
    success: true,
    msg: 'Delete photo successfully',
  });
});

export {
  uploadPhoto,
  getAllPhotos,
  getPhotoById,
  getPhotosByUserId,
  getPhotosByCategory,
  deletePhoto,
};
