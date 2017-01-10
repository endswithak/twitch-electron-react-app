// @flow
import React, { Component } from 'react';
import ListItem from 'react-md/lib/Lists/ListItem';
import Avatar from 'react-md/lib/Avatars';

export default class EmoteSelectorEmote extends Component {
  render() {
    return (
      <ListItem style={{display: 'inline-block', width: 48}} tileStyle={{padding: '0 5px'}} primaryText={this.props.emote.code} leftAvatar={<Avatar src={`http://static-cdn.jtvnw.net/emoticons/v1/${this.props.emote.id}/3.0`} />} />
    )
  }
}
