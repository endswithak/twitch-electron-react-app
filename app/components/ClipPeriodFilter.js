// @flow
import React, { Component } from 'react';
import SelectField from 'react-md/lib/SelectFields';

class ClipPeriodFilter extends Component {
  constructor() {
    super();
    this._updatePeriodIfNeeded = this._updatePeriodIfNeeded.bind(this);
    this._getApiPeriodValue = this._getApiPeriodValue.bind(this);
    this._getPeriodValue = this._getPeriodValue.bind(this);
  }
  _getApiPeriodValue(value) {
    switch(value) {
      case 'Past 24 hours':
        return 'day';
        break;
      case 'Past week':
        return 'week';
        break;
      case 'Past month':
        return 'month';
        break;
      case 'All time':
        return 'all';
        break;
      default:
        return;
    }
  }
  _getPeriodValue(value) {
    switch(value) {
      case 'day':
        return 'Past 24 hours';
        break;
      case 'week':
        return 'Past week';
        break;
      case 'month':
        return 'Past month';
        break;
      case 'all':
        return 'All time';
        break;
      default:
        return;
    }
  }
  _updatePeriodIfNeeded(newValue, newActiveIndex, event) {
    const newPeriod = this._getApiPeriodValue(newValue);
    if (newPeriod !== this.props.twitchTopClips.period) {
      this.props.getTopClips(this.props.twitchTopClips.limit, newPeriod, this.props.twitchTopClips.trending);
    }
  }
  render() {
    return (
      <SelectField id="selectButtonPeriod"
                   className="md-btn--toolbar"
                   placeholder="Past 24 hours"
                   menuItems={['Past 24 hours', 'Past week', 'Past month', 'All time']}
                   itemLabel="period"
                   itemValue="period"
                   defaultValue="Past 24 hours"
                   value={this._getPeriodValue(this.props.twitchTopClips.period)}
                   position={SelectField.Positions.BELOW}
                   onChange={(newValue, newActiveIndex, event) => this._updatePeriodIfNeeded(newValue, newActiveIndex, event)}
      />
    )
  }
}

export default ClipPeriodFilter;
