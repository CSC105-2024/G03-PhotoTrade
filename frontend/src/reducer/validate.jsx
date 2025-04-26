import { createSlice } from "@reduxjs/toolkit";
import { z } from "zod";

const isAnyKeyBlank = (object) => {
  const find = Object.keys(object)
    .filter((key) => object[key] === '')
    .map((key) => key)

  return find
}

const signUp = z.object({
  name: z.string().min(3, {message: 'Name must be at least 3 Characters'}).trim(),
  email: z.string().email({message: 'Invalid email address'}),
  password: z
  .string()
  .trim()
  .refine(value =>
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/ .test(value),
      {
        message: "Invalid password",
      }
  )
});

export const valSlice = createSlice({
  name: "validate",
  initialState: {
    userInfo: {},
    blankInput: [],
    errorVal: {},
  },
  reducers: {
    signUpValidation: (state, action) => {
      const result = signUp.safeParse(action.payload);

      state.userInfo = action.payload
      state.blankInput = isAnyKeyBlank(state.userInfo)

      if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors
        state.errorVal = fieldErrors
      } else {
        state.errorVal = {}
      }
    },
  },
});

export const { signUpValidation } = valSlice.actions;
export default valSlice.reducer;
