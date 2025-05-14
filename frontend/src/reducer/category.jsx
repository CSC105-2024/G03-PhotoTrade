import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllCategories = createAsyncThunk(
  'category/getAll',
  async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/category/all');
      return response.data.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }
);

export const getCategoryById = createAsyncThunk(
  'category/getById',
  async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/category/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching category:', error);
      throw error;
    }
  }
);

export const addCategoryToPhoto = createAsyncThunk(
  'category/addToPhoto',
  async ({ pictureId, categoryId }) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/category/add', {
        pictureId,
        categoryId
      });
      return response.data.data;
    } catch (error) {
      console.error('Error adding category to photo:', error);
      throw error;
    }
  }
);

export const removeCategoryFromPhoto = createAsyncThunk(
  'category/removeFromPhoto',
  async ({ pictureId, categoryId }) => {
    try {
      const response = await axios.delete('http://localhost:3000/api/v1/category', {
        data: {
          pictureId,
          categoryId
        }
      });
      return { pictureId, categoryId };
    } catch (error) {
      console.error('Error removing category from photo:', error);
      throw error;
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    selectedCategory: null,
    loading: false,
    error: null,
    success: false
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearSelectedCategory: (state) => {
      state.selectedCategory = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
        state.success = true;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      })
      
      .addCase(getCategoryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedCategory = action.payload;
        state.success = true;
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      })
      
      .addCase(addCategoryToPhoto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategoryToPhoto.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(addCategoryToPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      })
      
      .addCase(removeCategoryFromPhoto.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeCategoryFromPhoto.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(removeCategoryFromPhoto.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.success = false;
      });
  }
});

export const { setSelectedCategory, clearSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;