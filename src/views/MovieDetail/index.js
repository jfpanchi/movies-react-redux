import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchMovieDetail, fetchMovieRatings } from "../../redux/actions/movies";
import RightContainer from "./components/RightContainer";
import LeftContainer from "./components/LeftContainer";
import Loading from "../components/Loading";

const MovieDetail = () => {
    const {movieId} = useParams();
    const dispatch = useDispatch();
    const {
        isFetchingMovieRatings,
        isFetchingMovieDetail,
        isLoading,
        errorFetchingMovieRatings,
        errorFetchingMovieDetail,
        //successFetchingMovieRatings,
        //successFetchingMovieDetail,
        ratings,
        movieDetail
    } = useSelector((state) => state.MoviesReducerSlices);

    useEffect(() => {
      dispatch(fetchMovieRatings(movieId));
    }, [dispatch, movieId]);

    useEffect(() => {
        dispatch(fetchMovieDetail(movieId));
    }, [dispatch, movieId]);

    const renderContent = () => {
        return (
            <>
            <LeftContainer imageUrl={ movieDetail?.details?.image?.url } />
            <RightContainer
                title={movieDetail?.details?.title}
                year={movieDetail?.details?.year}
                rating={ratings?.rating}
                synopsis={movieDetail?.overview?.plotSummary?.text}
                genres={movieDetail?.overview?.genres}
                cast={movieCast}
            />
            </>
        )
    }

    if(isLoading || isFetchingMovieDetail || isFetchingMovieRatings){
        return(
            <Loading message="Cargando información de la película"/>
        );
    } else if (errorFetchingMovieDetail || errorFetchingMovieRatings){
        return <p>Ha acourrido un error al cargar la información de la película</p>
    }
       
    const movieCast = movieDetail?.fullCredits?.cast?.slice(0,20) ?? [];
    
    return (
        <div className="flex flex-row px-16 h-screen items-center justify-center">
            {renderContent()}
        </div>
    )
}

export default MovieDetail;