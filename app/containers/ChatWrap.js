// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TmiActions from '../actions/tmi/chat';
import * as ScrollActions from '../actions/tmi/scrollActivity';
import Chat from '../components/Chat';

function mapStateToProps(state) {
  return {
    tmi: state.tmi,
    twitchStatus: state.twitchStatus,
    twitchUser: state.twitchUser,
    chatScroll: state.chatScroll
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...TmiActions, ...ScrollActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
