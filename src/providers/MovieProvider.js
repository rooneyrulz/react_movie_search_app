import React from 'react';
import MovieContext from '../context/MovieContext';

const MovieProvider = (props) => {
  const [movieData, setMovieData] = React.useState({
    loading: true,
    movies: [],
  });

  const setLoading = () => setMovieData({ ...movieData, loading: false });

  return (
    <MovieContext.Provider value={{ ...movieData, setLoading }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
