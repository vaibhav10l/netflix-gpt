import React from 'react'
import GPTMovieSuggections from './GPTMovieSuggections'
import GptSearchBar from './GptSearchBar'
import { NetFlix_bg_image } from '../utils/constant'

const GPTSearchPage = () => {
  return (
    <div className='bg-red-700'>
      <div>
        
      <img className='absolute -z-30' src={NetFlix_bg_image}/>
      </div>
    <div className=' absolute w-full'>
    <GptSearchBar/>
    <GPTMovieSuggections/>
    </div>
    </div>
  )
}

export default GPTSearchPage