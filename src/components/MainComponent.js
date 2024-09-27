import React from 'react'
import TitleComponent from './TitleComponent'
import BgVideoComponent from './BgVideoComponent'
import { useSelector } from 'react-redux'

const MainComponent = () => {

  const movies = useSelector((store)=>store.movie.nowPlayingMovies)
  if(!movies) return;
  
  const {title , overview , id} = movies[6]
  
  return (
    <div className=''> 
      <TitleComponent title={title} overview={overview}/>
      <BgVideoComponent movie_id={id}/>
    </div>
  )
}

export default MainComponent