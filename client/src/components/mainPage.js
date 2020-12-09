import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReviewList from './reviewList'

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('authToken')
    this.setState({ loggedIn: false })
  }

  render() {
    return (
      <div>
        <h2>Welcome to the main page!</h2>
        <h4>You are {!this.props.currentUser && 'not'} logged in.</h4>

        <ReviewList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = id => dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
