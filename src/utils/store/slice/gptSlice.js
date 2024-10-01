import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isGPTSearch: false,
    suggestedMovies: null,
    suggestedMovieData: null,

}
const gptSlice = createSlice({
    name: "gptSearch",
    initialState: initialState,
    reducers: {
        toggleGPTSearch: (state) => {
            state.isGPTSearch = !state.isGPTSearch
        },
        addGPTSearchedMovies: (state, action) => {
            const { movies, movieData } = action.payload
            state.suggestedMovies = movies;
            state.suggestedMovieData = movieData

        },
        resetGptSlice: (state) => {
            return initialState;
        }

    }
})
export const { toggleGPTSearch, addGPTSearchedMovies, resetGptSlice } = gptSlice.actions
export default gptSlice.reducer;