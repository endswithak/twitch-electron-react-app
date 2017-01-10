// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchLoginActions from '../actions/twitchSDK/auth/login';
import NavLogin from '../components/NavLogin';

function mapStateToProps(state) {
  return {
    twitchStatus: state.twitchStatus,
    twitchLogin: state.twitchLogin,
    twitchUser: state.twitchUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitchLoginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavLogin);
