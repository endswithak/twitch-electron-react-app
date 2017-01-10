import React, { Component } from 'react';
import Player from './Player';
import ChatWrap from '../containers/ChatWrap';
import ChatInputWrap from '../containers/ChatInputWrap';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Avatar from 'react-md/lib/Avatars';
import UserAvatar from './UserAvatar';

export default class OfflineChannelMain extends Component {
  render() {
    const avatar = (
      <UserAvatar style={{marginRight: 16}}
                  logo={this.props.channel.logo}
                  username={this.props.channel.name} />
    )
    return (
      <div className="md-grid md-grid--no-spacing md-cell--12">
        <div className="md-cell md-cell--9-desktop md-cell--5-tablet">
          <Player channelName={this.props.channel.name} />
        </div>
        <div style={{position: 'relative'}} className="md-cell md-cell--3-desktop md-cell--3-tablet">
          <ChatWrap channelName={this.props.channel.name} />
        </div>
        <div className="md-cell md-cell--12">
          <Card>
            <div className="md-grid md-grid--no-spacing">
              <div className="md-cell md-cell--9-desktop md-cell--5-tablet">
                <CardTitle
                  title={this.props.channel.status ? this.props.channel.status : 'No status'}
                  subtitle={`${this.props.channel.views.toLocaleString()} views`}
                  avatar={avatar}
                />
              </div>
              <ChatInputWrap channelName={this.props.channel.name} />
            </div>
          </Card>
        </div>
      </div>
    )
  }
}
