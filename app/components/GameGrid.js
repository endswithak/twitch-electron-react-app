// @flow
import React, { Component } from 'react';
import GameCard from './GameCard';
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

class GameGrid extends Component {
  render() {
    return (
      <InfiniteScroll
        className="md-grid md-cell md-cell--12"
        pageStart={0}
        loadMore={() => this.props.loadMore()}
        hasMore={this.props.hasMore}
        initialLoad={false}
        threshold={25}
        loader={<CircularProgress id="loading-games" />}>
        {
          this.props.games.map((game, index) =>
            <GameCard {...this.props} key={index} game={game} />
          )
        }
      </InfiniteScroll>
    )
  }
}

GameGrid.propTypes = {
  hasMore: React.PropTypes.bool,
  games: React.PropTypes.array,
  loadMore: React.PropTypes.func
}

export default GameGrid;
