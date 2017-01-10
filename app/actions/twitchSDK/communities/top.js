import Twitch from 'twitch-sdk';

export const GET_TOP_COMMUNITIES_SUCCESS = 'GET_TOP_COMMUNITIES_SUCCESS';
export const GET_TOP_COMMUNITIES_ERROR = 'GET_TOP_COMMUNITIES_ERROR';
export const TOP_COMMUNITIES_LOADING = 'TOP_COMMUNITIES_LOADING';
export const TOP_COMMUNITIES_LOADED = 'TOP_COMMUNITIES_LOADED';
export const MORE_TOP_COMMUNITIES_SUCCESS = 'GET_MORE_TOP_COMMUNITIES_SUCCESS';
export const MORE_TOP_COMMUNITIES_ERROR = 'MORE_TOP_COMMUNITIES_ERROR';
export const MORE_TOP_COMMUNITIES_LOADING = 'MORE_TOP_COMMUNITIES_LOADING';
export const MORE_TOP_COMMUNITIES_LOADED = 'MORE_TOP_COMMUNITIES_LOADED';

export function getTopCommunitiesSuccess(communities, limit, cursor, total) {
  return {
    type: GET_TOP_COMMUNITIES_SUCCESS,
    communities,
    limit,
    cursor,
    total,
    receivedAt: Date.now()
  };
}

export function getTopCommunitiesError(error) {
  return {
    type: GET_TOP_COMMUNITIES_ERROR,
    error
  };
}

export function topCommunitiesLoading() {
  return {
    type: TOP_COMMUNITIES_LOADING,
  };
}

export function topCommunitiesLoaded() {
  return {
    type: TOP_COMMUNITIES_LOADED,
  };
}

export function moreTopCommunitiesSuccess(communities, limit, cursor, total) {
  return {
    type: MORE_TOP_COMMUNITIES_SUCCESS,
    communities,
    limit,
    cursor,
    total
  };
}

export function moreTopCommunitiesError(error) {
  return {
    type: MORE_TOP_COMMUNITIES_ERROR,
    error
  };
}

export function moreTopCommunitiesLoading() {
  return {
    type: MORE_TOP_COMMUNITIES_LOADING,
  };
}

export function moreTopCommunitiesLoaded() {
  return {
    type: MORE_TOP_COMMUNITIES_LOADED,
  };
}

export function getTopCommunities(limit) {
  return (dispatch) => {
    dispatch(topCommunitiesLoading());
    Twitch.api({method: 'communities/top', params: {limit, api_version: 5}}, (error, communities) => {
      if (error) {
        dispatch(getTopCommunitiesError(error));
      } else {
        dispatch(getTopCommunitiesSuccess(communities.communities, limit, communities._cursor, communities._total));
      }
      dispatch(topCommunitiesLoaded());
    });
  };
}

export function shouldGetTopCommunities(state) {
  const topCommunities = state.twitchTopCommunities.communities;
  const fetchLife = state.twitchTopCommunities.receivedAt;
  const currentTime = Date.now();
  if (topCommunities.length === 0 || (fetchLife && currentTime - fetchLife >= 60000)) {
    return true;
  } else {
    return false;
  }
}

export function getTopCommunitiesIfNeeded(limit) {
  return (dispatch, getState) => {
    if (shouldGetTopCommunities(getState())) {
      return dispatch(getTopCommunities(limit));
    }
  }
}

export function getMoreTopCommunities() {
  return (dispatch, getState) => {
    dispatch(moreTopCommunitiesLoading());
    const nextLimit = getState().twitchTopCommunities.limit;
    const nextCursor = getState().twitchTopCommunities.cursor;
    Twitch.api({method: 'communities/top', params: {limit:nextLimit, cursor:nextCursor, api_version: 5}}, (error, communities) => {
      if (error) {
        dispatch(moreTopCommunitiesError(error));
      } else {
        dispatch(moreTopCommunitiesSuccess(communities.communities, nextLimit, communities._cursor, communities._total));
      }
      dispatch(moreTopCommunitiesLoaded());
    });
  };
}
