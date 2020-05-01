import React from 'react'

function MovieInfo ({ closeMovieInfo, currentMovie }) {
    
  return (
    <div>
      <div
        className='container'
        onClick={closeMovieInfo}
        style={{ cursor: 'pointer', paddingTop: 50 }}
      >
        <div className='row'>
          <p>Go back</p>
        </div>
        <div className='row'>
            <div className="col s12 m4"> 
          {currentMovie.poster_path == null ? (
            <img
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt='Card Image'
              style={{ width: '100%', height: 360 }}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w185${currentMovie.poster_path}`}
              alt='card image'
              style={{ width: '100%', height: 360 }}
            />
          )}
          </div>
        </div>
        <div className='col s12 m8'>
          <div className='info-container'>
            <p>{currentMovie.title}</p>
            <p>{currentMovie.release_date}</p>
            <p>{currentMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfo
