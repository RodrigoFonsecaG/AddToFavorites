import React from 'react';
//import styles from './Home.module.css';
import HomeMovie from '../Components/MoviePage/HomeMovie';

document.body.style.background =
  'url("https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg") no-repeat center center / cover black';


const Home = () => {
  return (
      <HomeMovie/>
  );
};

export default Home;
