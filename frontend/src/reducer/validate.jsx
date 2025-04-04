import { createSlice } from "@reduxjs/toolkit";
import { z } from "zod";

const valSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

export const valSlice = createSlice({
  name: "validate",
  initialState: {
    email: "",
    password: "",
    error: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      const result = valSchema.safeParse(action.payload);

      if (result.success) {
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.error = null;
      } else {
        console.log(result.error.issues);
        state.error = result.error.format();
      }
    },
  },
});

export const { setCredentials } = valSlice.actions;
export default valSlice.reducer;
