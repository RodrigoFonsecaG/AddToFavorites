import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Imdb } from '../../Assets/imdb.svg';
import { ReactComponent as Play } from '../../Assets/play.svg';
import styles from './MainMovie.module.css';
import useFetch from '../../Hooks/useFetch';
import { convertHours, convertIso } from '../../Helper/ConvertDates';

const MainMovie = () => {
  const [movie, setMovie] = React.useState(null);
  const { error, loading, data, request } = useFetch();

  React.useEffect(() => {
    async function fetchMovie() {

      const moviesIds = JSON.parse(localStorage.getItem('movies')) || [634649];

      if (moviesIds) {
        const randomNumber =
          Math.floor(Math.random() * (moviesIds.length - 1 - 0 + 1)) + 0;
        const randomMovie = moviesIds[randomNumber];

        const { json, response } = await request(
          `http://api.themoviedb.org/3/movie/${randomMovie}?api_key=aa716269e242781657d73e04e0af3364&language=pt&append_to_response=videos`
        );

        if (response.ok) {
          if (json.backdrop_path) {
            document.body.style.background = `url(https://image.tmdb.org/t/p/original/${json.backdrop_path}) no-repeat center center / cover black`;
          }
          else document.body.style.background = 'black';
        }

        setMovie(json);
      }
    }
    fetchMovie();
  }, [request]);


  if (movie)
    return (
      <section className={styles.mainMovie}>
        <p>
          {convertIso(movie.release_date)} | {convertHours(movie.runtime)}
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
  else return null;
};

export default MainMovie;
