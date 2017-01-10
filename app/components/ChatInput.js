// @flow
import React, { Component } from 'react';
import TextField from 'react-md/lib/TextFields';
import Button from 'react-md/lib/Buttons';

export default class ChatInput extends Component {
  constructor() {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleEnter = this._handleEnter.bind(this);
  }
  _handleSubmit(e) {
    e.preventDefault();
    const chatInput = this._field.getField();
    const chatInputValue = chatInput.value;
    if (chatInputValue.length < 1) {
      return;
    }
    this.props.tmiSay(this.props.channelName, chatInputValue);
    this.refs.chatForm.reset();
  }
  _handleEnter(e) {
    if (e.keyCode == 13 && !e.shiftKey) {
      this._handleSubmit(e);
    }
  }
  render() {
    return (
      <div className="md-grid md-grid--no-spacing md-cell md-cell--3-desktop md-cell--3-tablet">
        <form ref="chatForm" className="md-grid md-cell md-cell--middle md-cell--12" onSubmit={this._handleSubmit}>
          <TextField
            id="chatInput"
            placeholder={this.props.twitchStatus.status.authenticated ? "Send a message" : "Login to chat"}
            onKeyDown={(e) => this._handleEnter(e)}
            rows={1}
            disabled={!this.props.twitchStatus.status.authenticated}
            maxRows={2}
            ref={field => this._field = field}
            lineDirection="center"
            className="md-cell md-cell--12"
          />
        </form>
      </div>
    )
  }
}
