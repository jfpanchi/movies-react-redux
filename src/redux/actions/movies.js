import { createAction } from "@reduxjs/toolkit";

//Importación de actios slices - Demostración
import {
    startFetchMovieRatings as startFetchMovieRatingsSlice,
    successFetchMovieRatings as successFetchMovieRatingsSlice,
    errorFetchMovieRatings as errorFetchMovieRatingsSlice,
    startFetchMovieDetail as startFetchMovieDetailSlice,
    successFetchMovieDetail as successFetchMovieDetailSlice,
    errorFetchMovieDetail as errorFetchMovieDetailSlice
} from "../slices/movies"

const BASE_URL = "https://online-movie-database.p.rapidapi.com";
const headers = {
    'X-RapidAPI-Key': '80dc7592edmsh1e88d2f76f36580p16bfd1jsn8e9428ab6bb6',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
};

export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATINGS');
export const successFetchMovieRatings = createAction('SUCCESS_FETCH_MOVIE_RATINGS');
export const errorFetchMovieRatings = createAction('ERROR_FETCH_MOVIE_RATINGS');

export const fetchMovieRatings = (movieId) => async(dispatch) => {
    try {
        //dispatch(startFetchMovieRatings());
        dispatch(startFetchMovieRatingsSlice());
        const response = await fetch(`${BASE_URL}/title/get-ratings?tconst=${movieId}`, {headers});
        const data = await response.json();
        //dispatch(successFetchMovieRatings({data}));
        dispatch(successFetchMovieRatingsSlice({data}));
    } catch (error) {
        //dispatch(errorFetchMovieRatings({error}));
        dispatch(errorFetchMovieRatingsSlice({error}));
    }
}

export const startFetchMovieDetail = createAction('START_FETCH_MOVIE_DETAIL');
export const successFetchMovieDetail = createAction('SUCCESS_FETCH_MOVIE_DETAIL');
export const errorFetchMovieDetail = createAction('ERROR_FETCH_MOVIE_DETAIL');

export const fetchMovieDetail = (movieId) => async(dispatch) => {
    try {
        //dispatch(startFetchMovieDetail());
        dispatch(startFetchMovieDetailSlice());
        const overviewDetailsResponse = await fetch(`${BASE_URL}/title/get-overview-details?tconst=${movieId}`, {headers});
        const overviewDetailsData = await overviewDetailsResponse.json();

        const topCastResponse = await fetch(`${BASE_URL}/title/get-top-cast?tconst=${movieId}`, {headers});
        const topCastData = await topCastResponse.json();

        const detailsResponse = await fetch(`${BASE_URL}/title/get-details?tconst=${movieId}`, {headers});
        const detailsData = await detailsResponse.json();

        const fullCreditsResponse = await fetch(`${BASE_URL}/title/get-full-credits?tconst=${movieId}`, {headers});
        const fullCreditsData = await fullCreditsResponse.json();

        /* dispatch(successFetchMovieDetail({
            overview: overviewDetailsData,
            topCast: topCastData,
            details: detailsData,
            fullCredits: fullCreditsData
        })); */
        dispatch(successFetchMovieDetailSlice({
            overview: overviewDetailsData,
            topCast: topCastData,
            details: detailsData,
            fullCredits: fullCreditsData
        }));
    } catch (error) {
        //dispatch(errorFetchMovieDetail({error}));
        dispatch(errorFetchMovieDetailSlice({error}));
    }
}