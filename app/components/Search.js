// @flow
import React, { Component } from 'react';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import Autocomplete from 'react-md/lib/Autocompletes';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import throttle from 'lodash.throttle';
import GameAvatar from './GameAvatar';
import UserAvatar from './UserAvatar';

import Avatar from 'react-md/lib/Avatars';
import Chip from 'react-md/lib/Chips';
import FontIcon from 'react-md/lib/FontIcons';

class Search extends Component {
  constructor(props) {
    super(props);
    this._searchTwitch = this._searchTwitch.bind(this);
    this._selectResult = this._selectResult.bind(this);
    this._throttledSearch = throttle(this._searchTwitch, 250);
  }

  _searchTwitch(q) {
    if (q.length > 0) {
      this.props.searchGames(q);
      this.props.searchChannels(q);
    }
  }

  _selectResult(result) {
    this._throttledSearch.cancel;
    if (result.type === 'game') {
      this.props.router.push(`/games/${encodeURIComponent(result.name)}`);
    } else if (result.type === 'channel') {
      this.props.router.push(`/channels/${result.id}`);
    }
  }

  render() {
    const progress = (
      <div style={{position: 'absolute', right: -32}}>
        <CircularProgress key="progress" id="searching" />
      </div>
    );

    const results = this.props.twitchSearchResults.map(result => {
      let leftAvatar,
          type,
          name;

      if (result.box) {
        leftAvatar = <GameAvatar key={result._id} style={{marginTop: -8}} boxart={result.box.small} iconSized={true} />;
        type = 'game';
        name = result.name;
      } else {
        leftAvatar = <UserAvatar  style={{width: 30, height: 30, marginTop: 5}} logo={result.logo} username={result.name} />;
        type = 'channel';
        name = result.display_name;
      }

      return {
        id: result._id,
        key: result._id,
        name,
        leftAvatar,
        type
      };
    });

    return (
      <div className="md-cell md-cell--8-desktop md-cell--4-tablet md-cell--middle" style={{position: 'relative', margin: '0 auto'}}>
        <CSSTransitionGroup
          component="div"
          className="md-grid md-grid--no-spacing md-cell md-cell--12"
          transitionName="md-cross-fade"
          transitionEnterTimeout={300}
          transitionLeave={false}
        >
          <Autocomplete
            id="search-twitch"
            type="search"
            className="md-cell md-cell--12"
            placeholder="Search games and channels"
            listStyle={{top: 44}}
            leftIcon={<FontIcon>search</FontIcon>}
            data={results}
            dataLabel="name"
            dataValue="_id"
            filter={null}
            onChange={this._throttledSearch}
            clearOnAutocomplete
            onAutocomplete={(data, index, matches) => this._selectResult(matches[index])}
          />
          {this.props.twitchSearchGames.loading || this.props.twitchSearchChannels.loading ? progress : null}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Search;


