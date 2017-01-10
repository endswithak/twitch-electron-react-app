// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchGameRelActions from '../actions/twitchSDK/follows/gameRel';
import FollowGameButton from '../components/FollowGameButton';

class FollowGameButtonWrap extends Component {
  componentDidMount() {
    this.props.getGameRelIfNeeded(this.props.twitchUser.user.name, this.props.game);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.twitchStatus !== this.props.twitchStatus || nextProps.twitchUser !== this.props.twitchUser) {
      if (nextProps.twitchStatus.status.authenticated && nextProps.twitchUser.user.name) {
        this.props.getGameRel(this.props.twitchUser.user.name, this.props.game);
      }
    }
  }
  render() {
    return (
      <FollowGameButton {...this.props} />
    );
  }
}

function mapStateToProps(state, ownprops) {
  const gameRel = state.twitchGameRel[ownprops.game];
  const initialGameRelState = {
    following: false,
    loading: true,
    error: null,
  };
  return {
    twitchStatus: state.twitchStatus,
    twitchUser: state.twitchUser,
    twitchGameRel: gameRel ? gameRel : initialGameRelState
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitchGameRelActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowGameButtonWrap);
