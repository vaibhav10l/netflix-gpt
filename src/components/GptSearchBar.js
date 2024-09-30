import React from 'react'
import { lang } from '../utils/languageConst'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store)=>store.lang.lang)
  console.log(selectedLanguage,lang[selectedLanguage])
  return (
    <div className=' pt-[10%] flex justify-center '>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input 
          className='m-2 p-2 col-span-9 rounded-lg'
          type='text'
          placeholder={lang[selectedLanguage].searchPlaceHolder}>
        </input>
        <button className='bg-red-700 m-2 p-2 col-span-3 rounded-lg'> 
        {lang[selectedLanguage].search}
          </button>
      </form>
    </div>
  )
}

export default GptSearchBar