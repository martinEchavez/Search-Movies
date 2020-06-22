import React, { useState } from 'react'
const API_KEY = ''

export const SearchForm = ({onResults}) => {

    const [inputMovie, setInputMovie] = useState()

    const _handleChange = (e) => {
        setInputMovie({ inputMovie: e.target.value })
    }

    const _handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        const data = await response.json()
        const { Search = []} = data
        onResults(Search)
    }
    return (
        <form onSubmit={_handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        onChange={_handleChange}
                        placeholder="Movie to search"
                    />
                </div>
                <div className="control">
                    <button className="button is-primary">
                        Search
                    </button>
                </div>
            </div>
        </form>
    )

}
