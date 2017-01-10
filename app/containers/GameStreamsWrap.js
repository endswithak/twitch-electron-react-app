// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchGameStreamsActions from '../actions/twitchSDK/streams/streamsByGame';
import * as TwitchGameActions from '../actions/twitchSDK/games/game';
import GameStreams from '../components/GameStreams';

class GameStreamsWrap extends Component {
  componentDidMount() {
    this.props.getGameStreamsIfNeeded(24, 0, this.props.routeParams.gameName);
    this.props.getGameIfNeeded(this.props.routeParams.gameName);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if ((this.props.twitchGameStreams.game == null && nextProps.twitchGameStreams.game == null) && !nextProps.twitchGameStreams.loading) {
      this.props.getGameStreamsIfNeeded(24, 0, this.props.routeParams.gameName);
      this.props.getGameIfNeeded(this.props.routeParams.gameName);
    }
  }

  render() {
    return (
      <GameStreams {...this.props} />
    );
  }
}

function mapStateToProps(state, ownprops) {
  const twitchGameStreams = state.twitchGameStreams[ownprops.routeParams.gameName];
  const game = state.twitchGame[ownprops.routeParams.gameName];

  const initialGameStreamsState = {
    streams: [],
    limit: null,
    offset: null,
    nextOffset: null,
    game: null,
    total: null,
    error: null,
    loading: false,
    receivedAt: null,
    moreStreamsLoading: false
  }

  const initialGameState = {
    game: {},
    error: null,
    loading: false
  }

  return {
    twitchGameStreams: twitchGameStreams ? twitchGameStreams : initialGameStreamsState,
    twitchGame: game ? game : initialGameState
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...TwitchGameStreamsActions, ...TwitchGameActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameStreamsWrap);
