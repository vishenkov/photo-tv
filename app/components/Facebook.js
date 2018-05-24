import React, { Component } from 'react';
import Social from './Social';

export default class Facebook extends Component {
  handleLogin = event => {
    event.preventDefault();
    // this.props.setShared(true);
  }

  handleSignup = event => {
    event.preventDefault();
    // this.props.setShared(true);
  }

  handleGuest = event => {
    event.preventDefault();
    // this.props.setShared(true);
  }

  render() {
    return (
      <div>
        <Social
          social="Facebook"
          handleLogin={this.handleLogin}
          handleSignup={this.handleSignup}
          handleGuest={this.handleGuest}
          open={this.props.open}
          onClose={this.props.onClose}
        />
      </div>
    );
  }
}
