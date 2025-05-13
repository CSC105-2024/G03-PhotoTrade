import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFollowCount = createAsyncThunk('follow/getCount', async (id) => {
  const response = await axios.get(`http://localhost:3000/api/v1/user/followCount/${id}`);
  console.log(response.data)
  return response.data;
});

export const following = createAsyncThunk('follow/following', async (payload) => {
  const response = await axios.post('http://localhost:3000/api/v1/user/follow', payload , {withCredentials: true});
  console.log(response.data.data)
  return response.data.data;
});


const followSlice = createSlice({
  name: 'follow',
  initialState: {
    loading: false,
    success: false,
    count: {},
    isFollow : localStorage.getItem("isFollow") === 'true'
  },
  reducers: {
    setFollowStatus: (state, action) => {
      state.isFollow = action.payload;
      localStorage.setItem('isFollow', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFollowCount.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFollowCount.fulfilled, (state, action) => {
        state.count = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(getFollowCount.rejected, (state) => {
        state.success = false;
        state.loading = false;
      })

      .addCase(following.pending, (state) => {
        state.loading = true;
      })
      .addCase(following.fulfilled, (state) => {
        state.success = true;
        state.loading = false;
        state.isFollow = true;
        localStorage.setItem('isFollow', 'true')
      })
      .addCase(following.rejected, (state) => {
        state.success = false;
        state.loading = false;
      })
  },
});

export default followSlice.reducer;