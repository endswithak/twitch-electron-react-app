// @flow
import React, { Component } from 'react';
import DirectoryToolbar from './DirectoryToolbar';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import ErrorPage from './ErrorPage';

class Directory extends Component {
  render() {
    const DirectoryError = ErrorPage(this.props.error);
    return (
      <div className="md-grid md-grid--no-spacing">
        <DirectoryToolbar title={this.props.title} actions={this.props.actions} />
        {
          this.props.loading
          ?
          <CircularProgress id="loading-directory" />
          :
          this.props.error
          ?
          <DirectoryError />
          :
          this.props.children
        }
      </div>
    )
  }
}

Directory.propTypes = {
  title: React.PropTypes.string,
  actions: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.arrayOf(React.PropTypes.element),
  ]),
  loading: React.PropTypes.bool,
  error: React.PropTypes.object
}

export default Directory;
