// @flow
import React, { Component } from 'react';
import StreamCard from './StreamCard';
import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

class StreamGrid extends Component {
  render() {
    return (
      <InfiniteScroll
        className="md-grid md-cell md-cell--12"
        pageStart={0}
        loadMore={() => this.props.loadMore()}
        hasMore={this.props.hasMore}
        initialLoad={false}
        threshold={25}
        loader={<CircularProgress id="loading-streams" />}>
        {
          this.props.streams.map((stream, index) =>
            <StreamCard {...this.props} key={index} stream={stream} />
          )
        }
      </InfiniteScroll>
    )
  }
}

StreamGrid.propTypes = {
  streams: React.PropTypes.array,
  hasMore: React.PropTypes.bool,
  loadMore: React.PropTypes.func
}

export default StreamGrid;
