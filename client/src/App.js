import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';

import Header from './components/header.js'
import RegisterForm from './components/registerForm.js'
import LoginForm from './components/loginForm.js'
import MainPage from './components/mainPage.js'

import './App.css'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div>Hi</div>
        <Route path="/" component={MainPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </div>
    </HashRouter>
  );
}

export default App;
