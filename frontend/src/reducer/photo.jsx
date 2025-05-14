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

export const deletePhotoById = createAsyncThunk('photo/delete/:id', async (id) => {
  const response = await axios.delete(`http://localhost:3000/api/v1/photo/${id}`);
  return response.data;
});

export const createPhoto = createAsyncThunk('photo/upload', async (payload) => {
  try {
    console.log('Creating photo with payload:', payload);
    if (!payload.title || !payload.thumbnail_url || !payload.price || !payload.categoryIds) {
      throw new Error('Missing required fields in payload');
    }

    if (!Array.isArray(payload.categoryIds) || payload.categoryIds.length === 0) {
      throw new Error('categoryIds must be a non-empty array');
    }

    const response = await axios.post('http://localhost:3000/api/v1/photo/upload', payload, { withCredentials: true });
    console.log('Photo upload response:', response.data);
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

export const getPhotoLikebyId = createAsyncThunk('photo/liked/user/:id', async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/photo/liked/user/${id}`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error get photo liked by user :', error);
    throw error;
  }
});

export const getPhotosByUserTradeHistory = createAsyncThunk('photo/trade/user/:id', async (userId) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/photo/trade/user/${userId}`);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error getting user trade history:', error);
    throw error;
  }
});

export const getPhotoByCategory = createAsyncThunk('photo/category', async (categoryIds) => {
  const categoryIdsString = Array.isArray(categoryIds) ? categoryIds.join(',') : categoryIds;
  const response = await axios.get(`http://localhost:3000/api/v1/photo/category?categoryIds=${categoryIdsString}`);
  return response.data.data;
});

export const getPhotosByPriceHighToLow = createAsyncThunk('photo/price-high-to-low', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/photo/price/high-to-low');
  return response.data.data;
});

export const getPhotosByPriceLowToHigh = createAsyncThunk('photo/price-low-to-high', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/photo/price/low-to-high');
  return response.data.data;
});

export const getPhotosByNewest = createAsyncThunk('photo/newest', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/photo/newest');
  return response.data.data;
});

export const getPhotosByBestSeller = createAsyncThunk('photo/best-seller', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/photo/best-seller');
  return response.data.data;
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
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPhoto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPhoto.fulfilled, (state, action) => {
        state.photoList = action.payload.data;
        state.totalPic = action.payload.total;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getAllPhoto.rejected, (state, action) => {
        state.photoList = [];
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getPhotoByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPhotoByCategory.fulfilled, (state, action) => {
        state.photoList = action.payload;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPhotoByCategory.rejected, (state, action) => {
        state.photoList = [];
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createPhoto.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(createPhoto.fulfilled, (state) => {
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(createPhoto.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getPhotoUser.fulfilled, (state, action) => {
        state.photoListUser = action.payload;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPhotoUser.rejected, (state, action) => {
        state.photoListUser = [];
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getPhotoUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getPhotoId.fulfilled, (state, action) => {
        state.photoListId = action.payload;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPhotoId.rejected, (state, action) => {
        state.photoListId = {};
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getPhotoId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getPhotoLikebyId.fulfilled, (state, action) => {
        state.photoListId = action.payload;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPhotoLikebyId.rejected, (state, action) => {
        state.photoListId = {};
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getPhotoLikebyId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getPhotosByUserTradeHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPhotosByUserTradeHistory.fulfilled, (state, action) => {
        state.tradeHistory = action.payload;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPhotosByUserTradeHistory.rejected, (state, action) => {
        state.tradeHistory = [];
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deletePhotoById.fulfilled, (state, action) => {
        state.photoList = state.photoList.filter((photo) => photo.id !== action.payload.id);
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(deletePhotoById.rejected, (state, action) => {
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deletePhotoById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getPhotosByPriceHighToLow.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPhotosByPriceHighToLow.fulfilled, (state, action) => {
        state.photoList = action.payload;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPhotosByPriceHighToLow.rejected, (state, action) => {
        state.photoList = [];
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getPhotosByPriceLowToHigh.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPhotosByPriceLowToHigh.fulfilled, (state, action) => {
        state.photoList = action.payload;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPhotosByPriceLowToHigh.rejected, (state, action) => {
        state.photoList = [];
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getPhotosByNewest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPhotosByNewest.fulfilled, (state, action) => {
        state.photoList = action.payload;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPhotosByNewest.rejected, (state, action) => {
        state.photoList = [];
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      })
      
      .addCase(getPhotosByBestSeller.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPhotosByBestSeller.fulfilled, (state, action) => {
        state.photoList = action.payload;
        state.success = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(getPhotosByBestSeller.rejected, (state, action) => {
        state.photoList = [];
        state.success = false;
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearPhotoState } = photoSlice.actions;
export default photoSlice.reducer;
