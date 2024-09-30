import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gptSearch",
    initialState:{
        isGPTSearch:false,
    },
    reducers:{
        toggleGPTSearch : (state)=> {
            state.isGPTSearch = !state.isGPTSearch
            console.log("aaya kya==",state.isGPTSearch)
        }
    }
})
export const {toggleGPTSearch} = gptSlice.actions
export default gptSlice.reducer;