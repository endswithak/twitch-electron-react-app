// @flow
import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import Media from 'react-md/lib/Media';
import {Link} from 'react-router';

class GameCard extends Component {
  render() {
    const { game, viewers } = this.props.game;
    return (
      <div className="md-cell md-cell--2-phone md-cell--2-tablet md-cell--2-desktop">
        <Link to={`/games/${encodeURIComponent(game.name)}`}>
          <Card raise={true}>
            <Media className="md-media--3-4">
              <img src={game.box.large} role="presentation" />
            </Media>
            <CardTitle className="md-card-title--ellipsis"
                       title={game.name}
                       subtitle={`${viewers.toLocaleString()} viewers`}
            />
          </Card>
        </Link>
      </div>
    );
  }
}

GameCard.propTypes = {
  game: React.PropTypes.object,
}

export default GameCard;
