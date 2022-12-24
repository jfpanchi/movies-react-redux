import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
    'X-RapidAPI-Key': '0284bd2421msha892f01f4e4d83bp10ea1ajsn436a70305b49',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://imdb8.p.rapidapi.com'}),
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