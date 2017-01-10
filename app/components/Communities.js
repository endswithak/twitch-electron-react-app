// @flow
import React, { Component } from 'react';
import CommunityGrid from './CommunityGrid';
import Directory from './Directory';

class Communities extends Component {
  render() {
    return (
      <Directory
        title="Communities"
        loading={this.props.twitchTopCommunities.loading}
        error={this.props.twitchTopCommunities.error}>

        <CommunityGrid hasMore={this.props.twitchTopCommunities.total > this.props.twitchTopCommunities.communities.length}
                       communities={this.props.twitchTopCommunities.communities}
                       loadMore={this.props.getMoreTopCommunities} />

      </Directory>
    )
  }
}

Communities.propTypes = {
  twitchTopCommunities: React.PropTypes.object,
  getMoreTopCommunities: React.PropTypes.func
}

export default Communities;
