// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SearchGamesActions from '../actions/twitchSDK/search/games';
import * as SearchChannelsActions from '../actions/twitchSDK/search/channels';
import * as SearchStreamsActions from '../actions/twitchSDK/search/streams';
import Search from '../components/Search';

class SearchWrap extends Component {
  render() {
    return (
      <Search {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    twitchSearchGames: state.twitchSearchGames,
    twitchSearchChannels: state.twitchSearchChannels,
    twitchSearchStreams: state.twitchSearchStreams,
    twitchSearchResults: [...state.twitchSearchGames.games, ...state.twitchSearchChannels.channels]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...SearchGamesActions, ...SearchChannelsActions, ...SearchStreamsActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWrap);
