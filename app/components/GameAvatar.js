// @flow
import React, { Component } from 'react';
import Avatar from 'react-md/lib/Avatars';

export default class GameAvatar extends Component {
  render() {
    return (
      <Avatar className={`md-avatar-boxart ${this.props.iconSized ? 'md-avatar-boxart--iconSized' : ''}`}
              src={this.props.boxart}
              style={this.props.style}
              key={this.props.index}
              role="presentation" />
    )
  }
}
