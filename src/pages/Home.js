import React, {useState} from 'react'
import { MovieList } from '../components/MovieList'
import { Title } from '../components/Title'
import { SearchForm } from '../components/SearchForm'

export const Home = () => {
    const [results, setResults] = useState([])
    const [usedSearch, setUsedSearch] = useState(false)

    const _handleResults = (results) => {
        setResults(results)
        setUsedSearch({ usedSearch: true })
    }

    const _renderResults = () => {
        return results.length === 0
            ? <p>Sorry! results not fount</p>
            : <MovieList movies={results} />
    }
    return (
        <div>
            <Title>Search Movies</Title>
            <div className="SearchForm-wrapper">
                <SearchForm onResults={_handleResults} />
            </div>
            {
                usedSearch
                    ? _renderResults()
                    : <small>Use the form tho search a movie</small>
            }
        </div>
    )
}