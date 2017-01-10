// @flow
import React, { Component } from 'react';
import CommunityCard from './CommunityCard';
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

class CommunitiesGrid extends Component {
  render() {
    return (
      <InfiniteScroll
        className="md-grid md-cell md-cell--12"
        pageStart={0}
        loadMore={() => this.props.loadMore()}
        hasMore={this.props.hasMore}
        initialLoad={false}
        threshold={25}
        loader={<CircularProgress id="loading-communities" />}>
        {
          this.props.communities.map((community, index) =>
            <CommunityCard {...this.props} key={index} community={community} />
          )
        }
      </InfiniteScroll>
    )
  }
}

CommunitiesGrid.propTypes = {
  hasMore: React.PropTypes.bool,
  communities: React.PropTypes.array,
  loadMore: React.PropTypes.func
}

export default CommunitiesGrid;
