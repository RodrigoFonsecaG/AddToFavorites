import React, { useEffect } from 'react';
import styles from './SingleMovie.module.css';
import useFetch from '../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import MainInfos from '../Home/MainMovieHome/MainInfos';
import OthersInfo from './OthersInfo';

const SingleMovie = () => {
  const params = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchMovie() {
      const { response, json } = await request(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=aa716269e242781657d73e04e0af3364&append_to_response=videos&language=pt-BR`
      );

      if (response.ok) {
        if (json.backdrop_path) {
          document.body.style.background = `url(https://image.tmdb.org/t/p/original/${json.backdrop_path})  center center / cover black`;
        } else document.body.style.background = 'black';
      }
    }

    fetchMovie();
  }, [params.id, request]);


  if (data === null) return null;
  return (
    <div style={styles.singleMovie}>
      <MainInfos movie={data} />
      <OthersInfo movie={data}/>
    </div>
  );
};

export default SingleMovie;
