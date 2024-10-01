import React from 'react'
import { lang } from '../utils/languageConst'
import { useDispatch, useSelector } from 'react-redux'
import OpenAI from 'openai'
import { API_OPTIONS, GPT_SECRET_KEY } from '../utils/constant'
import { addGPTSearchedMovies } from '../utils/store/slice/gptSlice'

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.lang.lang)
  const getAllMovieDetails = async (movie) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`
      , API_OPTIONS)

    const jsonData = await data.json();
    return jsonData?.results
  }
  const onClickSearch = async () => {
    //Here I am using openai api for movies suggestion.
    //   const openai = new OpenAI({ apiKey:GPT_SECRET_KEY,dangerouslyAllowBrowser: true});
    //   const completion = await openai.chat.completions.create({
    //     model: "gpt-3.5-turbo",
    //     messages: [,
    //       { "role": "user", "content": "PLease tell something about yourself!" }
    //     ]
    //   });
    //   console.log("completion",completion)

    //For the time been let use a hardcoded movie String 
    const movies = "Bhool Bhulaiyaa 2,Raaz,Bhoot,Stree,Murder"
    const movieArray = movies.split(",")
    const fetchAllMoviesPromise = movieArray.map((movie) => getAllMovieDetails(movie))
    const fetchAllMovieData = await Promise.all(fetchAllMoviesPromise);
    dispatch(addGPTSearchedMovies({ movies: movieArray, movieData: fetchAllMovieData }))

  }
  return (
    <div className=' pt-[10%] flex justify-center '>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input
          className='m-2 p-2 col-span-9 rounded-lg'
          type='text'
          placeholder={lang[selectedLanguage].searchPlaceHolder}>
        </input>
        <button className='bg-red-700 m-2 p-2 col-span-3 rounded-lg' onClick={onClickSearch}>
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar