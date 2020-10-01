import React from 'react';

import styles from '../styles/movie/movie.module.css';

const MovieItem = ({ movie }) => {
  return (
    <div className={styles.movie__item}>
      <h5>{movie.title}</h5>
      <p>{movie.genre}</p>
      <p>{movie.last_released}</p>
    </div>
  );
};

export default MovieItem;
