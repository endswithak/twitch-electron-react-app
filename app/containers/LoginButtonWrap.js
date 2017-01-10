// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchInitActions from '../actions/twitchSDK/init';
import LoginButton from '../components/LoginButton';

function mapStateToProps(state) {
  return {
    login: state.twitchSDK.login,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitchInitActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);
