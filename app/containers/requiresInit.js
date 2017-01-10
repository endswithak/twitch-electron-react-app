// @flow
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TwitchInitActions from '../actions/twitchSDK/auth/init';

export default function requiresInit(Component) {
  class InitiatedComponent extends React.Component {
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
        <div className="initiated">
          { this.props.twitchInit.initiated ? <Component {...this.props} /> : null }
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      twitchInit: state.twitchInit,
    };
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(TwitchInitActions, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(InitiatedComponent);
}
