// @flow
import React, { Component } from 'react';
import Following from '../components/Following';

export default class FollowingWrap extends Component {
  componentWillMount() {
    if (this.props.twitchAPI.status.authenticated) {
      this.props.twitchGetUserFollowingStreams(25, 0);
    }
  }
  render() {
    return (
      <Following />
    );
  }
}
