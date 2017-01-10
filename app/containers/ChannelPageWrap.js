// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchStreamActions from '../actions/twitchSDK/streams/stream';
import * as TwitchUserChannelActions from '../actions/twitchSDK/channels/channel';
import ChannelPage from '../components/ChannelPage';

class ChannelPageWrap extends Component {
  componentDidMount() {
    this.props.getStreamIfNeeded(this.props.routeParams.channelId);
    this.props.getUserChannelIfNeeded(this.props.routeParams.channelId);
  }

  componentWillReceiveProps(nextProps, nextState) {
    if ((this.props.twitchStream.channelId == null && nextProps.twitchStream.channelId == null) && !nextProps.twitchStream.loading) {
      this.props.getStreamIfNeeded(this.props.routeParams.channelId);
      this.props.getUserChannelIfNeeded(this.props.routeParams.channelId);
    }
  }

  render() {
    return (
      <ChannelPage {...this.props} />
    );
  }
}

function mapStateToProps(state, ownprops) {
  const stream = state.twitchStream[ownprops.routeParams.channelId];
  const channel = state.twitchUserChannel[ownprops.routeParams.channelId];
  const initialStreamState = {
    stream: {},
    channelId: null,
    error: null,
    receivedAt: null,
    loading: true
  }
  const initialUserChannelState = {
    channel: {},
    channelId: null,
    error: null,
    loading: true
  }
  return {
    twitchStream: stream ? stream : initialStreamState,
    twitchUserChannel: channel ? channel : initialUserChannelState
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...TwitchStreamActions, ...TwitchUserChannelActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelPageWrap);
