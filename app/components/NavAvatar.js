// @flow
import React, { Component } from 'react';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import ListItem from 'react-md/lib/Lists/ListItem';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import UserAvatar from './UserAvatar';
import FontIcon from 'react-md/lib/FontIcons';

export default class NavAvatar extends Component {
  render() {
    if (this.props.twitchUser.loading) {
      return <CircularProgress id="loading-user" />
    }
    return (
      <MenuButton id="account-menu"
                  className="md-btn--toolbar"
                  tooltipLabel={this.props.twitchUser.user.display_name}
                  icon
                  position={MenuButton.Positions.BELOW}
                  buttonChildren={
                    <UserAvatar logo={this.props.twitchUser.user.logo}
                                username={this.props.twitchUser.user.display_name}
                                iconSized={true}
                                style={{fontFamily: '"Roboto", sans-serif'}} />
                  }>
        <ListItem primaryText="Logout"
                  leftIcon={<FontIcon>exit_to_app</FontIcon>}
                  onClick={() => this.props.logout()} />
        <ListItem primaryText="Channel"
                  leftIcon={<FontIcon>account_box</FontIcon>}
                  onClick={() => this.props.router.push(`/channels/${encodeURIComponent(this.props.twitchUser.user._id)}`)} />
      </MenuButton>
    )
  }
}
