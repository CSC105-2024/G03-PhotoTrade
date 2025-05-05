import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/reducer/counter";
import authSlice from "./reducer/auth";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

export default store;
