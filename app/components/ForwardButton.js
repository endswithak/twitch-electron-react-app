// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';

export default class ForwardButton extends Component {
  constructor() {
    super();
    this.forwardButtonAction = this.forwardButtonAction.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      if (this.props.forwardButton.willDecrease) {
        this.props.decreaseForwardButtonHistory();
        this.props.forwardButtonWillDecrease(false);
      }
      else if (this.props.backButton.willIncrease && nextProps.forwardButton.buttonHistory === this.props.forwardButton.buttonHistory) {
        this.props.resetForwardButtonHistory();
      }
    }
  }

  forwardButtonAction() {
    this.props.forwardButtonWillDecrease(true);
    this.props.router.goForward();
  }

  render() {
    if (this.props.forwardButton.buttonHistory > 0) {
      return <Button style={{ alignSelf: 'center'}} icon key='forwardButton' onClick={() => this.forwardButtonAction()}>arrow_forward</Button>
    }
    return <Button style={{ alignSelf: 'center'}} icon key='forwardButton' disabled>arrow_forward</Button>
  }
}
