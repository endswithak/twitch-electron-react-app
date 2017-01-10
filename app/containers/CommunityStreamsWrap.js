// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchCommunityStreamsActions from '../actions/twitchSDK/streams/streamsByCommunity';
import * as TwitchCommunityActions from '../actions/twitchSDK/communities/community';
import CommunityStreams from '../components/CommunityStreams';

class CommunityStreamsWrap extends Component {
  componentDidMount() {
    this.props.getCommunityStreamsIfNeeded(24, 0, this.props.routeParams.communityId);
    this.props.getCommunityIfNeeded(this.props.routeParams.communityId);
  }

  render() {
    return (
      <CommunityStreams {...this.props} />
    );
  }
}

function mapStateToProps(state, ownprops) {
  const communityStreams = state.twitchCommunityStreams[ownprops.routeParams.communityId];
  const initialCommunityStreamsState = {
    streams: [],
    limit: null,
    offset: null,
    nextOffset: null,
    communityId: null,
    error: null,
    loading: false,
    receivedAt: null,
    moreStreamsLoading: false
  }
  const community = state.twitchCommunity[ownprops.routeParams.communityId];
  const intialCommunityState = {
    community: {},
    communityId: null,
    error: null,
    loading: true
  }
  return {
    twitchCommunityStreams: communityStreams ? communityStreams : initialCommunityStreamsState,
    twitchCommunity: community ? community : intialCommunityState
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...TwitchCommunityStreamsActions, ...TwitchCommunityActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityStreamsWrap);
