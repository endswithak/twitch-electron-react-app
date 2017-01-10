// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TopCommunitiesActions from '../actions/twitchSDK/communities/top';
import Communities from '../components/Communities';

class CommunitiesWrap extends Component {
  componentDidMount() {
    this.props.getTopCommunitiesIfNeeded(24);
  }

  render() {
    return (
      <Communities {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    twitchTopCommunities: state.twitchTopCommunities,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TopCommunitiesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunitiesWrap);
