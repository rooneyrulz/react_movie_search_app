import React from 'react';

// Contexts
import MovieContext from '../context/MovieContext';

// Bootstrap Components
import { Container } from '../bootstrap.module';

const Movie = () => {
  const { movies } = React.useContext(MovieContext);

  return <Container>Movies</Container>;
};

export default Movie;
