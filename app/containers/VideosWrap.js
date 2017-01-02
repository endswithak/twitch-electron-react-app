// @flow
import React, { Component } from 'react';
import Videos from '../components/Videos';

export default class VideosWrap extends Component {
  componentWillMount() {
    this.props.twitchGetVideos(25, 0);
  }
  render() {
    return (
      <Videos videos={this.props.twitchAPI.videos} />
    );
  }
}
