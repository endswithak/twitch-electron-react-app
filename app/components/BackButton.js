// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';

export default class BackButton extends Component {
  constructor() {
    super();
    this.backButtonAction = this.backButtonAction.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (this.props.backButton.willDecrease) {
        this.props.decreaseBackButtonHistory();
        this.props.backButtonWillDecrease(false);
        if (this.props.forwardButton.willIncrease) {
          this.props.increaseForwardButtonHistory();
          this.props.forwardButtonWillIncrease(false);
        }
      }
      else {
        this.props.increaseBackButtonHistory();
      }
    }
  }

  backButtonAction() {
    this.props.backButtonWillDecrease(true);
    this.props.forwardButtonWillIncrease(true);
    this.props.router.goBack();
  }

  render() {
    if (this.props.backButton.buttonHistory > 0) {
      return <Button style={{ alignSelf: 'center', marginLeft: 16}} icon key='backButton' onClick={() => this.backButtonAction()}>arrow_back</Button>
    }
    return <Button style={{ alignSelf: 'center', marginLeft: 16}} icon key='backButton' disabled>arrow_back</Button>
  }
}
