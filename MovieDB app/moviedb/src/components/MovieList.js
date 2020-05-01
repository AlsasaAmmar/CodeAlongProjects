import React from 'react';
import Movie from './Movie'

function MovieList({movies, viewMovieInfo}) {
    return (
        <div className="container">
            <div className="row">
                <div className ="col s12"> 
                {
                    movies.map((movie,i)=>{
                        return (
                            <Movie key={i} viewMovieInfo={viewMovieInfo} movieId={movie.id} image={movie.poster_path}/> 
                        )
                    } )
                }
                </div>
                </div> 
        </div>
    )
}

export default MovieList;
