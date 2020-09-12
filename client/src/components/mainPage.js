import React, { Component } from 'react';

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <div>
        <h2>Welcome to the main page!</h2>
        <h4>You are {!this.state.loggedIn && 'not'} logged in.</h4>
      </div>
    );
  }
}

export default MainPage;
