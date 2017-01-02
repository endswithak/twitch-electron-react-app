import React, { Component } from 'react';
import Tabs from 'react-md/lib/Tabs/Tabs';
import Tab from 'react-md/lib/Tabs/Tab';
import TabsContainer from 'react-md/lib/Tabs/TabsContainer';
import Toolbar from 'react-md/lib/Toolbars';
import Button from 'react-md/lib/Buttons/Button';

import GamesWrap from '../containers/GamesWrap';
import ChannelsWrap from '../containers/ChannelsWrap';

const nav = <Button key="nav" icon>menu</Button>;


export default class NavTabs extends Component {
  render() {
    return (
      <TabsContainer colored
                     fixed={true}>
        <Tabs tabId="tab">
          <Tab label="Games">
            <GamesWrap twitchAPI={this.props.twitchAPI} twitchGetGames={this.props.twitchGetGames} />
          </Tab>
          <Tab label="Channels">
            <ChannelsWrap twitchAPI={this.props.twitchAPI} twitchGetStreams={this.props.twitchGetStreams} />
          </Tab>
        </Tabs>
      </TabsContainer>
    );
  }
}
