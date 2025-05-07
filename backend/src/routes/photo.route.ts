import { Hono } from "hono";

import {
  uploadPhoto,
  getAllPhotos,
  getPhotoById,
  getPhotosByUserId,
  getPhotosByCategory,
  deletePhoto,
  updatePhoto,
  getPhotosByPriceHighToLow,
  getPhotosByPriceLowToHigh,
  getNewestPhotos,
  getBestSellerPhotos,
  getPhotosBySearchword,
  getPhotosByUserTradeHistory,
  getPhotosLikedByUser,
  updatePhotoPriceByLikes,
} from "../controllers/photo.controller.ts";

const photoRoutes = new Hono();

photoRoutes.post("/upload", ...uploadPhoto);
photoRoutes.get("/all", ...getAllPhotos);
photoRoutes.get("/price/high", ...getPhotosByPriceHighToLow);
photoRoutes.get("/price/low", ...getPhotosByPriceLowToHigh);
photoRoutes.get("/newest", ...getNewestPhotos);
photoRoutes.get("/bestseller", ...getBestSellerPhotos);
photoRoutes.get("/user/:userId", ...getPhotosByUserId);
photoRoutes.get("/category", ...getPhotosByCategory);
photoRoutes.get("/search", ...getPhotosBySearchword);
photoRoutes.get("/trade/user/:userId", ...getPhotosByUserTradeHistory);
photoRoutes.get("/liked/user/:userId", ...getPhotosLikedByUser);
photoRoutes.get("/:id", ...getPhotoById);
photoRoutes.put("/:id", ...updatePhoto);
photoRoutes.put("/update-price/:id", ...updatePhotoPriceByLikes);
photoRoutes.delete("/:id", ...deletePhoto);

export default photoRoutes;
