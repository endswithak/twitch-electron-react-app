// @flow
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import FollowUserButtonWrap from '../containers/FollowUserButtonWrap';
import Directory from './Directory';
import ChannelMain from './ChannelMain';
import OfflineChannelMain from './OfflineChannel';

//actions={<FollowUserButtonWrap channelId={this.props.routeParams.channelId} />}

export default class ChannelPage extends Component {
  render() {
    return (
      <div className="md-grid">
        <Card className="md-cell md-cell--12">
          <Directory
            title={(this.props.twitchStream.loading || this.props.twitchUserChannel.loading) ? '' : this.props.twitchUserChannel.channel.display_name}
            loading={this.props.twitchStream.loading || this.props.twitchUserChannel.loading}
            error={this.props.twitchStream.error || this.props.twitchUserChannel.error}>

            {
              this.props.twitchStream.stream
              ?
              <ChannelMain stream={this.props.twitchStream.stream} />
              :
              <OfflineChannelMain channel={this.props.twitchUserChannel.channel} />
            }
          </Directory>
        </Card>
      </div>
    )
  }
}
