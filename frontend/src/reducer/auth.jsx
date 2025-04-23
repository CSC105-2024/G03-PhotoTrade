import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;


export const createUser = createAsyncThunk('users/createUser', 
  async (user) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', user)
      return response.data
    } catch (error) {
      console.log('api error')
    }
  }
)

// export const createUser = 
//   async (user) => {
//     try {
//       const response = await axios.post('http://localhost:3000/api/users/register', user)
//       return response
//     } catch (error) {
//       console.log('api error')
//     }
//   }

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    userInfo: {},
    token,
    error: null,
    success: false,
    isAuthenticated: !!token,
  },
  reducers: {
    loginStatus: (state, action) => {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    logoutStatus: (state) => {
      state.userInfo = {};
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(createUser.pending, (state, action) => {
      state.loading = true
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.userInfo = action.payload
      state.loading = false
    })
  }
});

export const { loginStatus, logoutStatus } = authSlice.actions;
export default authSlice.reducer;