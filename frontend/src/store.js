import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/reducer/counter";
import valSlice from "./reducer/validate";
import authSlice from "./reducer/auth";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    validate: valSlice,
    auth: authSlice,
  },
});

export default store;
