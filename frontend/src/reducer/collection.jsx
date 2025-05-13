import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createCollection = createAsyncThunk('collection/createCollection', 
    async (payload) => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/collection', payload)
            return response.data.data
        } catch (error) {
            return response.error
        }
    } 
)

export const getCollectionById = createAsyncThunk('collection/getCollectionById', 
    async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/collection/${id}`)
            console.log(response.data.data)
            return response.data.data
        } catch (error) {
            return response.error
        }
    } 
)

export const getCollectionAll = createAsyncThunk('collection/getCollectionAll', 
    async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/collection')
            console.log(response.data.data)
            return response.data.data
        } catch (error) {
            return response.error
        }
    } 
)

export const getTop3Collections = createAsyncThunk('collection/getTop3Collections', 
    async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/collection/top3')
            console.log(response.data.data)
            return response.data.data
        } catch (error) {
            return response.error
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
    }
})
export default collectionSlice.reducer