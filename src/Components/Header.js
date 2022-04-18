import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import './HeaderMenuMobile.css'
import {ReactComponent as Logo } from '../Assets/logo.svg'
import { ReactComponent as Login } from '../Assets/login.svg';

import { fallDown as Menu } from 'react-burger-menu';

import { UserContext } from '../Context/userContext';
import useMedia from '../Hooks/useMedia';

const Header = () => {
  const { data } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');

  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.logo} to="/">
          <Logo />
        </Link>

        {mobile ? (
          <Menu right>
            <div className={styles.categories}>
              <Link to="/movies">Filmes</Link>
              <Link to="/tv-shows">TV Shows</Link>
              <Link to="/animations">Animações</Link>
            </div>

            {data ? (
              <Link to="/">{data.name} </Link>
            ) : (
              <Link className={styles.login} to="/login">
                <Login />
                Login
              </Link>
            )}
          </Menu>
        ) : (
          <>
            <div className={styles.categories}>
              <Link to="/movies">Filmes</Link>
              <Link to="/tv-shows">TV Shows</Link>
              <Link to="/animations">Animações</Link>
            </div>

            {data ? (
              <Link to="/">{data.name} </Link>
            ) : (
              <Link className={styles.login} to="/login">
                <Login />
                Login
              </Link>
            )}
          </>
        )}

      </nav>
    </header>
  );
}

export default Header