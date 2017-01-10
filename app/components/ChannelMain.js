import React, { Component } from 'react';
import Player from './Player';
import ChatWrap from '../containers/ChatWrap';
import ChatInputWrap from '../containers/ChatInputWrap';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Avatar from 'react-md/lib/Avatars';

export default class ChannelMain extends Component {
  render() {
    return (
      <div className="md-grid md-grid--no-spacing md-cell--12">
        <div className="md-cell md-cell--9-desktop md-cell--5-tablet">
          <Player channelName={this.props.stream.channel.name} />
        </div>
        <div style={{position: 'relative'}} className="md-cell md-cell--3-desktop md-cell--3-tablet">
          <ChatWrap channelName={this.props.stream.channel.name} />
        </div>
        <div className="md-cell md-cell--12">
          <Card>
            <div className="md-grid md-grid--no-spacing">
              <div className="md-cell md-cell--9-desktop md-cell--5-tablet">
                <CardTitle
                  title={this.props.stream.channel.status}
                  subtitle={`${this.props.stream.viewers.toLocaleString()} viewers`}
                  avatar={
                    <Avatar
                      src={this.props.stream.channel.logo}
                      role="presentation"
                      style={{ alignSelf: 'center'}}
                    />
                  }
                />
              </div>
              <ChatInputWrap channelName={this.props.stream.channel.name} />
            </div>
          </Card>
        </div>
      </div>
    )
  }
}
