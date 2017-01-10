// @flow
import React, { Component } from 'react';
import SelectField from 'react-md/lib/SelectFields';

export default class TopClipFilters extends Component {
  render() {
    const DirectoryError = ErrorPage(this.props.error);
    return (
      <div className="md-grid">
        <SelectField
          id="selectButtonPeriod"
          placeholder="Day"
          menuItems={['Day', 'Week', 'Month', 'All']}
          itemLabel="period"
          itemValue="period"
          position={SelectField.Positions.BELOW}
          className="md-cell md-cell--1-phone md-cell--1-tablet md-cell--3-desktop"
        />
      </div>
    )
  }
}
