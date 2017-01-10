// @flow
import React, { Component } from 'react';
import StreamGrid from './StreamGrid';
import Directory from './Directory'

export default class CommunityStreams extends Component {
  render() {
    return (
      <Directory title={this.props.twitchCommunity.loading ? '' : this.props.twitchCommunity.community.name}
                 loading={this.props.twitchCommunityStreams.loading}
                 error={this.props.twitchCommunityStreams.error}>

        <StreamGrid hasMore={this.props.twitchCommunityStreams.total > this.props.twitchCommunityStreams.streams.length}
                    streams={this.props.twitchCommunityStreams.streams}
                    loadMore={() => this.props.moreCommunityStreams(this.props.routeParams.communityId)} />

      </Directory>
    )
  }
}
