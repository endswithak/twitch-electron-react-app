// @flow
import React, { Component } from 'react';
import ClipCard from './ClipCard';
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

class ClipsGrid extends Component {
  render() {
    return (
      <InfiniteScroll
        className="md-grid md-cell md-cell--12"
        pageStart={0}
        loadMore={() => this.props.loadMore()}
        hasMore={this.props.hasMore}
        initialLoad={false}
        threshold={25}
        loader={<CircularProgress id="loading-clips" />}>
        {
          this.props.clips.map((clip, index) =>
            <ClipCard {...this.props} key={index} index={index} clip={clip} />
          )
        }
      </InfiniteScroll>
    )
  }
}

ClipsGrid.propTypes = {
  hasMore: React.PropTypes.bool,
  clips: React.PropTypes.array,
  loadMore: React.PropTypes.func
}

export default ClipsGrid;
