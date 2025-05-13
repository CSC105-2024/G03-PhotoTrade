import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllPhoto = createAsyncThunk('photo/all', async ({ page, perPage }) => {
  const response = await axios.get(`http://localhost:3000/api/v1/photo/all?_start=${page}&_limit=${perPage}`);
  const totalPic = parseInt(response.headers['X-Total-Count'] || '0');
  console.log(response.data.data);
  return {
    data: response.data.data,
    total: totalPic,
  };
});

export const getPhotoByCategory = createAsyncThunk('photo/category/:id', async (categoryId) => {
  const response = await axios.get(`http://localhost:3000/api/v1/photo/category/${categoryId}`);
  return response.data;
});

export const deletePhotoById = createAsyncThunk('photo/delete/:id', async (id) => {
  const response = await axios.delete(`http://localhost:3000/api/v1/photo/${id}`);
  return response.data;
});

export const createPhoto = createAsyncThunk('photo/upload', async (payload) => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/photo/upload', payload, { withCredentials: true });
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error uploading photo:', error);
    throw error;
  }
});

export const getPhotoUser = createAsyncThunk('photo/user', async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/v1/photo/own', {
      withCredentials: true,
    });
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    console.error('Error get photo by user photo:', error);
    throw error;
  }
});

export const getPhotoId = createAsyncThunk('photo/id', async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/photo/${id}`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error get photo by user photo:', error);
    throw error;
  }
});

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    loading: false,
    success: false,
    photoList: [],
    totalPic: 0,
    photoListUser: [],
    photoListId: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPhoto.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPhoto.fulfilled, (state, action) => {
        state.photoList = action.payload.data;
        state.totalPic = action.payload.total;
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
      })

      .addCase(createPhoto.fulfilled, (state) => {
        state.success = true;
        state.loading = false;
      })

      .addCase(getPhotoUser.fulfilled, (state, action) => {
        state.photoListUser = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(getPhotoUser.rejected, (state) => {
        state.photoListUser = [];
        state.success = false;
        state.loading = false;
      })
      .addCase(getPhotoUser.pending, (state) => {
        state.success = true;
        state.loading = false;
      })

      .addCase(getPhotoId.fulfilled, (state, action) => {
        state.photoListId = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(getPhotoId.rejected, (state) => {
        state.photoListId = {};
        state.success = false;
        state.loading = false;
      })
      .addCase(getPhotoId.pending, (state) => {
        state.success = true;
        state.loading = false;
      })

      .addCase(deletePhotoById.fulfilled, (state, action) => {
        state.photoList = state.photoList((photo) => photo.id !== action.payload.id)
        state.success = true;
        state.loading = false;
      })
      .addCase(deletePhotoById.rejected, (state) => {
        state.success = false;
        state.loading = false;
      })
      .addCase(deletePhotoById.pending, (state) => {
        state.success = true;
        state.loading = false;
      });
  },
});

export default photoSlice.reducer;
