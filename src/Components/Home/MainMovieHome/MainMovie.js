import React from 'react';
import useFetch from '../../../Hooks/useFetch';
import MainInfos from './MainInfos';

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
          `https://api.themoviedb.org/3/movie/${randomMovie}?api_key=aa716269e242781657d73e04e0af3364&language=pt&append_to_response=videos`
        );

        if (response.ok) {
          if (json.backdrop_path) {
            document.body.style.background = `url(https://image.tmdb.org/t/p/original/${json.backdrop_path})  center center / cover black`;
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
      <MainInfos movie={movie}/>
    );
  else return null;
};

export default MainMovie;
