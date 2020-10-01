import React from 'react';
import { Link } from 'react-router-dom';

import MovieContext from '../context/MovieContext';

// Styles
import styles from '../styles/header/header.module.css';

const AppHeader = () => {
  const { movies, filterMovie } = React.useContext(MovieContext);

  const onHandleChange = (e) => {
    const filteredMovie =
      movies.length &&
      movies.filter(
        (movie) => movie.title.toLowerCase() === e.target.value.toLowerCase()
      );
    filteredMovie.length && filterMovie(filteredMovie);
  };

  return (
    <div className={styles.nav}>
      <div className={styles.nav__header}>
        <Link to='/' className={styles.nav__heading}>
          Movie Search
        </Link>
      </div>
      <div className={styles.nav__navigation}>
        <div className={styles.nav__item}>
          <Link to='/' className={styles.nav__link}>
            Movies
          </Link>
        </div>
        <div className={styles.nav__item}>
          <Link to='/about-us' className={styles.nav__link}>
            About
          </Link>
        </div>
      </div>
      <div className={styles.nav__search}>
        <input
          className={styles.nav__input}
          type='text'
          placeholder='search for movies'
          onChange={(e) => onHandleChange(e)}
        />
      </div>
    </div>
  );
};

export default AppHeader;
