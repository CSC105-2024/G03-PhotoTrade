import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/register",
        payload,
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        payload,
        { withCredentials: true },
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Login failed");
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post(
    "http://localhost:3000/api/v1/user/logout",
    {},
    { withCredentials: true },
  );
  localStorage.removeItem("isAuth")
});

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/user/me", {
        withCredentials: true,
      });
      localStorage.setItem("isAuth", "true");
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Fetch user failed");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    success: false,
    isAuthenticated: localStorage.getItem("isAuth") === "true",
    userInfo: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
      })

      .addCase(login.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.isAuthenticated = false;
        state.userInfo = {};
      })

      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.userInfo = {};
        state.success = false;
        state.loading = false;
      })

      .addCase(logout.fulfilled, (state) => {
        state.userInfo = {};
        state.isAuthenticated = false;
        state.success = false;
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
