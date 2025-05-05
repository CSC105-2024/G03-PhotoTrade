import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk('auth/createUser', 
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/register', payload)
      console.log(payload)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const login = createAsyncThunk('auth/login',
  async (payload) => {
  const response = await axios.post('http://localhost:3000/api/v1/user/login', payload , {
    withCredentials: true
  })
    console.log(response.data)
    return response.data
  }
)

export const logout = createAsyncThunk('auth/logout',
   async () => {
    await axios.post('http://localhost:3000/api/v1/user/logout', {}, {
    withCredentials: true
  })
})

export const fetchUser = createAsyncThunk('auth/fetch',
  async () => {
    const response = await axios.get('http://localhost:3000/api/v1/user/me', {
      withCredentials: true
    })
    return response.data
  }
)

export const getUserById = createAsyncThunk('user/getUserById', 
  async (id) => {
    const response = await axios.get(`http://localhost:3000/api/v1/user/${id}`)
    return response.data
  }
)

export const getUserAll = createAsyncThunk('user/getUserAll', 
  async () => {
    const response = await axios.get(`http://localhost:3000/api/v1/user/all`)
    return response.data
  }
)

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    userInfo:  {},
    profileUser: {},
    userAll: [],
    error: null,
    success: false,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createUser.pending, (state) => {
      state.loading = true
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.userInfo = action.payload
      state.loading = false
      state.success = true
    })
    .addCase(createUser.rejected, (state) => {
      state.userInfo = {}
      state.loading = false
      state.success = false
    })
    .addCase(login.pending, (state) => {
      state.loading = true
    })
    .addCase(login.fulfilled, (state) => {
      state.loading = false
      state.success = true
      state.isAuthenticated = true
    })
    .addCase(login.rejected, (state) => {
      state.loading = false
      state.success = false
    })
    .addCase(fetchUser.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      const { data } = action.payload
      state.loading = false
      state.success = true
      state.userInfo = data
      state.isAuthenticated = true
    })
    .addCase(fetchUser.rejected, (state) => {
      state.loading = false
      state.success = false
      state.userInfo = {}
    })
    .addCase(logout.pending, (state) => {
      state.loading = true;
    })
    .addCase(logout.fulfilled, (state) => {
      state.loading = false
      state.success = false
      state.userInfo = {}
      state.isAuthenticated = false;
    })
    .addCase(logout.rejected, (state) => {
      state.loading = false
      state.success = false
      state.error = "Logout failed"
    })

    .addCase(getUserById.pending, (state) => {
      state.loading = true
    })
    .addCase(getUserById.fulfilled, (state, action) => {
      const { data } = action.payload
      state.loading = false
      state.success = true
      state.profileUser = data 
    })
    .addCase(getUserById.rejected, (state) => {
      state.loading = false
      state.success = false
    })
    .addCase(getUserAll.pending, (state) => {
      state.loading = true;
    })
    .addCase(getUserAll.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.loading = false;
      state.success = true;
      state.userAll = data;
    })
    .addCase(getUserAll.rejected, (state ) => {
      state.loading = false;
      state.success = false;
    })
  }
});

export const { loginStatus, logoutStatus } = authSlice.actions;
export default authSlice.reducer;