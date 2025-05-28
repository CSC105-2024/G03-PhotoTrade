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

export const likePhoto = createAsyncThunk('user/likePhoto', async ({ userId, pictureId }, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post('http://localhost:3000/api/v1/user/like', {
      userId: Number(userId),
      pictureId: Number(pictureId)
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    
    return response.data;
  } catch (error) {
    console.error('Error liking photo:', error);
    return rejectWithValue(error.response?.data || 'Like failed');
  }
});

export const unlikePhoto = createAsyncThunk('user/unlikePhoto', async ({ userId, pictureId }, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.delete('http://localhost:3000/api/v1/user/unlike', {
      data: {
        userId: Number(userId),
        pictureId: Number(pictureId)
      },
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });
    
    return response.data;
  } catch (error) {
    console.error('Error unliking photo:', error);
    return rejectWithValue(error.response?.data || 'Unlike failed');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    success: false,
    profileUser: {},
    userAll: {},
    salesCount: 0,
    likeLoading: false,
    likeSuccess: false,
    likeError: null,
  },
  reducers: {
    clearLikeState: (state) => {
      state.likeLoading = false;
      state.likeSuccess = false;
      state.likeError = null;
    }
  },
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
      })
      .addCase(likePhoto.pending, (state) => {
        state.likeLoading = true;
        state.likeSuccess = false;
        state.likeError = null;
      })
      .addCase(likePhoto.fulfilled, (state, action) => {
        state.likeLoading = false;
        state.likeSuccess = true;
        state.likeError = null;
      })
      .addCase(likePhoto.rejected, (state, action) => {
        state.likeLoading = false;
        state.likeSuccess = false;
        state.likeError = action.payload;
      })
      .addCase(unlikePhoto.pending, (state) => {
        state.likeLoading = true;
        state.likeSuccess = false;
        state.likeError = null;
      })
      .addCase(unlikePhoto.fulfilled, (state, action) => {
        state.likeLoading = false;
        state.likeSuccess = true;
        state.likeError = null;
      })
      .addCase(unlikePhoto.rejected, (state, action) => {
        state.likeLoading = false;
        state.likeSuccess = false;
        state.likeError = action.payload;
      });
  },
});

export const { clearLikeState } = userSlice.actions;
export default userSlice.reducer;