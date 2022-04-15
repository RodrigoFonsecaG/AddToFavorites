import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import {ReactComponent as Logo } from '../Assets/logo.svg'
import { ReactComponent as Login } from '../Assets/login.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.logo} to="/">
          <Logo />
        </Link>
        <div className={styles.categories}>
          <Link to="/movies">Filmes</Link>
          <Link to="/tv-shows">TV Shows</Link>
          <Link to="/animations">Animações</Link>
        </div>


          <Link className={styles.login} to="/login">
            <Login />
            Login
          </Link>
      </nav>
    </header>
  );
}

export default Header