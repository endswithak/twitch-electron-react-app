// @flow
import React, { Component } from 'react';
import StreamGrid from './StreamGrid';
import Directory from './Directory'

export default class Following extends Component {
  render() {
    return (
      <Directory title="Following"
                 loading={this.props.twitchUserStreams.loading}
                 error={this.props.twitchUserStreams.error}>

        <StreamGrid hasMore={this.props.twitchUserStreams.total > this.props.twitchUserStreams.streams.length}
                    streams={this.props.twitchUserStreams.streams}
                    loadMore={this.props.moreUserStreams} />

      </Directory>
    )
  }
}
