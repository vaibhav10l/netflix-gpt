import React from 'react'
import { useSelector } from 'react-redux'
import MovieTypes from './MovieTypes'

const SecondaryComponent = () => {
  const movies = useSelector((store)=> store.movie)
  
  return (
    <div className='-mt-48 bg-black pl-12 z-20'>
      <MovieTypes  title ={"Now Playing Movies"} movies ={movies.nowPlayingMovies}/>
      <MovieTypes  title ={"Top Rated Movies"} movies ={movies.topRatedMovies}/>
      <MovieTypes  title ={"Popular Movies"} movies ={movies.popularMovies}/>
      <MovieTypes  title ={"Romantic Movies"} movies ={movies.popularMovies}/>
      <MovieTypes  title ={"Action Movies"} movies ={movies.popularMovies}/>
    </div>
  )
}

export default SecondaryComponent


// card 