// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import Toolbar from 'react-md/lib/Toolbars';

class DirectoryToolbar extends Component {
  render() {
    return (
      <Toolbar
        className="md-toolbar--sub"
        title={this.props.title}
        titleClassName="md-card-title--title md-text md-card-title--large"
        themed
        fixed
        actions={this.props.actions}
      />
    )
  }
}

DirectoryToolbar.propTypes = {
  title: React.PropTypes.string,
  actions: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ])
}

export default DirectoryToolbar;
