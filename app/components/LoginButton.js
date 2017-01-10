// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';

export default class LoginButton extends Component {
  render() {
    return (
      <Button raised
              secondary
              label="Login"
              onClick={() => this.props.login()} />
    )
  }
}
