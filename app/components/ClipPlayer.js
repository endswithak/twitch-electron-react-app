// @flow
import React, { Component } from 'react';
import Media from 'react-md/lib/Media/Media';

export default class ClipPlayer extends Component {
  render() {
    return (
      <Media aspectRatio="16-9">
        <iframe src={`https://clips.twitch.tv/embed?clip=${this.props.clipURL}&autoplay=false`}
                height="720"
                width="1280"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true">
        </iframe>
      </Media>
    )
  }
}
