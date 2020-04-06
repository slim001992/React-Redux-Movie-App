import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from './moviecard';
import Movieadd from './movieadd';


function MovieList({films}) {
    return (
        <div className="row">
            {films.map((film, i) => (
                <MovieCard key={i} e={film}  />
            ))}
          <Movieadd />
        </div>
    )
}

export default MovieList;
