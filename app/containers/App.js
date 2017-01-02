// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchAPIActions from '../actions/twitchAPI';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    twitchAPI: state.twitchAPI
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitchAPIActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
