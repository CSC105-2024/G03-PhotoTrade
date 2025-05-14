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
  getPhotosByPriceLowToHigh
} from '../controllers/photo.controller.ts';
import { auth } from '../middlewares/token.ts';

const photoRoutes = new Hono();

photoRoutes.get('/own', auth, ...getPhotosByUser);
photoRoutes.get('/all', ...getAllPhotos);
photoRoutes.get("/liked/user/:userId", ...getPhotosLikedByUser);
photoRoutes.get('/trade/user/:userId', ...getPhotosByUserTradeHistory);
photoRoutes.post('/upload', auth, ...uploadPhoto);
photoRoutes.delete('/:id', ...deletePhoto);
photoRoutes.get('/:id', ...getPhotoById);

photoRoutes.get('/category', ...getPhotosByCategory); 
photoRoutes.get('/price/high-to-low', ...getPhotosByPriceHighToLow);
photoRoutes.get('/price/low-to-high', ...getPhotosByPriceLowToHigh);

export default photoRoutes;
 