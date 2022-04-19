import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import LoginForm from './Components/Login/LoginForm';
import RegisterForm from './Components/Login/RegisterForm';

import AddMovie from './Components/AddMovie/AddMovie'

import { UserStorage } from './Context/userContext';
import ProtectedRoute from './Components/ProtectedRoute';
import SingleMovie from './Components/SingleMovie/SingleMovie';

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
                <ProtectedRoute needLogin={false}>
                  <LoginForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="register"
              element={
                <ProtectedRoute needLogin={false}>
                  <RegisterForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="add"
              element={
                <ProtectedRoute needLogin={true}>
                  <AddMovie />
                </ProtectedRoute>
              }
            />
            <Route path="movie/:id" element={<SingleMovie />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
