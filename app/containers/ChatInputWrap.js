// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TmiSayActions from '../actions/tmi/say';
import ChatInput from '../components/ChatInput';

function mapStateToProps(state) {
  return {
    tmiSay: state.tmiSay,
    twitchStatus: state.twitchStatus,
    twitchUser: state.twitchUser,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TmiSayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
