import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from './slice/userSlice'
const store = configureStore({
    reducer:{
        user:userSliceReducer
    }
})

export default store;