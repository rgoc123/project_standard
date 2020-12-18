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

  closeModal(){
    this.setState({ modalIsOpen: false })
  }

  renderButtons(currentUser) {
    const { form, modalIsOpen } = this.state

    if (currentUser) {
      return (
        <div className="header-buttons-cont">
          <button>Log Out</button>
        </div>
      )
    } else {
      return (
        <>
          <div className="header-buttons-cont">
            <button onClick={() => this.openModal('login')}>Log In</button>
            <button onClick={() => this.openModal('signup')}>Sign Up</button>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            style={customStyles}
            >

            <button onClick={this.closeModal}>Close</button>

            <h5>{form === 'login' ? 'Log In' : 'Sign Up'}</h5>

            {
              form === 'login'
              ?
              <LoginForm />
              :
              <RegisterForm />
            }

          </Modal>
        </>
      )
    }
  }

  render() {
    const { currentUser } = this.props
    return (
      <div className="header-container">

        <h1>Standard Project!</h1>

        {this.renderButtons(currentUser)}

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
