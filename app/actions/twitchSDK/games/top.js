import Twitch from 'twitch-sdk';
import { normalize } from 'normalizr';
import { topGamesResponse } from '../schema';


export const GET_TOP_GAMES_SUCCESS = 'GET_TOP_GAMES_SUCCESS';
export const GET_TOP_GAMES_ERROR = 'GET_TOP_GAMES_ERROR';
export const TOP_GAMES_LOADING = 'TOP_GAMES_LOADING';
export const TOP_GAMES_LOADED = 'TOP_GAMES_LOADED';
export const MORE_TOP_GAMES_SUCCESS = 'GET_MORE_TOP_GAMES_SUCCESS';
export const MORE_TOP_GAMES_ERROR = 'MORE_TOP_GAMES_ERROR';
export const MORE_TOP_GAMES_LOADING = 'MORE_TOP_GAMES_LOADING';
export const MORE_TOP_GAMES_LOADED = 'MORE_TOP_GAMES_LOADED';

export function getTopGamesSuccess(games, limit, offset, total) {
  return {
    type: GET_TOP_GAMES_SUCCESS,
    games,
    limit,
    offset,
    total,
    receivedAt: Date.now()
  };
}

export function getTopGamesError(error) {
  return {
    type: GET_TOP_GAMES_ERROR,
    error
  };
}

export function topGamesLoading() {
  return {
    type: TOP_GAMES_LOADING,
  };
}

export function topGamesLoaded() {
  return {
    type: TOP_GAMES_LOADED,
  };
}

export function moreTopGamesSuccess(games, limit, offset, total) {
  return {
    type: MORE_TOP_GAMES_SUCCESS,
    games,
    limit,
    offset,
    total
  };
}

export function moreTopGamesError(error) {
  return {
    type: MORE_TOP_GAMES_ERROR,
    error
  };
}

export function moreTopGamesLoading() {
  return {
    type: MORE_TOP_GAMES_LOADING,
  };
}

export function moreTopGamesLoaded() {
  return {
    type: MORE_TOP_GAMES_LOADED,
  };
}

export function getTopGames(limit, offset) {
  return (dispatch) => {
    dispatch(topGamesLoading());
    Twitch.api({method: 'games/top', params: {limit:limit, offset:offset}}, (error, games) => {
      if (error) {
        dispatch(getTopGamesError(error));
      } else {
        console.log(normalize(games, topGamesResponse));
        dispatch(getTopGamesSuccess(games, limit, offset, games._total));
      }
      dispatch(topGamesLoaded());
    });
  };
}

export function shouldGetTopGames(state) {
  const topGames = state.twitchTopGames.games;
  const fetchLife = state.twitchTopGames.receivedAt;
  const currentTime = Date.now();
  if (topGames.length === 0 || (fetchLife && currentTime - fetchLife >= 60000)) {
    return true;
  } else {
    return false;
  }
}

export function getTopGamesIfNeeded(limit, offset) {
  return (dispatch, getState) => {
    if (shouldGetTopGames(getState())) {
      return dispatch(getTopGames(limit, offset));
    }
  }
}

export function getMoreTopGames() {
  return (dispatch, getState) => {
    dispatch(moreTopGamesLoading());
    const nextLimit = getState().twitchTopGames.limit;
    const nextOffset = getState().twitchTopGames.nextOffset;
    Twitch.api({method: 'games/top', params: {limit:nextLimit, offset:nextOffset}}, (error, games) => {
      if (error) {
        dispatch(moreTopGamesError(error));
      } else {
        dispatch(moreTopGamesSuccess(games, nextLimit, nextOffset, games._total));
      }
      dispatch(moreTopGamesLoaded());
    });
  };
}
