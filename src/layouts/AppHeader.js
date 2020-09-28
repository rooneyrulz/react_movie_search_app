import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from '../styles/header.module.css';

const AppHeader = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__header}>
        <Link to='/' className={styles.nav__heading}>
          Moviesearch
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
        />
      </div>
    </div>
  );
};

export default AppHeader;
