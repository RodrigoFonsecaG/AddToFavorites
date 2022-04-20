import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Trash } from '../../Assets/trash.svg';

const ButtonDeleteMovie = ({ id }) => {
  const navigate = useNavigate();

          const movies = localStorage.getItem('movies');
    function handleClick() {
      

      

    if (movies) {
        const filteredMovies = JSON.parse(movies).filter((movie) => {
        return +movie !== id;
      });
        

      localStorage.setItem('movies', JSON.stringify(filteredMovies));

      navigate('/');
    }
  }

  return (
      <div style={{ paddingBottom: '5rem' }} className="delete">
          {movies.includes(id) ? <button onClick={handleClick}>
        <Trash />
        Remover dos favoritos
      </button> : null}
      
    </div>
  );
};

export default ButtonDeleteMovie;
