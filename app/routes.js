// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import Games from './containers/GamesWrap';
import Channels from './containers/ChannelsWrap';
import Videos from './containers/VideosWrap';
import Following from './containers/FollowingWrap';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Games} />
    <Route path="/channels" component={Channels} />
    <Route path="/videos" component={Videos} />
    <Route path="/following" component={Following} />
  </Route>
);
