import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal';

import LoginForm from './loginForm.js'
import RegisterForm from './registerForm.js'

import '../styles/main.css'

const customStyles = {
  content : {
    top           : '50%',
    left          : '50%',
    right         : 'auto',
    bottom        : 'auto',
    marginRight   : '-50%',
    transform     : 'translate(-50%, -50%)'
  }
};

class Header extends Component {
  constructor() {
    super()

    this.state = {
      modalIsOpen: false,
      form: 'login'
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(form) {
    this.setState({ modalIsOpen: true, form })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  closeModal(){
    this.setState({ modalIsOpen: false })
  }

  renderButtons() {
    return (
      <>
        <div className="header-buttons-cont">
          <button onClick={() => this.openModal('login')}>Log In</button>
          <button onClick={() => this.openModal('signup')}>Sign Up</button>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
          >

          <button onClick={this.closeModal}>Close</button>

          <h5>{this.state.form === 'login' ? 'Log In' : 'Sign Up'}</h5>

          {
            this.state.form === 'login'
            ?
            <LoginForm />
            :
            <RegisterForm />
          }

        </Modal>
      </>
    )
  }

  renderLogout() {
    return <button>Log Out</button>
  }

  render() {
    return (
      <div className="header-container">

        <h1>Standard Project!</h1>

        {
          this.props.currentUser
          ?
          this.renderLogout()
          :
          this.renderButtons()
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps)(Header)
