import React from 'react';
import './App.scss';
import Login from './login/Login';
import User from './user/User';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/users' element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
