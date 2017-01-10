import Twitch from 'twitch-sdk';

export const GET_TOP_CLIPS_SUCCESS = 'GET_TOP_CLIPS_SUCCESS';
export const GET_TOP_CLIPS_ERROR = 'GET_TOP_CLIPS_ERROR';
export const TOP_CLIPS_LOADING = 'TOP_CLIPS_LOADING';
export const TOP_CLIPS_LOADED = 'TOP_CLIPS_LOADED';
export const MORE_TOP_CLIPS_SUCCESS = 'GET_MORE_TOP_CLIPS_SUCCESS';
export const MORE_TOP_CLIPS_ERROR = 'MORE_TOP_CLIPS_ERROR';
export const MORE_TOP_CLIPS_LOADING = 'MORE_TOP_CLIPS_LOADING';
export const MORE_TOP_CLIPS_LOADED = 'MORE_TOP_CLIPS_LOADED';

export function getTopClipsSuccess(clips, limit, period, trending, cursor) {
  return {
    type: GET_TOP_CLIPS_SUCCESS,
    clips,
    limit,
    period,
    trending,
    cursor,
    receivedAt: Date.now()
  };
}

export function getTopClipsError(error) {
  return {
    type: GET_TOP_CLIPS_ERROR,
    error
  };
}

export function topClipsLoading() {
  return {
    type: TOP_CLIPS_LOADING,
  };
}

export function topClipsLoaded() {
  return {
    type: TOP_CLIPS_LOADED,
  };
}

export function moreTopClipsSuccess(clips, limit, period, trending, cursor) {
  return {
    type: MORE_TOP_CLIPS_SUCCESS,
    clips,
    limit,
    period,
    trending,
    cursor
  };
}

export function moreTopClipsError(error) {
  return {
    type: MORE_TOP_CLIPS_ERROR,
    error
  };
}

export function moreTopClipsLoading() {
  return {
    type: MORE_TOP_CLIPS_LOADING,
  };
}

export function moreTopClipsLoaded() {
  return {
    type: MORE_TOP_CLIPS_LOADED,
  };
}

export function getTopClips(limit, period, trending) {
  return (dispatch) => {
    dispatch(topClipsLoading());
    Twitch.api(
      {
        method: 'clips/top',
        params: {
          limit,
          period,
          trending,
          api_version: 4
        }
      },
      (error, clips) => {
        if (error) {
          dispatch(getTopClipsError(error));
        } else {
          dispatch(getTopClipsSuccess(clips.clips, limit, period, trending, clips._cursor));
        }
        dispatch(topClipsLoaded());
      }
    );
  };
}

export function shouldGetTopClips(state) {
  const topClips = state.twitchTopClips.clips;
  const fetchLife = state.twitchTopClips.receivedAt;
  const currentTime = Date.now();
  if (topClips.length === 0 || (fetchLife && currentTime - fetchLife >= 600000)) {
    return true;
  } else {
    return false;
  }
}

export function getTopClipsIfNeeded(limit, period, trending) {
  return (dispatch, getState) => {
    if (shouldGetTopClips(getState())) {
      return dispatch(getTopClips(limit, period, trending));
    }
  }
}

export function getMoreTopClips() {
  return (dispatch, getState) => {
    dispatch(moreTopClipsLoading());
    const nextLimit = getState().twitchTopClips.limit;
    const nextCursor = getState().twitchTopClips.cursor;
    const nextPeriod = getState().twitchTopClips.period;
    const nextTrending = getState().twitchTopClips.trending;
    Twitch.api(
      {
        method: 'clips/top',
        params: {
          limit: nextLimit,
          period: nextPeriod,
          trending: nextTrending,
          cursor: nextCursor,
          api_version: 4
        }
      },
      (error, clips) => {
        if (error) {
          dispatch(moreTopClipsError(error));
        } else {
          dispatch(moreTopClipsSuccess(clips.clips, nextLimit, nextPeriod, nextTrending, clips._cursor));
        }
        dispatch(moreTopClipsLoaded());
      }
    );
  };
}
