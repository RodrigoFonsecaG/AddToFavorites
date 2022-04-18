import React from 'react';

import styles from './AddMovie.module.css';

import Input from '../Input';

import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';

import Image from '../../Helper/Image';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Next } from '../../Assets/next.svg';
import { ReactComponent as Prev } from '../../Assets/prev.svg';

const AddMovie = () => {
  const search = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  const [movies, setMovies] = React.useState(null);
  let [data, setData] = React.useState([]);
  let [page, setPage] = React.useState(1);

  async function handleSubmit(event, page) {
    event.preventDefault();

    setPage(1);

    const url = `https://api.themoviedb.org/3/search/movie?api_key=aa716269e242781657d73e04e0af3364&query=${
      search.value
    }&language=pt&page=${page || 1}`;

    const { json } = await request(url);

    setMovies(json);
  }

  function handleSelect({ target, currentTarget }) {
    target.classList.toggle('selected');

    if (data.includes(currentTarget.id)) {
      const excludeDuplicates = data.filter((item) => {
        return item !== currentTarget.id;
      });
      setData(excludeDuplicates);
    } else {
      setData((data) => {
        return [...data, currentTarget.id];
      });
    }
  }

  function handleSave() {
    let moviesLocal = JSON.parse(localStorage.getItem('movies'));

    if (moviesLocal) {
      // algum filme do data ja estiver no localStorage, retorna apenas os que nao estao presentes no localStorage
      data = data.filter((val) => !moviesLocal.includes(val));

      moviesLocal.push(...data);
      localStorage.setItem('movies', JSON.stringify(moviesLocal));
    } else localStorage.setItem('movies', JSON.stringify(data));

    navigate('/');
  }

  React.useEffect(() => {
    if(movies){
      async function fetchMovie() {
        if (page > 0 && page <= movies.total_pages) {
          const url = `https://api.themoviedb.org/3/search/movie?api_key=aa716269e242781657d73e04e0af3364&query=${
            search.value
          }&language=pt&page=${page || 1}`;

          const { json } = await request(url);

          setMovies(json);
        } else {
          setPage(1);
        }
      }

      fetchMovie();
    }
  }, [page]);



  return (
    <section className={styles.addMovie}>
      <h1 className="subtitle">Digite o nome do filme:</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input id="search" type="text" {...search} />
        <button>Pesquisar</button>
      </form>

      <section className={styles.movies}>
        {movies ? (
          <div className={styles.commands}>
            <button onClick={() => setPage(page - 1)}>
              <Prev />
            </button>
            <div className={styles.saveMovie}>
              <h2>Selecione o(s) filme(s)</h2>
              <button onClick={handleSave}>Salvar</button>
            </div>

            <button onClick={() => setPage(page + 1)}>
              <Next />
            </button>
          </div>
        ) : null}
        <ul>
          {movies
            ? movies.results.map((movie) => (
                <li
                  key={movie.id}
                  className={styles.movie}
                  onClick={handleSelect}
                  id={movie.id}
                >
                  <Image
                    alt={movie.original_title}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        : `https://via.placeholder.com/650x970.png?text=${movie.original_title}`
                    }
                  />
                </li>
              ))
            : null}
        </ul>
      </section>
    </section>
  );
};

export default AddMovie;
