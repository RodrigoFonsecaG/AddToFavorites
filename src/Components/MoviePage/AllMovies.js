import React from 'react';
import styles from './AllMovies.module.css';
import { ReactComponent as Add } from '../../Assets/add.svg';
import { Link } from 'react-router-dom';

const AllMovies = () => {
  return (
    <section className={styles.allMovies}>
      <div className={styles.title}>
        <h2 className="subtitle">Filmes Favoritos</h2>
        <Link to="/add">
          <Add />
        </Link>
      </div>
      <ul className={styles.moviesList}>
        <li className={styles.movie}>
          <img
            src="https://br.web.img2.acsta.net/pictures/21/12/06/10/52/1598963.jpg"
            alt=""
          />
        </li>
        <li className={styles.movie}>
          <img
            src="https://br.web.img2.acsta.net/pictures/21/12/06/10/52/1598963.jpg"
            alt=""
          />
        </li>
        <li className={styles.movie}>
          <img
            src="https://br.web.img2.acsta.net/pictures/21/12/06/10/52/1598963.jpg"
            alt=""
          />
        </li>
        <li className={styles.movie}>
          <img
            src="https://wallpaperboat.com/wp-content/uploads/2021/12/19/79926/spider-man-no-way-home-12.jpg"
            alt=""
          />
        </li>
      </ul>
    </section>
  );
};

export default AllMovies;
