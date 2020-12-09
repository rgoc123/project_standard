import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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

      const preJSONifiedRes = await fetch('http://localhost:7001/v1/register', {
        method: 'POST',
        body: JSON.stringify(signUpInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const res = await preJSONifiedRes.json();
      
      if (res.status === 200) {
        localStorage.setItem('authToken', res.token);
        localStorage.setItem('user', JSON.stringify(res.data));
        this.setState({ loggedIn: true });
        console.log("Registration complete!");
      } else {
        throw new Error(JSON.stringify(res.message));
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // console.log(this.state);
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

export default RegisterForm;
