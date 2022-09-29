import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getRelatedVideos from "./relatedVideosApi"

const initialState = {
    relatedVideos: [],
    isLoading: false,
    isError:false,
    errorMessage:"",

}

export const fetchRelatedVideos = createAsyncThunk('relatedVideos/getRelatedVideos', async (id, tags)=>{
    const relatableVideos = await getRelatedVideos(id,tags);
    return relatableVideos;
});

const releatedVideosSlice = createSlice({
    name: 'relatedVideos',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchRelatedVideos.pending, (state)=>{
            state.isError = false;
            state.isLoading= true;
        })
        .addCase(fetchRelatedVideos.fulfilled, (state,action)=>{
            state.isLoading= false;
            state.relatedVideos= action.payload;

        })
        .addCase(fetchRelatedVideos.rejected, (state,action)=>{
            state.isLoading= false;
            state.isError = true;
            state.relatedVideos= [];
            state.errorMessage = action.error.message;
        })
    }
})

export default releatedVideosSlice.reducer;