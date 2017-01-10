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
import ClipPlayer from './ClipPlayer';

export default class ClipCard extends Component {
  render() {
    const avatar = (
      <UserAvatar style={{marginRight: 16}}
                  logo={this.props.clip.broadcaster.logo}
                  iconSized={false}
                  username={this.props.clip.broadcaster.name} />
    )
    return (
      <div className="md-cell md-cell--12">
        <Card raise={true}>
          <div className="md-grid md-grid--no-spacing">
            <div className="md-cell md-cell--2-phone md-cell--4-tablet md-cell--8-desktop">
              <Media className="md-media--16-9">
                <img src={this.props.clip.thumbnails.medium} role="presentation" />
                {/*<ClipPlayer clipURL={this.props.clip.id} />*/}
              </Media>
            </div>
            <div className="md-cell md-cell--2-phone md-cell--4-tablet md-cell--4-desktop">
              <CardTitle  className="md-card-title--ellipsis-block"
                          avatar={avatar}
                          title={this.props.clip.broadcaster.display_name}
                          subtitle={`${this.props.clip.views.toLocaleString()} views`}
              />
              <CardTitle className="md-card-title--ellipsis-block"
                         title={this.props.clip.title ? this.props.clip.title : 'No clip title'}
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
