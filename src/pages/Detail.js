import React, { useState, useEffect } from 'react'
const API_KEY = '34b3701a'

export const Detail = ({ id }) => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        // Actualiza el título del documento usando la Browser API
        _fechMovie()
    }, []);

    const _fechMovie = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        const data = await response.json()
        console.log(data)
        setMovie(data)
    }

    const _goBack = () => {
        window.history.back();
    }

    const { Title, Poster, Actors, Metascore, Plot } = movie
    return (
        <div>
            <button onClick={_goBack}>return</button>
            <h1>{Title}</h1>
            <img src={Poster} />
            <h2>{Actors}</h2>
            <span>{Metascore}</span>
            <p>{Plot}</p>
        </div>
    )
}