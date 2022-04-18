import React from 'react';
import styles from './AllMovies.module.css';
import { ReactComponent as Add } from '../../Assets/add.svg';
import { ReactComponent as Next } from '../../Assets/next.svg';
import { ReactComponent as Prev } from '../../Assets/prev.svg';
import { Link } from 'react-router-dom';
import Movie from './Movie';
import { UserContext } from '../../Context/userContext';
import useFetch from '../../Hooks/useFetch';

//https://api.themoviedb.org/3/search/movie?api_key=aa716269e242781657d73e04e0af3364&query=spiderman&language=pt

//https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg

//http://api.themoviedb.org/3/movie/157336?api_key=aa716269e242781657d73e04e0af3364&append_to_response=videos

const AllMovies = () => {
  const { login } = React.useContext(UserContext);
  const slideWrapper = React.useRef();
  const { data, loading, error, request } = useFetch();

  const [moviesImages, setMoviesImages] = React.useState('');
  const [moviesIds, setMoviesIds] = React.useState('');

  const moviesId = localStorage.getItem('movies');

  React.useEffect(() => {
    if (moviesId) {
      async function fetchMovies() {
        JSON.parse(moviesId).map(async (movie, index) => {
          const { json } = await request(
            `https://api.themoviedb.org/3/movie/${movie}?api_key=aa716269e242781657d73e04e0af3364`
          );

          setMoviesImages((prevMovie) => [...prevMovie, json.poster_path]);
          setMoviesIds((prevMovie) => [...prevMovie, json.id]);
        });
      }
      fetchMovies();
    }
  }, [moviesId, request]);

  function handlePrev() {
    slideWrapper.current.scrollLeft -= slideWrapper.current.offsetWidth * 0.9;
  }

  function handleNext() {
    slideWrapper.current.scrollLeft += slideWrapper.current.offsetWidth * 0.9;
  }

  return (
    <section className={styles.allMovies}>
      <div className={styles.title}>
        <h2 className="subtitle">Filmes Favoritos</h2>
        {login ? (
          <Link to="/add">
            <Add />
          </Link>
        ) : null}
      </div>
      <div className={styles.commands}>
        <button onClick={handlePrev}>
          <Prev />
        </button>
        <button onClick={handleNext}>
          <Next />
        </button>
      </div>

      <ul className={styles.moviesList} ref={slideWrapper}>
        {moviesImages
          ? moviesImages.map((movie, index) => (
                <Movie
                  id={moviesIds[index]}
                  key={moviesIds[index]}
                  url={`https://image.tmdb.org/t/p/original${movie}`}
              />
            ))
          : null}
      </ul>
    </section>
  );
};

export default AllMovies;
