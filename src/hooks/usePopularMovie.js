import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import {addPopularMovies } from "../utils/store/slice/movieSlice";
import { useDispatch } from "react-redux";

export const usePopularMovie =() => {
    const dispatch = useDispatch();
    const getPopularMovies = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', 
          API_OPTIONS
          )
          const json = await data?.json();
            dispatch(addPopularMovies(json?.results))
      }
    
      useEffect(()=>{
        getPopularMovies();
      },[])
}