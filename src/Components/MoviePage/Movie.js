import React from 'react'
import styles from './Movie.module.css';

const Movie = ({url}) => {
  return (
    <li className={styles.movie}>
      <img
        src={
          url ? url : 'https://br.web.img2.acsta.net/pictures/21/12/06/10/52/1598963.jpg'
        }
        alt=""
      />
    </li>
  );
}

export default Movie