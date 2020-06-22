import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const API_KEY = '34b3701a'

export const Detail = ({ match }) => {
    const [movie, setMovie] = useState([]);
    let { id } = match.params

    useEffect(() => {
        _fechMovie()
    }, []);

    const _fechMovie = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        const data = await response.json()
        setMovie(data)
    }

    const _goBack = () => {
        window.history.back();
    }

    const { Title, Poster, Actors, Metascore, Plot } = movie
    return (
        <div>
            <Link type='button' to={'/'}>return</Link>
            <h1>{Title}</h1>
            <img alt="poster" src={Poster} />
            <h2>{Actors}</h2>
            <span>{Metascore}</span>
            <p>{Plot}</p>
        </div>
    )
}