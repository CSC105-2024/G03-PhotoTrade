import { createFactory } from "hono/factory";
import * as collectionModel from "../models/collection.models.ts";

const factory = createFactory();

export const getCollections = factory.createHandlers(async (c) => {
  const collections = await collectionModel.getAllCollections();
  return c.json({
    success: true,
    data: collections,
    msg: "Get all collections successfully",
  });
});

export const getCollection = factory.createHandlers(async (c) => {
  const id = Number(c.req.param("id"));
  const collection = await collectionModel.getCollectionById(id);
  if (!collection)
    return c.json({ success: false, msg: "Collection not found" }, 404);
  return c.json({
    success: true,
    data: collection,
    msg: "Get collection by ID successfully",
  });
});

export const postCollection = factory.createHandlers(async (c) => {
  const body = await c.req.json();
  const { name, user_id, picture_ids } = body;
  const newCollection = await collectionModel.createCollection({
    name,
    user_id,
    picture_ids,
  });
  return c.json({
    success: true,
    data: newCollection,
    msg: "Create collection successfully",
  });
});

export const putCollection = factory.createHandlers(async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();
  const { name, picture_ids } = body;
  const updated = await collectionModel.updateCollection(id, {
    name,
    picture_ids,
  });
  return c.json({
    success: true,
    data: updated,
    msg: "Update collection successfully",
  });
});

export const removeCollection = factory.createHandlers(async (c) => {
  const id = Number(c.req.param("id"));
  await collectionModel.deleteCollection(id);
  return c.json({
    success: true,
    msg: "Delete collection successfully",
  });
});
