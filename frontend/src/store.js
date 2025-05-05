import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/reducer/counter";
import authSlice from "./reducer/auth";
import userSlice from './reducer/user'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    user: userSlice
  },
});

export default store;
