import getTags from "./tagsApi";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")


const initialState = {
    tags: [],
    isError: false,
    isLoading: false,
    errorMassage: "",
}

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
    const tags = await getTags();
    return tags;
})

const tagsSLice = createSlice({
    name: 'tags',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTags.pending, (state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchTags.fulfilled, (state,action)=>{
            state.isLoading= false;
            state.tags= action.payload;
        })
        .addCase(fetchTags.rejected, (state,action)=>{
            state.isLoading = false;
            state.tags= [];
            state.isError = true;
            state.errorMassage= action.error?.message;
        })
    }
})

export default tagsSLice.reducer;
