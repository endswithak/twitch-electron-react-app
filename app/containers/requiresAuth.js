// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchStatusActions from '../actions/twitchSDK/auth/status';

export default function requiresInit(Component, redirect, redirectRoute) {
  class AuthenticatedComponent extends React.Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.twitchStatus.status.authenticated !== this.props.twitchStatus.status.authenticated) {
        this._checkAndRedirect();
      }
    }

    _checkAndRedirect() {
      if (!this.props.twitchStatus.status.authenticated && redirect) {
        this.props.router.push(redirectRoute);
      }
    }

    render() {
      return (
        <div className="authenticated">
          { this.props.twitchStatus.status.authenticated ? <Component {...this.props} /> : null }
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      twitchStatus: state.twitchStatus,
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(TwitchStatusActions, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);
}
