// @flow
import React, { Component } from 'react';
import SelectField from 'react-md/lib/SelectFields';

class ClipTrendingFilter extends Component {
  constructor() {
    super();
    this._updateTrendingIfNeeded = this._updateTrendingIfNeeded.bind(this);
    this._getApiTrendingValue = this._getApiTrendingValue.bind(this);
    this._getTrendingValue = this._getTrendingValue.bind(this);
  }
  _getApiTrendingValue(value) {
    switch(value) {
      case 'Top':
        return false;
        break;
      case 'Hot':
        return true;
        break;
      default:
        return;
    }
  }
  _getTrendingValue(value) {
    switch(value) {
      case false:
        return 'Top';
        break;
      case true:
        return 'Hot';
        break;
      default:
        return;
    }
  }
  _updateTrendingIfNeeded(newValue, newActiveIndex, event) {
    const newTrending = this._getApiTrendingValue(newValue);
    if (newTrending !== this.props.twitchTopClips.trending) {
      this.props.getTopClips(this.props.twitchTopClips.limit, this.props.twitchTopClips.period, newTrending);
    }
  }
  render() {
    return (
      <SelectField id="selectButtonTrending"
                   className="md-btn--toolbar"
                   placeholder="Top"
                   menuItems={['Top', 'Hot']}
                   itemLabel="trending"
                   itemValue="trending"
                   defaultValue="Top"
                   value={this._getTrendingValue(this.props.twitchTopClips.trending)}
                   position={SelectField.Positions.BELOW}
                   onChange={(newValue, newActiveIndex, event) => this._updateTrendingIfNeeded(newValue, newActiveIndex, event)}
      />
    )
  }
}

export default ClipTrendingFilter;
