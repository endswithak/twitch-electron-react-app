// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';

export default class FollowGameButton extends Component {
  constructor() {
    super();
    this.handleFollowClick = this.handleFollowClick.bind(this);
  }
  handleFollowClick() {
    if (this.props.twitchGameRel.following) {
      this.props.unfollowGame(this.props.twitchUser.user.name, this.props.game);
    } else {
      this.props.followGame(this.props.twitchUser.user.name, this.props.game);
    }
  }
  render() {
    if (this.props.twitchStatus.status.authenticated) {
      return <Button flat
                     primary
                     label={this.props.twitchGameRel.following ? 'Unfollow' : 'Follow'}
                     onClick={() => this.handleFollowClick()}>favorite</Button>
    }
    return <Button flat
                   disabled
                   primary
                   label="Follow">favorite</Button>
  }
}
