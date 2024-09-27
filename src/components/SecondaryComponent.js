import React from 'react'
import { useSelector } from 'react-redux'
import MovieTypes from './MovieTypes'

const SecondaryComponent = () => {
  const movies = useSelector((store)=> store.movie.nowPlayingMovies)
  
  return (
    <div className='-mt-48 bg-black pl-12 z-20'>
      <MovieTypes  title ={"Now Playing Movies"} movies ={movies}/>
      <MovieTypes  title ={"Trending Movies"} movies ={movies}/>
      <MovieTypes  title ={"Romantic Movies"} movies ={movies}/>
      <MovieTypes  title ={"Action Movies"} movies ={movies}/>
      <MovieTypes  title ={"Thriler Movies"} movies ={movies}/>
      <MovieTypes  title ={"Comedy Movies"} movies ={movies}/>
    </div>
  )
}

export default SecondaryComponent


// card 