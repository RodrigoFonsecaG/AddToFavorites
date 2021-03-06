import React from 'react';
import MainMovie from './MainMovieHome/MainMovie.js';
import AllMovies from './AllMovies';
import styles from './HomeMovie.module.css';


const HomeMovie = () => {
  return (
    <div className={styles.home}>
      <MainMovie />
      <AllMovies/>
    </div>
  );
}

export default HomeMovie