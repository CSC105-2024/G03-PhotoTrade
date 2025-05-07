import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPhoto = createAsyncThunk("photo/all", async () => {
  const response = await axios.get("http://localhost:3000/api/v1/photo/all");
  console.log(response.data.data);  
  return response.data.data;
});

export const getPhotoByCategory = createAsyncThunk("photo/category/:category", async (categoryId) => {
  const response = await axios.get(`http://localhost:3000/api/v1/photo/category/${categoryId}`);
  return response.data;
});

export const createPhoto = createAsyncThunk("photo/upload", async (payload) => {
  const response = await axios.post('http://localhost:3000/api/v1/photo/upload', payload)
  return response.data
})

const photoSlice = createSlice({
  name: "photo",
  initialState: {
    loading: false,
    success: false,
    photoList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPhoto.fulfilled, (state, action) => {
        state.photoList = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(getAllPhoto.rejected, (state) => {
        state.photoList = [];
        state.success = false;
        state.loading = false;
      })

      .addCase(getPhotoByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPhotoByCategory.fulfilled, (state, action) => {
        state.photoList = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(getPhotoByCategory.rejected, (state) => {
        state.photoList = [];
        state.success = false;
        state.loading = false;
      });
  },
});

export default photoSlice.reducer;
