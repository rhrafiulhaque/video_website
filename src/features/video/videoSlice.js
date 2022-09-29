import getVideo from "./videoApi";
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")


const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    errorMessage: "",
}

export const fetchvideo = createAsyncThunk("video/fetchvideo", async (id) => {
    const video = await getVideo(id)
    return video;
});

const videoSLice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchvideo.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
            .addCase(fetchvideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchvideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = false;
                state.errorMessage = action.error.message;
            })
    }
})

export default videoSLice.reducer;