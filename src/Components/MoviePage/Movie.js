import React from 'react'
import styles from './Movie.module.css';

import Image from '../../Helper/Image';
import { Link } from 'react-router-dom';

const Movie = ({ url, id }) => {
  return (
    <li className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <Image
          src={
            url
              ? url
              : 'https://via.placeholder.com/650x970.png?text=Imagem-indisponivel'
          }
          alt=""
        />
      </Link>
    </li>
  );
}

export default Movie