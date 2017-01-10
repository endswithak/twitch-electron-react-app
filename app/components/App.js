import React, { Component } from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import NavigationDrawer from 'react-md/lib/NavigationDrawers';
import LinearProgress from 'react-md/lib/Progress/LinearProgress';
import NavLoginWrap from '../containers/NavLoginWrap';
import ErrorPage from './ErrorPage';
import BackButtonWrap from '../containers/BackButtonWrap';
import ForwardButtonWrap from '../containers/ForwardButtonWrap';
import SearchWrap from '../containers/SearchWrap';

export default class App extends Component {
  render() {
    const navItems = [{
      primaryText: "Following",
      leftIcon: <FontIcon disabled={!this.props.twitchStatus.status.authenticated}>favorite</FontIcon>,
      onClick: () => this.props.router.push('/following'),
      active: this.props.router.location.pathname === '/following',
      disabled: Boolean(!this.props.twitchStatus.status.authenticated)
    },{
      primaryText: "Games",
      leftIcon: <FontIcon>games</FontIcon>,
      onClick: () => this.props.router.push('/'),
      active: this.props.router.location.pathname === '/'
    },{
      primaryText: "Channels",
      leftIcon: <FontIcon>videocam</FontIcon>,
      onClick: () => this.props.router.push('/channels'),
      active: this.props.router.location.pathname === '/channels'
    },{
      primaryText: "Communities",
      leftIcon: <FontIcon>group</FontIcon>,
      onClick: () => this.props.router.push('/communities'),
      active: this.props.router.location.pathname === '/communities'
    },{
      primaryText: "Clips",
      leftIcon: <FontIcon>movie</FontIcon>,
      onClick: () => this.props.router.push('/clips'),
      active: this.props.router.location.pathname === '/clips'
    }];
    return (
      <NavigationDrawer
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        navItems={navItems}
        toolbarThemeType="themed"
        toolbarChildren={[
          <BackButtonWrap key="backButton"
                          location={this.props.location}
                          router={this.props.router} />,
          <ForwardButtonWrap key="forwardButton"
                             location={this.props.location}
                             router={this.props.router} />,
          <SearchWrap key="search" router={this.props.router} />
        ]}
        contentId="root"
        toolbarStyle={{boxShadow: 'none', zIndex: 15}}
        toolbarActions={<NavLoginWrap router={this.props.router} />}
      >
        <div style={{paddingTop: 64}}>
          {this.props.children}
        </div>
      </NavigationDrawer>
    );
  }
}
