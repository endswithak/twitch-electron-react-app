// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Avatar from 'react-md/lib/Avatars';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import ListItem from 'react-md/lib/Lists/ListItem';

export default class NavLogin extends Component {
  props: {
    login: () => void,
    logout: () => void,
    twitchAPI: Object
  }
  render() {
    const {twitchAPI, login, logout} = this.props;
    return (
      <div>
        {twitchAPI.status.authenticated ?
          <Button raised
                  secondary
                  label="Logout"
                  onClick={() => logout()} />
          :
          <Button raised
                  secondary
                  label="Login"
                  onClick={() => login()} />
        }
      </div>
    );
  }
}
