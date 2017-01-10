// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchStreamsActions from '../actions/twitchSDK/streams/streams';
import Channels from '../components/Channels';

class ChannelsWrap extends Component {
  componentDidMount() {
    this.props.getStreamsIfNeeded(24, 0);
  }

  render() {
    return (
      <Channels {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    twitchStreams: state.twitchStreams,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TwitchStreamsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsWrap);
