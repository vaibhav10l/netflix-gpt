import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from './slice/userSlice'
import movieReducer from './slice/movieSlice'
const store = configureStore({
    reducer:{
        user:userSliceReducer,
        movie:movieReducer,
    }
})

export default store;