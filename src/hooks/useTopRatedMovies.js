import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import {addTopRatedMovies } from "../utils/store/slice/movieSlice";
import { useDispatch } from "react-redux";

export const useTopRatedMovie =() => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', 
          API_OPTIONS
          )
          const json = await data?.json();
            dispatch(addTopRatedMovies(json?.results))
      }
    
      useEffect(()=>{
        getTopRatedMovies();
      },[])
}