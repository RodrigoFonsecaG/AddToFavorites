import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Imdb } from '../../Assets/imdb.svg';
import { ReactComponent as Play } from '../../Assets/play.svg';
import styles from './MainMovie.module.css';

const MainMovie = () => {
  return (
    <section className={styles.mainMovie}>
      <p>2021 | PG-13 | 2h 28m</p>
      <h1 className="title">SPIDER-MAN: NO WAY HOME</h1>
      <p className={styles.categories}>Action | Adventure | Fantasy</p>
      <div className={styles.imdb}>
        <Imdb />
        <p>8.5</p>
      </div>

      <Link className="button" to="/">
        <Play />
        <p>Assista agora</p>
      </Link>
    </section>
  );
};

export default MainMovie;
