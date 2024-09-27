import React from 'react'
import {useSelector } from 'react-redux';
import useGetTrailerVideo from '../hooks/useGetTrailerVideo';

const BgVideoComponent = ({ movie_id }) => {
    const trailerVideo = useSelector((store)=>store.movie?.trailerVideo)

    useGetTrailerVideo(movie_id);
   
    return (
        <div className='w-screen h-screen'>
            <iframe
            className='w-full h-full aspect-video'
                src={"https://www.youtube.com/embed/" +
                    trailerVideo?.key +
                    "?&autoplay=1&mute=1&controls=0"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
                > 
                </iframe>
        </div>
    )
}

export default BgVideoComponent