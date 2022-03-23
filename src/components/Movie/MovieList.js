import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, deleteMovie, editMovie) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard
        key={movie.id}
        movie={movie}
        movies={movies}
        deleteMovie={() => deleteMovie(movie.id)}
        editMovie={editMovie}
      />
    ))}
  </div>
);

const MovieList = ({ movies, deleteMovie, editMovie }) => <div>{getMovies(movies, deleteMovie, editMovie)}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
