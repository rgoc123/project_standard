import React, { Component } from 'react';
import Modal from 'react-modal';

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
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  closeModal(){
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div className="header-container">

        <h1>Standard Project!</h1>

        <div className="header-buttons-cont">
          <button onClick={this.openModal}>Login</button>
          <button>Sign Up</button>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={customStyles}
          >
          <button onClick={this.closeModal}>Close</button>
          <div>I am a modal</div>
        </Modal>

      </div>
    )
  }
}

export default Header
