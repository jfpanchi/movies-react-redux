import { configureStore} from '@reduxjs/toolkit';
import { moviesApi } from '../redux/api/movies'
import MoviesReducer from '../redux/reducer/movies';
import MoviesReducerSlices from '../redux/slices/movies';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    MoviesReducerSlices,
    MoviesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});
