import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from './slice/userSlice'
import movieReducer from './slice/movieSlice'
import gptReducer from './slice/gptSlice'
import langReducer from './slice/langSLice'
const store = configureStore({
    reducer:{
        user:userSliceReducer,
        movie:movieReducer,
        gpt:gptReducer,
        lang:langReducer
    }
})

export default store;