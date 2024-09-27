import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/store/slice/movieSlice";
import { useEffect } from "react";

const useGetTrailerVideo = (movie_id)=> {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movie_id +
            "/videos?language=en-US",
            API_OPTIONS
        );
        const json = await data?.json();

        const filterData = json?.results?.filter((video) => video.type === "Trailer")
        const trailerVideo = filterData.length ? filterData[0] : json?.results?.[0]

        dispatch(addTrailerVideo(trailerVideo))
    }

    useEffect(() => {
        getMovieVideos();
    }, [movie_id])
}

export default useGetTrailerVideo;