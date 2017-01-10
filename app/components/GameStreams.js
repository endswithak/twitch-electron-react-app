// @flow
import React, { Component } from 'react';
import StreamGrid from './StreamGrid';
import Directory from './Directory'
import FollowGameButtonWrap from '../containers/FollowGameButtonWrap';

//actions={<FollowGameButtonWrap game={this.props.routeParams.gameName} />}

export default class GameStreams extends Component {
  render() {
    return (
      <Directory title={this.props.routeParams.gameName}
                 loading={this.props.twitchGameStreams.loading}
                 error={this.props.twitchGameStreams.error}>

        <StreamGrid hasMore={this.props.twitchGameStreams.total > this.props.twitchGameStreams.streams.length}
                    streams={this.props.twitchGameStreams.streams}
                    loadMore={() => this.props.moreGameStreams(this.props.routeParams.gameName)} />

      </Directory>
    )
  }
}
