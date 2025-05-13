import { createFactory } from 'hono/factory';
import * as CollectionModel from '../models/collection.model.ts';

const factory = createFactory();

export const getAllCollections = factory.createHandlers(async (c) => {
  const data = await CollectionModel.getAllCollections();
  return c.json({ success: true, data });
});

export const getCollectionsByUserId = factory.createHandlers(async (c) => {
  const userId = Number(c.req.param('id'));
  const data = await CollectionModel.getCollectionsByUserId(userId);
  return c.json({ success: true, data });
});

export const getTop3Collections = factory.createHandlers(async (c) => {
  const data = await CollectionModel.getTop3Collections();
  return c.json({ success: true, data });
});

export const createCollection = factory.createHandlers(async (c) => {
  const { userId, name } = await c.req.json();
  const data = await CollectionModel.createCollection(Number(userId), name);
  return c.json({ success: true, data, msg: 'Collection created' });
});

export const addPhotoToCollection = factory.createHandlers(async (c) => {
  const collectionId = Number(c.req.param('id'));
  const { pictureId } = await c.req.json();

  const data = await CollectionModel.addPhotoToCollection(collectionId, Number(pictureId));
  return c.json({ success: true, data, msg: 'Photo added to collection' });
});

export const deletePhotoFromCollection = factory.createHandlers(async (c) => {
  const collectionId = Number(c.req.param('id'));
  const { pictureId } = await c.req.json();

  const data = await CollectionModel.deletePhotoFromCollection(collectionId, Number(pictureId));
  return c.json({ success: true, data, msg: 'Photo removed from collection' });
});
