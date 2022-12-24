import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetchingMovieRatings: false,
    isFetchingMovieDetail: false,
    isLoading: true,
    errorFetchingMovieRatings: null,
    errorFetchingMovieDetail: null,
    successFetchingMovieRatings: null,
    successFetchingMovieDetail: null,
    ratings: {},
    movieDetail: {}
}

const MoviesSlice = createSlice({
    name: 'movies-slice',
    initialState,
    reducers:  {
        //Raiting
        startFetchMovieRatings(state, action){
            state.isLoading = false;
            state.isFetchingMovieRatings = true;
        },
        successFetchMovieRatings(state, action){
            state.isLoading = false;
            state.isFetchingMovieRatings = false;
            state.successFetchMovieRatings = true;
            state.errorFetchMovieRatings = null;
            state.ratings = action.payload.data;
        },
        errorFetchMovieRatings(state, action){
            state.isLoading = false;
            state.isFetchingMovieRatings = false;
            state.successFetchMovieRatings = false;
            state.errorFetchMovieRatings = action.payload.error;
            state.ratings = {};
        },
        //Detail
        startFetchMovieDetail(state, action){
            state.isFetchingMovieDetail = true;
        },
        successFetchMovieDetail(state, action){
            state.isFetchingMovieDetail = false;
            state.successFetchingMovieDetail = true;
            state.errorFetchingMovieDetail = null;
            state.movieDetail = action.payload;
        },
        errorFetchMovieDetail(state, action){
            state.isFetchingMovieDetail = false;
            state.successFetchingMovieDetail = false;
            state.errorFetchingMovieDetail = action.payload.error;
            state.movieDetail = {};
        },
    }
})

const {actions, reducer} = MoviesSlice;

const {
    startFetchMovieRatings,
    successFetchMovieRatings,
    errorFetchMovieRatings,
    startFetchMovieDetail,
    successFetchMovieDetail,
    errorFetchMovieDetail
 } = actions;

export {
    startFetchMovieRatings,
    successFetchMovieRatings,
    errorFetchMovieRatings,
    startFetchMovieDetail,
    successFetchMovieDetail,
    errorFetchMovieDetail
};

 export default reducer;



