import React from 'react'
import './Form.css';
import { ReactComponent as Register } from '../../Assets/register.svg';
import Input from '../Input';
import useForm from '../../Hooks/useForm';

import { UserContext } from '../../Context/userContext';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

  const navigate = useNavigate();

  const email = useForm('email');
  const name = useForm();
  const password = useForm();

  const {userLogin} = React.useContext(UserContext)

  function handleSubmit(event) {
    event.preventDefault();

    const values = {
      name: name.value,
      email: email.value,
      password: password.value
    }

    window.localStorage.setItem('user', JSON.stringify(values));

    if (name.validate() && password.validate()) {
      userLogin(JSON.stringify(values));

      navigate('/');
    }

  }

  return (
    <section className="formContainer">
      <section className="form">
        <div className="formIcon">
          <Register />
        </div>
        <h1 className="subtitle">Registre-se</h1>
        <form className="formFields" onSubmit={handleSubmit}>
          <Input id="name" label="Nome" type="text" {...name}/>
          <Input id="email" label="Email" type="email" {...email}/>
          <Input id="password" label="Senha" type="password" {...password}/>
          <button>Registre-se</button>
        </form>
      </section>
    </section>
  );
}

export default RegisterForm