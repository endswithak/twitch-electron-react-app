// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';

export default class LogoutButton extends Component {
  render() {
    return (
      <Button flat
              secondary
              label="Logout"
              onClick={() => this.props.logout()} />
    )
  }
}
