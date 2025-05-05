import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserById = createAsyncThunk("user/getUserById", async (id) => {
  const response = await axios.get(`http://localhost:3000/api/v1/user/${id}`);
  return response.data;
});

export const getUserAll = createAsyncThunk("user/getUserAll", async () => {
  const response = await axios.get(`http://localhost:3000/api/v1/user/all`);
  return response.data;
});
