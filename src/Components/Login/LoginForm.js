import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import styles from './LoginForm.module.css';
import './Form.css'
import {ReactComponent as User} from '../../Assets/user.svg'
import Head from '../Head';

const LoginForm = () => {
  return (
    <section className="formContainer">
      <Head title="Login" />
      <section className="form">
        <div className="formIcon">
          <User />
        </div>
        <h1 className="subtitle">Login</h1>
        <form className="formFields">
          <Input id="email" label="Email" type="email" />
          <Input id="password" label="Senha" type="password" />
          <button>Entrar</button>
        </form>
      </section>

      <section className={styles.register}>
        <h1 className="subtitle">Ainda não possui conta?</h1>
        <Link to="/register">
          {' '}
          {'>>'} Registre-se aqui {'<<'}
        </Link>
      </section>
    </section>
  );
}

export default LoginForm