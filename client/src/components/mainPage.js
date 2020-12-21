import React, { Component } from 'react'
import { connect } from 'react-redux'

import { persistUser } from '../actions/sessionActions'

import '../styles/main.css'

import Menu from './menu'
import CreateItemForm from './createItemForm'
import ReviewList from './reviewList'
import CookList from './cookList'
import WorkoutList from './workoutList'
import WatchList from './watchList'

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      activeTab: 'learn'
    }

    this.logout = this.logout.bind(this)
    this.setActiveTab = this.setActiveTab.bind(this)
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

  setActiveTab(tab) {
    this.setState({ activeTab: tab })
  }

  renderActiveComponent() {
    const { activeTab } = this.state
    switch (activeTab) {
      case 'learn':
        return <ReviewList />
      case 'cook':
        return <CookList />
      case 'workout':
        return <WorkoutList />
      case 'watch':
        return <WatchList />
      default:
        return <ReviewList />
    }
  }

  toggleCreateOpen() {
    this.setState({ createIsOpen: !this.state.createIsOpen })
  }

  render() {
    const { loggedIn, activeTab } = this.state
    const { currentUser } = this.props

    return (
      <div>
        <h2>Welcome to the main page!</h2>
        <h4>You are {(!currentUser || !loggedIn) && 'not'} logged in.</h4>

        <Menu activeTab={activeTab}
          setActiveTab={this.setActiveTab} />

        <div className="list-and-main">
          <div className="list-cont">
            <div className="create-item-cont">
              <h4>{activeTab[0].toUpperCase() + activeTab.slice(1)} List</h4>
              <CreateItemForm activeTab={activeTab} />
            </div>

            {this.renderActiveComponent()}
          </div>

          <div className="main-cont">

          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    persistUser: user => dispatch(persistUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
