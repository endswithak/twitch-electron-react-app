// @flow
import React, { Component } from 'react';
import Media from 'react-md/lib/Media/Media';

export default class Player extends Component {
  render() {
    return (
      <Media aspectRatio="16-9">
        <iframe
          src={`http://player.twitch.tv/?channel=${this.props.channelName}`}
          height="720"
          width="1280"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true">
        </iframe>
      </Media>
    )
  }
}
