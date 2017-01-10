// @flow
import React, { Component } from 'react';
import StreamGrid from './StreamGrid';
import Directory from './Directory'

export default class Channels extends Component {
  render() {
    return (
      <Directory title="Channels"
                 loading={this.props.twitchStreams.loading}
                 error={this.props.twitchStreams.error}>

        <StreamGrid hasMore={this.props.twitchStreams.total > this.props.twitchStreams.streams.length}
                    streams={this.props.twitchStreams.streams}
                    loadMore={this.props.moreStreams} />

      </Directory>
    )
  }
}
