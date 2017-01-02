import React, { Component } from 'react';
import LeftNavigation from './LeftNavigation';

// const loginButton = (
//   this.props.twitchAPI.status.authenticated ?
//   <NavAvatar channel={this.props.twitchAPI.channel} logout={this.props.twitchLogout}  />
//   :
//   <LoginButton authenticated={this.props.twitchAPI.status.authenticated}
//                login={this.props.twitchLogin}
//                logout={this.props.twitchLogout} />
// )

// const leftNav = (
//   <LeftNavigation children={React.cloneElement(this.props.children, this.props)}
//                   login={this.props.twitchLogin}
//                   logout={this.props.twitchLogout}
//                   twitchAPI={this.props.twitchAPI}
//                   router={this.props.router}
//                   twitchGetGames={this.props.twitchGetGames}
//                   twitchGetStreams={this.props.twitchGetStreams}
//                   />
// )

// const navtabs = (
//   <NavTabs twitchAPI={this.props.twitchAPI}
//              twitchGetGames={this.props.twitchGetGames}
//              twitchGetStreams={this.props.twitchGetStreams}
//              login={this.props.twitchLogin}
//              logout={this.props.twitchLogout} />
// )

export default class App extends Component {
  props: {
    twitchInit: () => void,
    twitchLogin: () => void,
    twitchLogout: () => void,
    twitchAPI: Object,
  }

  componentDidMount() {
    this.props.twitchInit();
  }

  render() {
    return (
      <LeftNavigation children={React.cloneElement(this.props.children, this.props)}
                      login={this.props.twitchLogin}
                      logout={this.props.twitchLogout}
                      twitchAPI={this.props.twitchAPI}
                      router={this.props.router}
                      twitchGetGames={this.props.twitchGetGames}
                      twitchGetStreams={this.props.twitchGetStreams}
                      />
    );
  }
}
