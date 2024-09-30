import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovie } from '../hooks/useNowPlayingMovie'
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';
import { usePopularMovie } from '../hooks/usePopularMovie';
import { useTopRatedMovie } from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GPTSearchPage from './GPTSeachPage';

const Browser = () => {
  const isGPTSearch = useSelector((store) => store.gpt.isGPTSearch)
  console.log("isGPTSearch",isGPTSearch)
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();

  return (
    <div>
      <Header />
      {
        isGPTSearch ? <GPTSearchPage /> :
          <>
            <MainComponent />
            <SecondaryComponent />
          </>
      }

    </div>
  )
}

export default Browser