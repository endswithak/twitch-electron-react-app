// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchInitActions from '../actions/twitchSDK/auth/init';
import * as TwitchStatusActions from '../actions/twitchSDK/auth/status';
import App from '../components/App';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';

class AppWrap extends Component {
  componentDidMount() {
    this._checkAndInit();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.twitchInit.initiated !== this.props.twitchInit.initiated) {
      this._checkAndInit();
    }
  }

  _checkAndInit() {
    if (!this.props.twitchInit.initiated) {
      this.props.init();
    }
  }

  render() {
    return (
      <div className="app">
        { this.props.twitchInit.loading
          ?
          <CircularProgress id="loading" />
          :
          <App {...this.props} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    twitchInit: state.twitchInit,
    twitchStatus: state.twitchStatus
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...TwitchInitActions, ...TwitchStatusActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWrap);
