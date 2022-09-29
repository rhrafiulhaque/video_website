const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    tags: [],
    search: "",
}

const filterSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {
        tagSelect: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const hasTag = state.tags.indexOf(action.payload);
            if (hasTag !== -1) {
                state.tags.splice(hasTag,1);
            }
        },
        searched: (state,action)=>{
            state.search = action.payload;
        }

    }
});

export default filterSlice.reducer;
export const {tagSelect,tagRemoved,searched}= filterSlice.actions