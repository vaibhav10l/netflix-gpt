import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name:"langSlice",
    initialState:{
        lang:"en"
    },
    reducers:{
        changePreferLanguage: (state,action)=>{
            state.lang = action.payload
        }
    }
})
export const {changePreferLanguage} = langSlice.actions
export default langSlice.reducer;