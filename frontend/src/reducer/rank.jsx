import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getRank = createAsyncThunk("rank/getrank", async () => {
  const response = await axios.get(`http://localhost:3000/api/v1/rank/getrank`);
  
  return response.data.data;
});
const rankSlice = createSlice({
  name: "rank",
  initialState: {
    loading: false,
    success: false,
    rankUser: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRank.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRank.fulfilled, (state, action) => {
        state.rankUser = action.payload;
        state.success = true;
        state.loading = false;
      })
      .addCase(getRank.rejected, (state) => {
        state.rankUser = [];
        state.success = false;
        state.loading = false;
      });
  },
});
export default rankSlice.reducer;
