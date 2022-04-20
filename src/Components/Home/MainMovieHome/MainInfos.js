import React from 'react';
import { ReactComponent as Imdb } from '../../../Assets/imdb.svg';
import { ReactComponent as Play } from '../../../Assets/play.svg';
import styles from './MainInfos.module.css';
import { convertHours, convertIso } from '../../../Helper/ConvertDates';


const MainInfos = ({ movie }) => {
  return (
    <section className={styles.mainMovie}>
      <p>
        {convertIso(movie.release_date)} | {convertHours(movie.runtime)}
        { movie.production_countries[0] ?
          <img
            className={styles.flag}
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${movie.production_countries[0].iso_3166_1}.svg`}
            alt={movie.production_countries[0].name}
          />

          : null
        }
      </p>
      <h1 className="title">{movie.title}</h1>
      <div className={styles.categories}>
        {movie.genres.map((genre, index) =>
          index === movie.genres.length - 1 ? (
            <p key={genre.id}>{genre.name} </p>
          ) : (
            <p key={genre.id}>{genre.name} | </p>
          )
        )}
      </div>
      <div className={styles.imdb}>
        <Imdb />
        <p>{movie.vote_average}</p>
      </div>

      {movie.videos.results[0] ? (
        <a
          className="button"
          href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
          target="_blank"
          rel="noreferrer"
        >
          <Play />
          <p>Assista agora</p>
        </a>
      ) : null}
    </section>
  );
};

export default MainInfos;
