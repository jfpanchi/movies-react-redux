import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
    'X-RapidAPI-Key': '80dc7592edmsh1e88d2f76f36580p16bfd1jsn8e9428ab6bb6',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://online-movie-database.p.rapidapi.com'}),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url: `/title/find?q=${title}`,
                method: 'GET',
                headers
            })
        })
    })
});

export const { useFetchMoviesQuery } = moviesApi;