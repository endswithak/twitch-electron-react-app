// @flow
import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import NavLogin from './NavLogin';
import { hashHistory } from 'react-router'

export default class LeftNavigation extends Component {
  props: {
    authenticated: bool,
    login: () => void,
    logout: () => void,
    children: HTMLElement,
    twitchAPI: Object,
    router: Object
  }

  render() {
    const navItems = [{
      primaryText: "Following",
      leftIcon: (<FontIcon>favorite</FontIcon>),
      onClick: () => hashHistory.push('/following'),
      active: this.props.router.location.pathname === '/following'
    },{
      primaryText: "Games",
      leftIcon: (<FontIcon>games</FontIcon>),
      onClick: () => hashHistory.push('/'),
      active: this.props.router.location.pathname === '/'
    },{
      primaryText: "Channels",
      leftIcon: (<FontIcon>videocam</FontIcon>),
      onClick: () => hashHistory.push('/channels'),
      active: this.props.router.location.pathname === '/channels'
    },{
      primaryText: "Videos",
      leftIcon: (<FontIcon>video_library</FontIcon>),
      onClick: () => hashHistory.push('/videos'),
      active: this.props.router.location.pathname === '/videos'
    }];
    const loginButton = (
      <NavLogin login={this.props.login}
                logout={this.props.logout}
                twitchAPI={this.props.twitchAPI} />
    );
    return (
      <NavigationDrawer
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        navItems={navItems}
        drawerTitle="Electwitch"
        toolbarActions={loginButton}
        contentId="root"
      >
        {this.props.children}
      </NavigationDrawer>
    );
  }
}
