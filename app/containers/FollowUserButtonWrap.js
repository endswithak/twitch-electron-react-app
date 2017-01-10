// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchUserRelActions from '../actions/twitchSDK/follows/userRel';
import FollowUserButton from '../components/FollowUserButton';

class FollowUserButtonWrap extends Component {
  componentDidMount() {
    if (this.props.twitchStatus.status.authenticated && this.props.twitchUser.user._id) {
      this.props.getUserRelIfNeeded(this.props.twitchUser.user._id, this.props.channelId);
    }
  }
  render() {
    return (
      <FollowUserButton {...this.props} />
    );
  }
}

function mapStateToProps(state, ownprops) {
  const userRel = state.twitchUserRel[ownprops.channelId];
  const initialUserRelState = {
    following: false,
    channelId: null,
    loading: true,
    error: null
  };
  return {
    twitchStatus: state.twitchStatus,
    twitchUser: state.twitchUser,
    twitchUserRel: userRel ? userRel : initialUserRelState
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitchUserRelActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowUserButtonWrap);
