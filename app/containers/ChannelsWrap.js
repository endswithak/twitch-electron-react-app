// @flow
import React, { Component } from 'react';
import Channels from '../components/Channels';

export default class ChannelsWrap extends Component {
  componentWillMount() {
    this.props.twitchGetStreams(25, 0);
  }
  render() {
    return (
      <Channels streams={this.props.twitchAPI.streams} />
    );
  }
}
