import Twitch from 'twitch-sdk';

export const GET_GAME_STREAMS_SUCCESS = 'GET_GAME_STREAMS_SUCCESS';
export const GET_GAME_STREAMS_ERROR = 'GET_GAME_STREAMS_ERROR';
export const GAME_STREAMS_LOADING = 'GAME_STREAMS_LOADING';
export const GAME_STREAMS_LOADED = 'GAME_STREAMS_LOADED';
export const MORE_GAME_STREAMS_SUCCESS = 'MORE_GAME_STREAMS_SUCCESS';
export const MORE_GAME_STREAMS_ERROR = 'MORE_GAME_STREAMS_ERROR';
export const MORE_GAME_STREAMS_LOADING = 'MORE_GAME_STREAMS_LOADING';
export const MORE_GAME_STREAMS_LOADED = 'MORE_GAME_STREAMS_LOADED';

export function getGameStreamsSuccess(streams, limit, offset, game, total) {
  return {
    type: GET_GAME_STREAMS_SUCCESS,
    streams,
    limit,
    offset,
    game,
    total,
    receivedAt: Date.now()
  };
}

export function getGameStreamsError(error, game) {
  return {
    type: GET_GAME_STREAMS_ERROR,
    error,
    game
  };
}

export function gameStreamsLoading(game) {
  return {
    type: GAME_STREAMS_LOADING,
    game
  };
}

export function gameStreamsLoaded(game) {
  return {
    type: GAME_STREAMS_LOADED,
    game
  };
}

export function moreGameStreamsSuccess(streams, limit, offset, game, total) {
  return {
    type: MORE_GAME_STREAMS_SUCCESS,
    streams,
    limit,
    offset,
    game,
    total
  };
}

export function moreGameStreamsError(error, game) {
  return {
    type: MORE_GAME_STREAMS_ERROR,
    error,
    game
  };
}

export function moreGameStreamsLoading(game) {
  return {
    type: MORE_GAME_STREAMS_LOADING,
    game
  };
}

export function moreGameStreamsLoaded(game) {
  return {
    type: MORE_GAME_STREAMS_LOADED,
    game
  };
}

export function getGameStreams(limit, offset, game) {
  return (dispatch) => {
    dispatch(gameStreamsLoading(game));
    Twitch.api({method: 'streams', params: {limit, offset, game: encodeURIComponent(game)}}, (error, streams) => {
      if (error) {
        dispatch(getGameStreamsError(error, game));
      } else {
        dispatch(getGameStreamsSuccess(streams.streams, limit, offset, game, streams._total))
      }
      dispatch(gameStreamsLoaded(game));
    });
  };
}

export function shouldGetGameStreams(state, game) {
  const gameStreams = state.twitchGameStreams[game];
  var streams = null;
  if (gameStreams) {
    streams = gameStreams.streams;
  }
  const fetchLife = streams ? state.twitchGameStreams[game].receivedAt : null;
  const currentTime = Date.now();
  if ((!gameStreams || (fetchLife && currentTime - fetchLife >= 60000)) || (streams && streams.length === 0)) {
    return true;
  } else {
    return false;
  }
}

export function getGameStreamsIfNeeded(limit, offset, game) {
  return (dispatch, getState) => {
    if (shouldGetGameStreams(getState(), game)) {
      return dispatch(getGameStreams(limit, offset, game));
    }
  }
}

export function moreGameStreams(game) {
  return (dispatch, getState) => {
    dispatch(moreGameStreamsLoading(game));
    const nextLimit = getState().twitchGameStreams[game].limit;
    const nextOffset = getState().twitchGameStreams[game].nextOffset;
    Twitch.api({method: 'streams', params: {limit: nextLimit, offset: nextOffset, game: encodeURIComponent(game)}}, (error, streams) => {
      if (error) {
        dispatch(moreGameStreamsError(error, game));
      } else {
        dispatch(moreGameStreamsSuccess(streams.streams, nextLimit, nextOffset, game, streams._total))
      }
      dispatch(moreGameStreamsLoaded(game));
    });
  };
}
