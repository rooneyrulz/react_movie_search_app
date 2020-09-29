import React from 'react';
import MovieContext from '../context/MovieContext';

const MovieProvider = (props) => {
  const [movieData, setMovieData] = React.useState({
    loading: true,
    movies: [],
  });

  const setLoading = (payload) =>
    setMovieData({ ...movieData, loading: payload });

  const setMovies = (payload) =>
    setMovieData({ ...movieData, movies: [...payload] });

  const filterMovie = (payload) =>
    setMovieData({ ...movieData, movies: [...payload] });

  return (
    <MovieContext.Provider
      value={{ ...movieData, setLoading, setMovies, filterMovie }}
    >
      {' '}
      {props.children}{' '}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
