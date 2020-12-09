import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import { signup } from '../actions/sessionActions'

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loggedIn: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    const field = e.target.getAttribute('id');
    if (field === 'sign-up-email') {
      this.setState({ 'email': e.target.value });
    } else {
      this.setState({ 'password': e.target.value });
    }
  }

  async handleSubmit(e) {
    try {
      e.preventDefault();
      const signUpInfo = this.state;

      this.props.signup(signUpInfo)
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.loggedIn) return (<Redirect to='/mainpage' />);

    return (
      <div className="sign-up-form-container">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="sign-up-email">Email</label>
          <input
            id="sign-up-email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleInputChange}
          /><br></br>
          <label htmlFor="sign-up-password">Password</label>
          <input
            id="sign-up-password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleInputChange}
          /><br></br>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
