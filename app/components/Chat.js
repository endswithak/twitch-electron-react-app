// @flow
import React, { Component } from 'react';
import GameCard from './GameCard';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import ChatMessage from './ChatMessage';

export default class Chat extends Component {
  constructor() {
    super();
    this._renderChat = this._renderChat.bind(this);
    this._renderLoadingIndicator = this._renderLoadingIndicator.bind(this);
    this._updateScroll = this._updateScroll.bind(this);
    this._userScroll = this._userScroll.bind(this);
  }
  componentDidMount() {
    if (this.props.twitchStatus.status.authenticated) {
      const identity = {
        username: this.props.twitchUser.user.name,
        token: this.props.twitchStatus.status.token
      }
      this.props.tmiConnect(this.props.channelName, identity);
    } else {
      this.props.tmiConnect(this.props.channelName);
    }
  }
  componentWillUnmount() {
    this.props.tmiDisconnect();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tmi.messages !== this.props.tmi.messages) {
      this._updateScroll();
    }
  }
  _updateScroll() {
    const chatWrapper = document.getElementById("chat-wrapper");
    if (!this.props.chatScroll._userScroll) {
      chatWrapper.scrollTop = chatWrapper.scrollHeight;
    }
  }
  _userScroll() {
    this.props.chatUserScroll();
  }
  _renderChat() {
    return (
      <div id="chat-wrapper" style={{overflow: 'auto', overflowY: 'scroll', height: '100%', width: '100%', position: 'absolute'}}>
        {this.props.tmi.messages.map((message, index) => <ChatMessage {...this.props} key={index} index={index} message={message} />)}
      </div>
    )
  }
  _renderLoadingIndicator() {
    return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><CircularProgress id="chat-wrapper" /></div>
  }
  render() {
    if (this.props.tmi.loading || this.props.tmi.connecting) {
      return <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{this._renderLoadingIndicator()}</div>
    }
    return <div style={{height: '100%', position: 'absolute', width: '100%'}}>{this._renderChat()}</div>
  }
}
