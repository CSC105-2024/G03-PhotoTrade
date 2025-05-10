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

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    success: false,
    profileUser: {},
    userAll: {},
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
      });
  },
});

export default userSlice.reducer;
