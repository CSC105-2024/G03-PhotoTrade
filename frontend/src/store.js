import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@/reducer/counter';
import authSlice from './reducer/auth';
import userSlice from './reducer/user';
import rankSlice from './reducer/rank';
import photoSlice from './reducer/photo';
import collectionSlice from './reducer/collection'
import followSlice from './reducer/follow'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    user: userSlice,
    rank: rankSlice,
    photo: photoSlice,
    collection: collectionSlice,
    follow: followSlice,
  },
});

export default store;
