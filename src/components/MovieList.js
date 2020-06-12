import React from 'react'
import { Movie } from './Movie'

export const MovieList = ({movies}) => {
    return (
        <div className="MovieList">
            {
                movies.map(movie => {
                    return (
                        <div key={movie.imdbID} className="MovieList-item">
                            <Movie
                                id={movie.imdbID}
                                poster={movie.Poster}
                                title={movie.Title}
                                year={movie.Year}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}