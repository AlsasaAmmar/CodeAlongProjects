import React, { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import SearchArea from './components/SearchArea'
import MovieList from './components/MovieList'
import Pagination from './components/Pagination'
import MovieInfo from './components/MovieInfo'


function App () {
  const [movies, setMovies] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerms, setSearchTerms] = useState('')
  const [currentMovie, setCurrentMovie] = useState(null)

  const API_KEY = '59f03158e89c90fc3f8ebcfe63409c98'
  const handleSubmit = e => {
    e.preventDefault()
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerms}`
    )
      .then(data => data.json())
      .then(data => {
        setMovies([...data.results])
        setTotalResults(data.total_results)
      })
  }
  const nextPage = pageNumber => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerms}&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        setMovies([...data.results])
        setCurrentPage(pageNumber)
      })
  }
  const handleChange = e => {
    setSearchTerms(e.target.value)
  }
  const numberPages = Math.floor(totalResults / 20)
  console.log(totalResults, numberPages)

  const viewMovieInfo = id => {
    const filteredMovie = movies.filter(movie => movie.id == id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    setCurrentMovie(newCurrentMovie)
  }

  const closeMovieInfo = () => {
    setCurrentMovie(null)
  }
console.log(currentMovie == null);

  return (
    <div className='App'>
      <Nav />
      {currentMovie == null ? (
        <div>
          <SearchArea handleSubmit={handleSubmit} handleChange={handleChange} />
          <MovieList movies={movies} viewMovieInfo={viewMovieInfo}/>
          {totalResults > 20 && (
            <Pagination
              pages={numberPages}
              nextPage={nextPage}
              currentPage={currentPage}
            />)}
        </div>) : (
           <MovieInfo currentMovie={currentMovie} closeMovieInfo={closeMovieInfo} /> 
      )}
    </div>
  )
}

export default App
