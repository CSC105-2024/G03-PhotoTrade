import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/reducer/counter";
import valSlice from "./reducer/validate";
import authSlice, { createUser } from "./reducer/auth";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    validate: valSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
    }),
});

export default store;
