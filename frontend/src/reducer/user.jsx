import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserById = createAsyncThunk('user/getById', async (id) => {
  const response = await axios.get(`http://localhost:3000/api/v1/user/${id}`);
  return response.data.data;
});

export const getUserAll = createAsyncThunk('user/getAll', async () => {
  const response = await axios.get('http://localhost:3000/api/v1/user/all');
  return response.data.data;
});

export const updateUser = createAsyncThunk('user/updateUser', async (userData) => {
  const response = await axios.put(`http://localhost:3000/api/v1/user/${userData.id}`, userData);
  return response.data;
});

export const getUserSalesCount = createAsyncThunk(
  'user/salesCount',
  async (userId) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/user/${userId}/sales`);
      return response.data.count;
    } catch (error) {
      console.error('Error fetching user sales count:', error);
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    success: false,
    profileUser: {},
    userAll: {},
    salesCount: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.profileUser = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(getUserById.rejected, (state) => {
        state.success = false;
        state.loading = false;
      })
      .addCase(getUserAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserAll.fulfilled, (state, action) => {
        state.userAll = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(getUserAll.rejected, (state) => {
        state.success = false;
        state.loading = false;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.profileUser = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(updateUser.rejected, (state) => {
        state.loading = false;
        state.success = false;
      })
      .addCase(getUserSalesCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserSalesCount.fulfilled, (state, action) => {
        state.salesCount = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(getUserSalesCount.rejected, (state) => {
        state.success = false;
        state.loading = false;
      });
  },
});

export default userSlice.reducer;