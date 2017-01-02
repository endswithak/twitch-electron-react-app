// @flow
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';

export default class GameCard extends Component {
  render() {
    return (
      <div className="md-cell md-cell--2-phone md-cell--2-tablet md-cell--2-desktop">
        <Card raise={true}>
          <Media className="md-media--3-4">
            <img src={this.props.game.game.box.large} role="presentation" />
            <MediaOverlay>
              <CardTitle title={this.props.game.game.name} />
            </MediaOverlay>
          </Media>
          <CardTitle
            title=""
            subtitle={`${this.props.game.viewers} viewers`}
          />
        </Card>
      </div>
    );
  }
}
