import { Hono } from 'hono';

import {
  uploadPhoto,
  getAllPhotos,
  getPhotoById,
  getPhotosByUser,
  getPhotosByCategory,
  getPhotosLikedByUser,
  getPhotosByUserTradeHistory,
  deletePhoto,
  getPhotosByPriceHighToLow,
  getPhotosByPriceLowToHigh,
  getNewestPhotos,
  getBestSellerPhotos,
} from '../controllers/photo.controller.ts';
import { auth } from '../middlewares/token.ts';

const photoRoutes = new Hono();

photoRoutes.get('/own', auth, ...getPhotosByUser);
photoRoutes.get('/all', ...getAllPhotos);
photoRoutes.get("/liked/user/:userId", ...getPhotosLikedByUser);
photoRoutes.get('/trade/user/:userId', ...getPhotosByUserTradeHistory);
photoRoutes.get('/category', ...getPhotosByCategory); 
photoRoutes.get('/price/high-to-low', ...getPhotosByPriceHighToLow);
photoRoutes.get('/price/low-to-high', ...getPhotosByPriceLowToHigh);
photoRoutes.get('/newest', ...getNewestPhotos);
photoRoutes.get('/best-seller', ...getBestSellerPhotos);
photoRoutes.post('/upload', auth, ...uploadPhoto);
photoRoutes.delete('/:id', ...deletePhoto);
photoRoutes.get('/:id', ...getPhotoById);

export default photoRoutes;
 