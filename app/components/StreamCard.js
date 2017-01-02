// @flow
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';

export default class StreamCard extends Component {
  render() {
    return (
      <div className="md-cell md-cell--2-phone md-cell--4-tablet md-cell--3-desktop">
        <Card raise={true}>
          <Media className="md-media--16-9">
            <img src={this.props.stream.preview.large} role="presentation" />
            <MediaOverlay>
              <CardTitle title={this.props.stream.channel.status} />
            </MediaOverlay>
          </Media>
          <CardTitle
            avatar={<Avatar src={this.props.stream.channel.logo} role="presentation" />}
            title={this.props.stream.channel.display_name}
            subtitle={`${this.props.stream.viewers} viewers`}
          />
        </Card>
      </div>
    );
  }
}
