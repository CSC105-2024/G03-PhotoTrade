import { Hono } from 'hono'
import {
  getAllCollections,
  getCollectionsByUserId,
  getTop3Collections,
  createCollection,
  addPhotoToCollection,
  deletePhotoFromCollection,
} from '../controllers/collection.controller.ts'

const collectionRoute = new Hono()

collectionRoute.post('/', ...createCollection)
collectionRoute.get('/', ...getAllCollections)
collectionRoute.get('/top3', ...getTop3Collections)
collectionRoute.get('/:userid', ...getCollectionsByUserId)
collectionRoute.patch('/:id', ...addPhotoToCollection) 
collectionRoute.delete('/:id', ...deletePhotoFromCollection)

export default collectionRoute
