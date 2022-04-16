import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import {ReactComponent as Logo } from '../Assets/logo.svg'
import { ReactComponent as Login } from '../Assets/login.svg';

import { UserContext } from '../Context/userContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

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

        {data ? <Link to="/">{data.name} </Link>
          :
          <Link className={styles.login} to="/login">
            <Login />
            Login
          </Link>
        }
      </nav>
    </header>
  );
}

export default Header