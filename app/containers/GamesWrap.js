// @flow
import React, { Component } from 'react';
import Games from '../components/Games';

export default class GamesWrap extends Component {
  componentWillMount() {
    if (this.props.twitchAPI.init) {
      this.props.twitchGetGames(25, 0);
    }
  }
  render() {
    return (
      <Games games={this.props.twitchAPI.games} />
    );
  }
}
