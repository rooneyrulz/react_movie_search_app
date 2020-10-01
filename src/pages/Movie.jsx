import React from 'react';

// Contexts
import MovieContext from '../context/MovieContext';

// Bootstrap Components
import { Container } from '../bootstrap';

import MovieItem from '../components/MovieItem';
import styles from '../styles/movie/movie.module.css';

const Movie = () => {
  const { movies } = React.useContext(MovieContext);

  return (
    <Container className={styles.movie__container}>
      {movies.length &&
        movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
    </Container>
  );
};

export default Movie;
