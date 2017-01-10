// @flow
import React, { Component } from 'react';
import GameAvatar from './GameAvatar'

class GameRow extends Component {
  render() {
    return (
      <GameAvatar boxart={this.props.game.box.small} iconSized={true} />
    );
  }
}

GameRow.propTypes = {
  game: React.PropTypes.object,
}

export default GameRow;
