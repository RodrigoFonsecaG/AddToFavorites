import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import './HeaderMenuMobile.css';
import { ReactComponent as Logo } from '../Assets/logo.svg';
import { ReactComponent as Login } from '../Assets/login.svg';

import { fallDown as Menu } from 'react-burger-menu';

import { UserContext } from '../Context/userContext';
import useMedia from '../Hooks/useMedia';



const Header = () => {
  const { data } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');

  const [isOpen, setOpen] = React.useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

    const closeMenu = () => {
      setOpen(false);
    };

  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.logo} to="/">
          <Logo />
        </Link>

        {mobile ? (
          <Menu right isOpen={isOpen} onOpen={handleIsOpen}>
            <div className={styles.categories}>
              <Link to="/movies" onClick={closeMenu}>
                Filmes
              </Link>
              <Link to="/tv-shows" onClick={closeMenu}>
                TV Shows
              </Link>
              <Link to="/animations" onClick={closeMenu}>
                Animações
              </Link>
            </div>

            {data ? (
              <Link to="/" onClick={closeMenu}>
                {data.name}
              </Link>
            ) : (
              <Link className={styles.login} to="/login" onClick={closeMenu}>
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
};

export default Header;
