// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchGameActions from '../actions/twitchSDK/games/game';
import GameAvatar from '../components/GameAvatar';

function mapStateToProps(state) {
  return {
    twitchGame: state.twitchGame
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitchGameActions, dispatch);
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {...stateProps, ...dispatchProps, ...ownProps}
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(GameAvatar);
