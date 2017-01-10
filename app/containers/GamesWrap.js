// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TopGamesActions from '../actions/twitchSDK/games/top';
import Games from '../components/Games';

class GamesWrap extends Component {
  componentDidMount() {
    this.props.getTopGamesIfNeeded(24,0);
  }

  render() {
    return (
      <Games {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    twitchTopGames: state.twitchTopGames,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TopGamesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesWrap);
