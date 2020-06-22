import React, { useState, useEffect } from 'react'
import ButtonBackToHome from '../components/ButtonBackToHome'

const API_KEY = ''

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

    const { Title, Poster, Actors, Metascore, Plot } = movie
    return (
        <div>
            <ButtonBackToHome/>
            <h1>{Title}</h1>
            <img alt="poster" src={Poster} />
            <h2>{Actors}</h2>
            <span>{Metascore}</span>
            <p>{Plot}</p>
        </div>
    )
}
