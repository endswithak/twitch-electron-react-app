import Twitch from 'twitch-sdk';

export const GET_COMMUNITY_SUCCESS = 'GET_COMMUNITY_SUCCESS';
export const GET_COMMUNITY_ERROR = 'GET_COMMUNITY_ERROR';
export const COMMUNITY_LOADING = 'COMMUNITY_LOADING';
export const COMMUNITY_LOADED = 'COMMUNITY_LOADED';

export function getCommunitySuccess(community, communityId) {
  return {
    type: GET_COMMUNITY_SUCCESS,
    community,
    communityId
  };
}

export function getCommunityError(error, communityId) {
  return {
    type: GET_COMMUNITY_ERROR,
    error,
    communityId
  };
}

export function communityLoading(communityId) {
  return {
    type: COMMUNITY_LOADING,
    communityId
  };
}

export function communityLoaded(communityId) {
  return {
    type: COMMUNITY_LOADED,
    communityId
  };
}

export function shouldGetCommunity(state, communityId) {
  const community = state.twitchCommunity[communityId];
  if (!community.community._id) {
    return true;
  } else {
    return false;
  }
}

export function getCommunityIfNeeded(communityId) {
  return (dispatch, getState) => {
    if (shouldGetCommunity(getState(), communityId)) {
      return dispatch(getCommunity(communityId));
    }
  }
}

export function getCommunity(communityId) {
  return (dispatch) => {
    dispatch(communityLoading(communityId));
    Twitch.api({method: `communities/${communityId}`, params: {api_version: 5}}, (error, community) => {
      if (error) {
        dispatch(getCommunityError(error, communityId));
      } else {
        dispatch(getCommunitySuccess(community, communityId));
      }
      dispatch(communityLoaded(communityId));
    });
  };
}
