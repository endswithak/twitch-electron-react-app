// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TopClipsActions from '../actions/twitchSDK/clips/top';
import Clips from '../components/Clips';

class ClipsWrap extends Component {
  componentDidMount() {
    this.props.getTopClipsIfNeeded(24, 'day', false);
  }

  render() {
    return (
      <Clips {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    twitchTopClips: state.twitchTopClips,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TopClipsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClipsWrap);
