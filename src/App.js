import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import LoginForm from './Components/Login/LoginForm';
import RegisterForm from './Components/Login/RegisterForm';

import AddMovie from './Components/MoviePage/AddMovie'

import { UserStorage } from './Context/userContext';
import ProtectedRoute from './Components/ProtectedRoute';

const App = () => {
  return (
    <div className="content">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="login"
              element={
                <ProtectedRoute path="/login">
                  <LoginForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="register"
              element={
                <ProtectedRoute path="/register">
                  <RegisterForm />
                </ProtectedRoute>
              }
            />
            <Route path="add" element={<AddMovie/>}/>
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
