import React from 'react'
import { useSelector } from 'react-redux'
import MovieTypes from './MovieTypes'
const GPTMovieSuggections = () => {
  const {suggestedMovies,suggestedMovieData} = useSelector((store)=>store.gpt)
  if(!suggestedMovies || !suggestedMovieData) return
  return (
    <div className=' m-4 p-4 bg-black opacity-90'>
      {
        suggestedMovies.map((movies,i)=><MovieTypes key={movies} title={movies} movies={suggestedMovieData[i]}/>)
      }
    </div>
  )
}
 
export default GPTMovieSuggections