import React from 'react';
import styles from './AllMovies.module.css';
import { ReactComponent as Add } from '../../Assets/add.svg';
import { ReactComponent as Next } from '../../Assets/next.svg';
import { ReactComponent as Prev } from '../../Assets/prev.svg';
import { Link } from 'react-router-dom';
import Movie from './Movie';

const AllMovies = () => {

  const slideWrapper = React.useRef();


    function handlePrev() {
        slideWrapper.current.scrollLeft -= slideWrapper.current.offsetWidth;
    }

    function handleNext() {
                console.log(slideWrapper.current.offsetWidth);
                console.log(slideWrapper.current.offsetHeight);
                console.log(slideWrapper.current.clientWidth);
                console.log(slideWrapper.current.scrollLeft);
                console.log(slideWrapper.current.scrolLeft);
                console.log(slideWrapper.current.scroll());
                console.log(slideWrapper.current.getBoundingClientRect());
                console.log(slideWrapper.current.offsetLeft);
        console.log(slideWrapper.current.scrollWidth);
        console.log('--------------------------')
        slideWrapper.current.scrollLeft += slideWrapper.current.offsetWidth;
    }
    


  return (
    <section className={styles.allMovies}>
      <div className={styles.title}>
        <h2 className="subtitle">Filmes Favoritos</h2>
        <Link to="/add">
          <Add />
        </Link>
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
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie
          url={
            'https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg'
          }
        />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </ul>
    </section>
  );
};

export default AllMovies;
