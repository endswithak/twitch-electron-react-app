import Twitch from 'twitch-sdk';

export const GET_GAME_REL_SUCCESS = 'GET_GAME_REL_SUCCESS';
export const GET_GAME_REL_ERROR = 'GET_GAME_REL_ERROR';
export const FOLLOW_GAME_SUCCESS = 'FOLLOW_GAME_SUCCESS';
export const FOLLOW_GAME_ERROR = 'FOLLOW_GAME_ERROR';
export const UNFOLLOW_GAME_SUCCESS = 'UNFOLLOW_GAME_SUCCESS';
export const UNFOLLOW_GAME_ERROR = 'UNFOLLOW_GAME_ERROR';
export const GAME_REL_LOADING = 'GAME_REL_LOADING';
export const GAME_REL_LOADED = 'GAME_REL_LOADED';

export function getGameRelSuccess(game) {
  return {
    type: GET_GAME_REL_SUCCESS,
    game
  }
}

export function getGameRelError(game) {
  return {
    type: GET_GAME_REL_ERROR,
    game
  }
}

export function followGameSuccess(game) {
  return {
    type: FOLLOW_GAME_SUCCESS,
    game
  }
}

export function followGameError(error, game) {
  return {
    type: FOLLOW_GAME_ERROR,
    error,
    game
  }
}

export function unfollowGameSuccess(game) {
  return {
    type: UNFOLLOW_GAME_SUCCESS,
    game
  }
}

export function unfollowGameError(error, game) {
  return {
    type: UNFOLLOW_GAME_ERROR,
    error,
    game
  }
}

export function gameRelLoading(game) {
  return {
    type: GAME_REL_LOADING,
    game
  }
}

export function gameRelLoaded(game) {
  return {
    type: GAME_REL_LOADED,
    game
  }
}

export function getGameRel(user, target) {
  return (dispatch) => {
    dispatch(gameRelLoading(target));
    Twitch.api({method: `users/${user}/follows/games/${encodeURIComponent(target)}`}, function(error, game) {
      if (error) {
        dispatch(getGameRelError(target));
      } else {
        dispatch(getGameRelSuccess(target));
      }
      dispatch(gameRelLoaded(target));
    }, true);
  }
}

export function shouldGetGameRel(state, game) {
  const rel = state.twitchGameRel[game];
  if (!rel && state.twitchStatus.status.authenticated) {
    return true;
  } else {
    return false;
  }
}

export function getGameRelIfNeeded(user, target) {
  return (dispatch, getState) => {
    if (shouldGetGameRel(getState(), target)) {
      return dispatch(getGameRel(user, target));
    }
  }
}

export function followGame(user, target) {
  return (dispatch) => {
    dispatch(gameRelLoading(target));
    Twitch.api({method: `users/${user}/follows/games/${encodeURIComponent(target)}`, verb: 'PUT'}, function(error) {
      if (error) {
        dispatch(followGameError(error, target));
      } else {
        dispatch(followGameSuccess(target));
      }
      dispatch(gameRelLoaded(target));
    }, true);
  }
}

export function unfollowGame(user, target) {
  return (dispatch) => {
    dispatch(gameRelLoading(target));
    Twitch.api({method: `users/${user}/follows/games/${encodeURIComponent(target)}`, verb: 'DELETE'}, function(error) {
      if (error) {
        dispatch(unfollowGameError(error, target));
      } else {
        dispatch(unfollowGameSuccess(target));
      }
      dispatch(gameRelLoaded(target));
    }, true);
  }
}
