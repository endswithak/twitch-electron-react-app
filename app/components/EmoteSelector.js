// @flow
import React, { Component } from 'react';
import Button from 'react-md/lib/Buttons/Button';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import List from 'react-md/lib/Lists/List';
import EmoteSelectorEmote from './EmoteSelectorEmote';
import ListItem from 'react-md/lib/Lists/ListItem';

export default class EmoteSelector extends Component {
  render() {
    return (
      <MenuButton
        id="emote-selector"
        icon
        buttonChildren="mood"
        fullWidth={true}
        position={MenuButton.Positions.BOTTOM_LEFT}
        className="menu-example"
        tooltipLabel="Open some menu"
      >
        <List>
          {
            Object.keys(this.props.twitchUserEmotes.emotes).map((key, index) => {
              return this.props.twitchUserEmotes.emotes[key].map((emote, index) =>
                <EmoteSelectorEmote emote={emote} key={index} />
              )
            })
          }
        </List>
      </MenuButton>
    );
  }
}
