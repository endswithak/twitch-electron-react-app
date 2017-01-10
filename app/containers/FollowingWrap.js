// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchUserStreamsActions from '../actions/twitchSDK/follows/streams';
import Following from '../components/Following';

class FollowingWrap extends Component {
  componentDidMount() {
    this.props.getUserStreamsIfNeeded(24, 0);
  }

  render() {
    return (
      <Following {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    twitchUserStreams: state.twitchUserStreams
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitchUserStreamsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowingWrap);
