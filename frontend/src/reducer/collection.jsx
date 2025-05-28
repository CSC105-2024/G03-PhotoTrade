import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createCollection = createAsyncThunk('collection/createCollection', 
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/collection', payload)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to create collection')
        }
    } 
)

export const getCollectionById = createAsyncThunk('collection/getCollectionById', 
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/collection/${id}`)
            console.log(response.data.data)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to get collections')
        }
    } 
)

export const getCollectionAll = createAsyncThunk('collection/getCollectionAll', 
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/collection')
            console.log(response.data.data)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to get all collections')
        }
    } 
)

export const getTop3Collections = createAsyncThunk('collection/getTop3Collections', 
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/collection/top3')
            console.log(response.data.data)
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to get top collections')
        }
    } 
)

export const addPhotoToCollection = createAsyncThunk('collection/addPhotoToCollection', 
    async ({ collectionId, pictureId }, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`http://localhost:3000/api/v1/collection/${collectionId}`, {
                pictureId: pictureId
            })
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to add photo to collection')
        }
    } 
)



const collectionSlice = createSlice({
    name: 'collection',
    initialState: {
        loading: false,
        success: false,
        collection: [],
        err: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

        .addCase(createCollection.pending, (state) => {
          state.loading = true;
        })
        .addCase(createCollection.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
        })
        .addCase(createCollection.rejected, (state, action) => {
          state.loading = false;
          state.success = false;
          state.err = action.payload;
        })

        .addCase(getCollectionById.pending, (state) => {
          state.loading = true;
        })
        .addCase(getCollectionById.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.collection = action.payload
        })
        .addCase(getCollectionById.rejected, (state, action) => {
          state.loading = false;
          state.success = false;
          state.err = action.payload;
        })

        .addCase(getCollectionAll.pending, (state) => {
          state.loading = true;
        })
        .addCase(getCollectionAll.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.collection = action.payload
        })
        .addCase(getCollectionAll.rejected, (state, action) => {
          state.loading = false;
          state.success = false;
          state.err = action.payload;
        })

        .addCase(getTop3Collections.pending, (state) => {
          state.loading = true;
        })
        .addCase(getTop3Collections.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.topCollections = action.payload
        })
        .addCase(getTop3Collections.rejected, (state, action) => {
          state.loading = false;
          state.success = false;
          state.err = action.payload;
        })

        .addCase(addPhotoToCollection.pending, (state) => {
          state.loading = true;
        })
        .addCase(addPhotoToCollection.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
        })
        .addCase(addPhotoToCollection.rejected, (state, action) => {
          state.loading = false;
          state.success = false;
          state.err = action.payload;
        })
    }
})
export default collectionSlice.reducer