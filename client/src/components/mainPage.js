import React, { Component } from 'react'
import { connect } from 'react-redux'

import { persistUser } from '../actions/sessionActions'

import ReviewList from './reviewList'

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const loggedInUser = localStorage.getItem('user')
    if (loggedInUser) {
      this.props.persistUser(JSON.parse(loggedInUser))
      this.setState({ loggedIn: true })
    }
  }

  logout() {
    localStorage.removeItem('user')
    localStorage.removeItem('authToken')
    this.setState({ loggedIn: false })
  }

  render() {
    const { loggedIn } = this.state
    const { currentUser } = this.props

    return (
      <div>
        <h2>Welcome to the main page!</h2>
        <h4>You are {(!currentUser || !loggedIn) && 'not'} logged in.</h4>

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

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    persistUser: user => dispatch(persistUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
