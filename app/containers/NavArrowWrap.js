// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as BackButtonActions from '../actions/backButton';
import * as ForwardButtonActions from '../actions/forwardButton';
import NavArrows from '../components/NavArrows';

function mapStateToProps(state) {
  return {
    backButton: state.backButton,
    forwardButton: state.forwardButton
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...BackButtonActions, ...ForwardButtonActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavArrows);
