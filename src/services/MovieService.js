import movies from './movies.json';

export default class MovieService {
  static getMovies() {
    return movies
      ? movies.map(movie => {
          return { ...movie, votes: 1 };
        })
      : [];
  }
}
