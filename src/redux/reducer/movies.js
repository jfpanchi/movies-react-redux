import { 
    errorFetchMovieRatings, 
    startFetchMovieRatings, 
    successFetchMovieRatings,
    errorFetchMovieDetail, 
    startFetchMovieDetail, 
    successFetchMovieDetail,

} from "../actions/movies";

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

const MoviesReducer = (state=initialState, action) => {
  switch (action.type) {
    //Raiting
    case startFetchMovieRatings.toString():
        return {
            ...state,
            isLoading: false,
            isFetchingMovieRatings: true,
        }
    case successFetchMovieRatings.toString():    
        return {
            ...state,
            isLoading: false,
            isFetchingMovieRatings: false,
            successFetchMovieRatings: true,
            errorFetchMovieRatings: null,
            ratings: action.payload.data,
        }
    case errorFetchMovieRatings.toString():
        return {
            ...state,
            isLoading: false,
            isFetchingMovieRatings: false,
            successFetchMovieRatings: false,
            errorFetchMovieRatings: action.payload.error,
            ratings: {},
        }
    //Detail
    case startFetchMovieDetail.toString():
        return {
            ...state,
            isFetchingMovieDetail: true,
        }
    case successFetchMovieDetail.toString():    
        return {
            ...state,
            isFetchingMovieDetail: false,
            successFetchingMovieDetail: true,
            errorFetchingMovieDetail: null,
            movieDetail: {
                ...action.payload
            },
        }
    case errorFetchMovieDetail.toString():
        return {
            ...state,
            isFetchingMovieDetail: false,
            successFetchingMovieDetail: false,
            errorFetchingMovieDetail: action.payload.error,
            movieDetail: {},
        }
    default:
       return state;
  }
}

export default MoviesReducer;