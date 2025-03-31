import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@/reducer/counter";
import valSlice from "./reducer/validate";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        validate: valSlice,
    }
})

export default store