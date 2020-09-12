import React, { Component } from 'react';

import '../styles/main.css'

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="header-container">
        <h1>Standard Project!</h1>
        <div className="header-buttons-cont">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    )
  }
}

export default Header
