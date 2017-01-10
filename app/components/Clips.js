// @flow
import React, { Component } from 'react';
import ClipsGrid from './ClipsGrid';
import Directory from './Directory';
import SelectField from 'react-md/lib/SelectFields';
import ClipPeriodFilter from './ClipPeriodFilter';

class Clips extends Component {
  render() {
    const periodFilter = (
      <ClipPeriodFilter twitchTopClips={this.props.twitchTopClips} getTopClips={this.props.getTopClips} />
    );
    return (
      <Directory
        title="Clips"
        loading={this.props.twitchTopClips.loading}
        error={this.props.twitchTopClips.error}
        actions={periodFilter}>

        <ClipsGrid hasMore={true}
                   clips={this.props.twitchTopClips.clips}
                   loadMore={this.props.getMoreTopClips} />

      </Directory>
    )
  }
}

Clips.propTypes = {
  twitchTopClips: React.PropTypes.object,
  getMoreTopClips: React.PropTypes.func
}

export default Clips;
