import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home';
import LoginForm from './Components/Login/LoginForm'
import RegisterForm from './Components/Login/RegisterForm';


const App = () => {
  return (
    <div className="content">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
