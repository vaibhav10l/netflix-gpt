import React from 'react'
import GPTMovieSuggections from './GPTMovieSuggections'
import GptSearchBar from './GptSearchBar'
import { NetFlix_bg_image } from '../utils/constant'

const GPTSearchPage = () => {
  return (
    <div className=''>
      <div>
        
      <img className='fixed -z-50 h-screen w-full object-cover' src={NetFlix_bg_image}/>
      </div>
    <div className='w-full'>
    <GptSearchBar/>
    <GPTMovieSuggections/>
    </div>
    </div>
  )
}

export default GPTSearchPage