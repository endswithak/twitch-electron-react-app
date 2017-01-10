// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import NavAvatar from './NavAvatar';

export default class NavLogin extends Component {
  render() {
    if (this.props.twitchStatus.status.authenticated) {
      return (
        <NavAvatar twitchUser={this.props.twitchUser} router={this.props.router} logout={this.props.logout} />
      )
    }
    return <LoginButton login={this.props.login} />
  }
}
