import React from 'react';
import styles from './Movie.module.css';

import Image from '../../Helper/Image';
import { Link } from 'react-router-dom';

const MoviePoster = ({ url, id }) => {
  return (
    <li className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <Image src={url} alt="" />
      </Link>
    </li>
  );
};

export default MoviePoster;
