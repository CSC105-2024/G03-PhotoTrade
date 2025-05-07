import { createFactory } from 'hono/factory';
import * as photoModel from '../models/photo.model.ts';

const factory = createFactory();

const uploadPhoto = factory.createHandlers(async (c) => {
  const body = await c.req.json();
  const { title, description, thumbnail_url, price, user_id, categoryIds } = body;


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

const updatePhoto = factory.createHandlers(async (c) => {
  const id = Number(c.req.param('id'));
  const body = await c.req.json();
  const { title, description, thumbnail_url, price } = body;

  const updatedPhoto = await photoModel.updatePhoto(id, {
    title,
    description,
    thumbnail_url,
    price,
  });

  return c.json({
    success: true,
    data: updatedPhoto,
    msg: 'Update photo successfully',
  });
});

const deletePhoto = factory.createHandlers(async (c) => {
  const id = Number(c.req.param('id'));
  await photoModel.deletePhoto(id);

  return c.json({
    success: true,
    msg: 'Delete photo successfully',
  });
});

const getPhotosByPriceHighToLow = factory.createHandlers(async (c) => {
  const photos = await photoModel.getPhotosByPriceHighToLow();
  return c.json({
    success: true,
    data: photos,
    msg: 'Get photos by price high to low successfully',
  });
});

const getPhotosByPriceLowToHigh = factory.createHandlers(async (c) => {
  const photos = await photoModel.getPhotosByPriceLowToHigh();
  return c.json({
    success: true,
    data: photos,
    msg: 'Get photos by price low to high successfully',
  });
});

const getNewestPhotos = factory.createHandlers(async (c) => {
  const photos = await photoModel.getNewestPhotos();
  return c.json({
    success: true,
    data: photos,
    msg: 'Get newest photos successfully',
  });
});

const getBestSellerPhotos = factory.createHandlers(async (c) => {
  const photos = await photoModel.getBestSellerPhotos();
  return c.json({
    success: true,
    data: photos,
    msg: 'Get best seller photos successfully',
  });
});

const getPhotosBySearchword = factory.createHandlers(async (c) => {
  const search = c.req.query('search');
  if (!search) {
    return c.json({ success: false, msg: 'Missing search query' }, 400);
  }

  const photos = await photoModel.getPhotosBySearchword(search);
  return c.json({ success: true, data: photos, msg: 'Search successful' });
});

const getPhotosByUserTradeHistory = factory.createHandlers(async (c) => {
  const userId = Number(c.req.param('userId'));
  const trades = await photoModel.getPhotosByUserTradeHistory(userId);

  const photos = trades.map((trade) => trade.picture);
  return c.json({ success: true, data: photos, msg: 'User trade history fetched' });
});

const getPhotosLikedByUser = factory.createHandlers(async (c) => {
  const userId = Number(c.req.param('userId'));
  const likes = await photoModel.getPhotosLikedByUser(userId);

  const photos = likes.map((like) => like.picture);
  return c.json({ success: true, data: photos, msg: 'Liked photos fetched' });
});

const updatePhotoPriceByLikes = factory.createHandlers(async (c) => {
  const id = Number(c.req.param('id'));
  if (isNaN(id)) {
    return c.json({ success: false, msg: 'Invalid photo ID' }, 400);
  }

  const photo = await photoModel.updatePhotoPriceByLikes(id);
  return c.json({
    success: true,
    data: photo,
    msg: 'Price updated based on likes successfully',
  });
});


export {
  uploadPhoto,
  getAllPhotos,
  getPhotoById,
  getPhotosByUserId,
  getPhotosByCategory,
  updatePhoto,
  deletePhoto,
  getPhotosByPriceHighToLow,
  getPhotosByPriceLowToHigh,
  getNewestPhotos,
  getBestSellerPhotos,
  getPhotosBySearchword,
  getPhotosByUserTradeHistory,
  getPhotosLikedByUser,
  updatePhotoPriceByLikes,
};
