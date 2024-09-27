import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovie } from '../hooks/useNowPlayingMovie'
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';

const Browser = () => {
useNowPlayingMovie();

  return (
    <div>
      <Header/>
      <MainComponent/>
      <SecondaryComponent/>
    </div>
  )
}

export default Browser