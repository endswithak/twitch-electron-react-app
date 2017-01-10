// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';

export class NavArrows extends Component {
  constructor() {
    super();
    this.backButtonAction = this.backButtonAction.bind(this);
    this.forwardButtonAction = this.forwardButtonAction.bind(this);
    this.renderBackButton = this.renderBackButton.bind(this);
    this.renderForwardButton = this.renderForwardButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.props.increaseBackButtonHistory();
    }
  }

  backButtonAction() {
    this.props.router.goBack();
  }

  forwardButtonAction() {
    this.props.router.goForward();
  }

  renderBackButton() {
    if (this.props.backButton.buttonHistory > 0) {
      return <Button style={{ alignSelf: 'center'}} icon key='backButton' onClick={() => this.backButtonAction()}>arrow_back</Button>
    }
    return <Button style={{ alignSelf: 'center'}} icon key='backButton' disabled>arrow_back</Button>
  }

  renderForwardButton() {
    if (this.props.forwardButton.buttonHistory > 0) {
      return <Button style={{ alignSelf: 'center'}} icon key='forwardButton' onClick={() => this.forwardButtonAction()}>arrow_forward</Button>
    }
    return <Button style={{ alignSelf: 'center'}} icon key='forwardButton' disabled>arrow_forward</Button>
  }

  render() {
    const backButton = renderBackButton();
    const forwardButton = renderForwardButton();
    return (
      <div>
        {backButton}
      </div>
    )
  }
}
