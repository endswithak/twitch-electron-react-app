// @flow
import React, { Component } from 'react';
import GameCard from './GameCard';

export default class Games extends Component {
  render() {
    return (
      <div className="md-grid">
        {this.props.games.map((game, index) => <GameCard {...this.props} key={index} index={index} game={game} />)}
      </div>
    );
  }
}
