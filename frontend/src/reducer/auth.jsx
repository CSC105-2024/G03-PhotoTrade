import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    userInfo: {},
    token,
    error: null,
    success: false,
    isAuthenticated: true,
  },
  reducers: {
    loginStatus: (state, action) => {
      state.userInfo = action.payload
      state.isAuthenticated = true;
      // state.token = action.payload.token;
      // localStorage.setItem("token", action.payload.token);
    },
    logoutStatus: (state) => {
      state.userInfo = {}
      state.isAuthenticated = false;
      // state.token = null;
      // localStorage.removeItem("token");
    }
  },
});

export const  { loginStatus, logoutStatus } = authSlice.actions
export default authSlice.reducer;
