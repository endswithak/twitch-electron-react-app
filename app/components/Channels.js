// @flow
import React, { Component } from 'react';
import StreamCard from './StreamCard';

export default class Channels extends Component {
  render() {
    return (
      <div>
        <div className="md-grid">
          {this.props.streams.map((stream, index) => <StreamCard {...this.props} key={index} index={index} stream={stream} />)}
        </div>
      </div>
    );
  }
}
