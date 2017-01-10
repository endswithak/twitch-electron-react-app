// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppWrap from './containers/AppWrap';
import requiresAuth from './containers/requiresAuth';
import GamesWrap from './containers/GamesWrap';
import ChannelsWrap from './containers/ChannelsWrap';
import FollowingWrap from './containers/FollowingWrap';
import GameStreamsWrap from './containers/GameStreamsWrap';
import ChannelPageWrap from './containers/ChannelPageWrap';
import CommunitiesWrap from './containers/CommunitiesWrap';
import CommunityStreamsWrap from './containers/CommunityStreamsWrap';
import ClipsWrap from './containers/ClipsWrap';

export default (
  <Route path="/" component={AppWrap}>
    <IndexRoute component={GamesWrap} title="Games" />
    <Route path="/games/:gameName" component={GameStreamsWrap} />
    <Route path="/channels" component={ChannelsWrap} />
    <Route path="/channels/:channelId" component={ChannelPageWrap} />
    <Route path="/following" component={requiresAuth(FollowingWrap, true, '/')} />
    <Route path="/communities" component={CommunitiesWrap} />
    <Route path="/communities/:communityId" component={CommunityStreamsWrap} />
    <Route path="/clips" component={ClipsWrap} />
  </Route>
);
