import React from 'react'
import Cast from './Cast'
import Genre from './Genre'
import Rating from './Rating'

const RightContainer = ({
    title,
    year,
    rating,
    synopsis,
    genres,
    cast
}) => {
  return (
    <div className="w-2/3 flex flex-col items-start overflow-y-auto my-16 justify-center">
            <h2 className="text-4xl font-bold my-1">{`${title} (${year})`}</h2>
            <Rating rating={rating}/>
            <p className="text-left">{synopsis}</p>
            <Genre genres={genres}/>
            <Cast cast={cast}/>
        </div>
  )
}

export default RightContainer