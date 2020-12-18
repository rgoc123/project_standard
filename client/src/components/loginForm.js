import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { login } from '../actions/sessionActions'

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      this.setState({ loggedIn: true })
    }
  }

  handleInputChange(e) {
    e.preventDefault();
    const field = e.target.getAttribute('id');
    if (field === 'login-email') {
      this.setState({ 'email': e.target.value });
    } else {
      this.setState({ 'password': e.target.value });
    }
  }

  async processForgotPassword() {
    console.log(this.state.email);
    try {
      const body = { email: this.state.email };
      const forgotPasswordResponse = await fetch('http://localhost:7001/v1/forgotPassword', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(await forgotPasswordResponse.json());
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { loggedIn, email, password } = this.state
    if (loggedIn) return (<Redirect to='/mainpage' />);

    return (
      <div className="login-form-container">
        <form>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            value={email}
            placeholder="Email"
            onChange={this.handleInputChange}
          /><br></br>
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            value={password}
            placeholder="Password"
            onChange={this.handleInputChange}
          /><br></br>
        <button onClick={() => this.props.login({ email, password })}>Login</button>
        </form>
        <button onClick={() => this.processForgotPassword()}>Forgot Password</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
