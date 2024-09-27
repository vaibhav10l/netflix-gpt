import React from 'react'
import MovieCards from './MovieCards'

const MovieTypes = ({title,movies}) => {
  if(movies === null) return;

  return (
    <div className=''>
       <h1 className='text-xl p-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
          <div className='flex '>
          {movies.map((movie)=> (<MovieCards key={movie.id} poster_path ={movie.poster_path}/>))}
          </div>
        </div>
    </div>
  )
}

export default MovieTypes