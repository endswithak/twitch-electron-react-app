// @flow
import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import ListItem from 'react-md/lib/Lists/ListItem';

export default class NavAvatar extends Component {
  props: {
    twitchAPI: Object,
    logout: () => void
  };
  render() {
    const {twitchAPI, logout} = this.props;
    const avatar = (
      twitchAPI.channel.logo ?
      <Avatar src={twitchAPI.channel.logo} role="presentation" iconSized />
      :
      <Avatar iconSized>{twitchAPI.channel.name.charAt(0).toUpperCase()}</Avatar>
    );
    return (
      <MenuButton
        id="account-menu"
        label={twitchAPI.channel.display_name}
        flat
        buttonChildren={avatar}
        iconBefore={false}
      >
        <ListItem waitForInkTransition primaryText="Logout" onClick={() => logout()} />
        <ListItem primaryText="Not You?" />
      </MenuButton>
    );
  }
}
