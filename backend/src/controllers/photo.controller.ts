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
  try {
    const categoryIdsParam = c.req.query("categoryIds");
    console.log("Category IDs Parameter:", categoryIdsParam);

    if (!categoryIdsParam) {
      return c.json({
        success: true,
        data: [],
        msg: "No category IDs provided",
      });
    }

    const categoryIds = categoryIdsParam
      .split(",")
      .map(id => {
        const num = parseInt(id.trim(), 10);
        return isNaN(num) ? null : num;
      })
      .filter(id => id !== null) as number[];

    console.log("Parsed Category IDs:", categoryIds);

    if (categoryIds.length === 0) {
      return c.json({
        success: true,
        data: [],
        msg: "No valid category IDs provided",
      });
    }

    const photos = await photoModel.getPhotosByCategory(categoryIds);

    return c.json({
      success: true,
      data: photos,
      msg: "Get photos by category successfully",
    });
  } catch (error) {
    console.error("Error in getPhotosByCategory:", error);
    return c.json(
      {
        success: false,
        msg: `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      500
    );
  }
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

const getPhotosByPriceHighToLow = factory.createHandlers(async (c) => {
  try {
    const photos = await photoModel.getPhotosByPriceHighToLow();
    return c.json({
      success: true,
      data: photos,
      msg: 'Get photos by price high to low successfully',
    });
  } catch (error) {
    console.error("Error getting photos by price high to low:", error);
    return c.json(
      {
        success: false,
        msg: "Failed to get photos",
      },
      500
    );
  }
});

const getPhotosByPriceLowToHigh = factory.createHandlers(async (c) => {
  try {
    const photos = await photoModel.getPhotosByPriceLowToHigh();
    return c.json({
      success: true,
      data: photos,
      msg: 'Get photos by price low to high successfully',
    });
  } catch (error) {
    console.error("Error getting photos by price low to high:", error);
    return c.json(
      {
        success: false,
        msg: "Failed to get photos",
      },
      500
    );
  }
});

// const getNewestPhotos = factory.createHandlers(async (c) => {
//   const photos = await photoModel.getNewestPhotos();
//   return c.json({
//     success: true,
//     data: photos,
//     msg: 'Get newest photos successfully',
//   });
// });

// const getBestSellerPhotos = factory.createHandlers(async (c) => {
//   const photos = await photoModel.getBestSellerPhotos();
//   return c.json({
//     success: true,
//     data: photos,
//     msg: 'Get best seller photos successfully',
//   });
// });

// const getPhotosBySearchword = factory.createHandlers(async (c) => {
//   const search = c.req.query('search');
//   if (!search) {
//     return c.json({ success: false, msg: 'Missing search query' }, 400);
//   }

//   const photos = await photoModel.getPhotosBySearchword(search);
//   return c.json({ success: true, data: photos, msg: 'Search successful' });
// });

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

// const updatePhotoPriceByLikes = factory.createHandlers(async (c) => {
//   const id = Number(c.req.param('id'));
//   if (isNaN(id)) {
//     return c.json({ success: false, msg: 'Invalid photo ID' }, 400);
//   }

//   const photo = await photoModel.updatePhotoPriceByLikes(id);
//   return c.json({
//     success: true,
//     data: photo,
//     msg: 'Price updated based on likes successfully',
//   });
// });


export {
  uploadPhoto,
  getAllPhotos,
  getPhotoById,
  getPhotosByUser,
  getPhotosByCategory,
  updatePhoto,
  deletePhoto,
  getPhotosByPriceHighToLow,
  getPhotosByPriceLowToHigh,
  // getNewestPhotos,
  // getBestSellerPhotos,
  // getPhotosBySearchword,
  getPhotosByUserTradeHistory,
  getPhotosLikedByUser,
  // updatePhotoPriceByLikes,
};
