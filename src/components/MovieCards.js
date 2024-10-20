import React from 'react'
import { IMG_URL } from '../utils/constant'

const MovieCards = ({poster_path}) => {
  if(!poster_path) return null;
  return (
    <div className='w-24 md:w-36 h-auto p-1'>
       <img src={IMG_URL+poster_path} />

    </div>
  )
}

export default MovieCards