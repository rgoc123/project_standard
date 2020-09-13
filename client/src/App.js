import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './components/header.js'
import RegisterForm from './components/registerForm.js'
import LoginForm from './components/loginForm.js'
import MainPage from './components/mainPage.js'

import configureStore from './store/store'

import './App.css'

function App() {
  let store = configureStore();;
  document.addEventListener('DOMContentLoaded', () => {
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      window.getState = store.getState;
      window.dispatch = store.dispatch;
      delete window.currentUser;
    } else {
      store = configureStore();
      // debugger
      window.getState = store.getState;
      window.dispatch = store.dispatch;
    }
  });

  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Header />
          <div>Hi</div>
          <Route path="/" component={MainPage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
