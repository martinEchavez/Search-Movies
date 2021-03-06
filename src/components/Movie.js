import React from 'react'

import { Link } from 'react-router-dom'

export const Movie = ({id, poster, title, year }) => {
    return (
        <Link to={`/detail/${id}`} className="card">
            <div className="card-image">
                <figure className="image">
                    <img
                        alt={title}
                        src={poster}
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{year}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}