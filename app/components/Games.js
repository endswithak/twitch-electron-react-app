// @flow
import React, { Component } from 'react';
import GameGrid from './GameGrid';
import Directory from './Directory';

class Games extends Component {
  render() {
    return (
      <Directory
        title="Games"
        loading={this.props.twitchTopGames.loading}
        error={this.props.twitchTopGames.error}>

        <GameGrid hasMore={this.props.twitchTopGames.total > this.props.twitchTopGames.games.length}
                  games={this.props.twitchTopGames.games}
                  loadMore={this.props.getMoreTopGames} />

      </Directory>
    )
  }
}

Games.propTypes = {
  twitchTopGames: React.PropTypes.object,
  getMoreTopGames: React.PropTypes.func
}

export default Games;
