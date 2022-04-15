import React from 'react'
import './Form.css';
import { ReactComponent as Register } from '../../Assets/register.svg';
import Input from '../Input';

const RegisterForm = () => {
  return (
    <section className="formContainer">
      <section className="form">
        <div className="formIcon">
          <Register />
        </div>
        <h1 className="subtitle">Registre-se</h1>
        <form className="formFields">
          <Input id="nome" label="Nome" type="text" />
          <Input id="email" label="Email" type="email" />
          <Input id="password" label="Senha" type="password" />
          <button>Registre-se</button>
        </form>
      </section>
    </section>
  );
}

export default RegisterForm