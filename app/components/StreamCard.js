// @flow
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import {Link} from 'react-router';
import Button from 'react-md/lib/Buttons/Button';
import UserAvatar from './UserAvatar';

//subtitle={`${this.props.stream.viewers.toLocaleString()} viewers`}

export default class StreamCard extends Component {
  render() {
    const avatar = (
      <UserAvatar style={{marginRight: 16}}
                  logo={this.props.stream.channel.logo}
                  iconSized={true}
                  username={this.props.stream.channel.name} />
    )
    return (
      <div className="md-cell md-cell--4-phone md-cell--4-tablet md-cell--4-desktop">
        <Link to={`/channels/${this.props.stream.channel._id}`}>
          <Card raise={true}>
            <Media className="md-media--16-9">
              <img src={this.props.stream.preview.large} role="presentation" />
            </Media>
            <CardTitle className="md-card-title--ellipsis"
                       title={this.props.stream.channel.status ? this.props.stream.channel.status : 'No stream status'}
                       subtitle={`${this.props.stream.viewers.toLocaleString()} viewers`}
            />
            <CardTitle  className="md-card-title--ellipsis"
                        avatar={avatar}
                        title=''
                        subtitle={this.props.stream.channel.display_name}
            />
          </Card>
        </Link>
      </div>
    );
  }
}
