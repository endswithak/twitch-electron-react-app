// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserEmoteActions from '../actions/twitchSDK/emotes/user';
import EmoteSelector from '../components/EmoteSelector';

class EmoteSelectorWrap extends Component {
  componentDidMount() {
    if (this.props.twitchStatus.status.authenticated && this.props.twitchUser.user._id) {
      this.props.getUserEmotesIfNeeded(this.props.twitchUser.user._id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.twitchStatus !== this.props.twitchStatus || nextProps.twitchUser !== this.props.twitchUser) {
      if (nextProps.twitchStatus.status.authenticated && nextProps.twitchUser.user.name) {
        this.props.getUserEmotesIfNeeded(this.props.twitchUser.user._id);
      }
    }
  }

  render() {
    return (
      <EmoteSelector {...this.props} />
    );
  }
}

function mapStateToProps(state, ownprops) {
  return {
    twitchStatus: state.twitchStatus,
    twitchUser: state.twitchUser,
    twitchUserEmotes: state.twitchUserEmotes[state.twitchUser.user._id]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserEmoteActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EmoteSelectorWrap);
