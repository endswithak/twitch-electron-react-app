// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';

export default class FollowUserButton extends Component {
  constructor(props) {
    super(props);
    this.handleFollowClick = this.handleFollowClick.bind(this);
  }
  handleFollowClick() {
    if (this.props.twitchUserRel.following) {
      this.props.unfollowUser(this.props.twitchUser.user._id, this.props.channelId);
    } else {
      this.props.followUser(this.props.twitchUser.user._id, this.props.channelId);
    }
  }
  render() {
    if (this.props.twitchStatus.status.authenticated) {
      return <Button flat
                     primary
                     label={this.props.twitchUserRel.following ? 'Unfollow' : 'Follow'}
                     onClick={() => this.handleFollowClick()}>favorite</Button>
    }
    return <Button flat
                   disabled
                   primary
                   label="Follow">favorite</Button>
  }
}
