import React from 'react'

const Genre = ({ genres }) => {
  return (
    <div className="felx flex-row my-1">
                <span className="font-bold mr-1">Genre:</span>
                {genres?.map((value,index) => {
                        return (
                            <span key={index}>
                                {`${value}${index !== genres.length -1 ? ',' : '.' }`}
                            </span>
                        )
                    })
                }
    </div>
  )
}

export default Genre