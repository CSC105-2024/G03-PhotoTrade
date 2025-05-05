import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { data } from "react-router-dom";

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (payload) => {
  const response = await axios.post(
    "http://localhost:3000/api/v1/user/login",
    payload,
    { withCredentials: true }
  );
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("http://localhost:3000/api/v1/user/logout", {}, { withCredentials: true });
});

export const fetchUser = createAsyncThunk("auth/fetch", async () => {
  const response = await axios.get("http://localhost:3000/api/v1/user/me", {
    withCredentials: true,
  });
  console.log(response.data.data)
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    userInfo: {},
    error: null,
    success: false,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => { state.loading = true; })
      .addCase(createUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.loading = false;
        state.success = true;
      })
      .addCase(createUser.rejected, (state) => {
        state.userInfo = {};
        state.loading = false;
        state.success = false;
      })
      .addCase(login.pending, (state) => { state.loading = true; })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.success = false;
      })
      .addCase(fetchUser.pending, (state) => { state.loading = true; })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.userInfo = data;
        state.isAuthenticated = true;
        state.success = true;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.userInfo = {};
        state.isAuthenticated = false;
        state.success = false;
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.userInfo = {};
        state.isAuthenticated = false;
        state.success = true;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;