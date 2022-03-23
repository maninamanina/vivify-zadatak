import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';
import AddMovieCard from './AddMovieCard';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const deleteMovie = id => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const editMovie = (id, value, number) => {
    const update = movies.map(movie => {
      if (movie.id === id) {
        return { ...movie, rating: value, votes: number };
      } else {
        return movie;
      }
    });
    setMovies(update);
  };

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <AddMovieCard movies={movies} setMovies={setMovies} />
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} deleteMovie={deleteMovie} editMovie={editMovie} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
