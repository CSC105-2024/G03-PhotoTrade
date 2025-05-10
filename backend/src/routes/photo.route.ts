import { Hono } from 'hono';

import {
  uploadPhoto,
  getAllPhotos,
  getPhotoById,
  getPhotosByUser,
  getPhotosByCategory,
  deletePhoto,
} from '../controllers/photo.controller.ts';
import { auth } from '../middlewares/token.ts';

const photoRoutes = new Hono();

photoRoutes.get('/own', auth, ...getPhotosByUser);
photoRoutes.get('/all', ...getAllPhotos);
photoRoutes.post('/upload', auth, ...uploadPhoto);
// photoRoutes.get("/category/:id", ...getPhotosByCategory);
// photoRoutes.put("/:id",...updatePhoto);
photoRoutes.delete('/:id', ...deletePhoto);
photoRoutes.get('/:id', ...getPhotoById);

export default photoRoutes;
