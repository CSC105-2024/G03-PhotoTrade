import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const buyPhoto = createAsyncThunk('trade/buyPhoto', async ({ userId, pictureId }, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem('token');
    
    const response = await axios.post('http://localhost:3000/api/v1/trade/buy', {
      userId: Number(userId),
      pictureId: Number(pictureId) 
    }, { 
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      withCredentials: true 
    });
    
    console.log('Buy photo response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error buying photo:', error.response?.data || error.message);
    return rejectWithValue(error.response?.data || 'Purchase failed');
  }
});

const tradeSlice = createSlice({
  name: 'trade',
  initialState: {
    buyLoading: false,
    buySuccess: false,
    buyError: null,
  },
  reducers: {
    clearBuyState: (state) => {
      state.buyLoading = false;
      state.buySuccess = false;
      state.buyError = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(buyPhoto.pending, (state) => {
        state.buyLoading = true;
        state.buySuccess = false;
        state.buyError = null;
      })
      .addCase(buyPhoto.fulfilled, (state, action) => {
        state.buyLoading = false;
        state.buySuccess = true;
        state.buyError = null;
      })
      .addCase(buyPhoto.rejected, (state, action) => {
        state.buyLoading = false;
        state.buySuccess = false;
        state.buyError = action.payload;
      });
  },
});

export const { clearBuyState } = tradeSlice.actions;
export default tradeSlice.reducer;