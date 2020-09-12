import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';

import RegisterForm from './components/registerForm.js';
import LoginForm from './components/loginForm.js';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <h1>Standard Project!</h1>
        <div>Hi</div>
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </div>
    </HashRouter>
  );
}

export default App;
