import Twitch from 'twitch-sdk';

export const GET_COMMUNITY_STREAMS_SUCCESS = 'GET_COMMUNITY_STREAMS_SUCCESS';
export const GET_COMMUNITY_STREAMS_ERROR = 'GET_COMMUNITY_STREAMS_ERROR';
export const COMMUNITY_STREAMS_LOADING = 'COMMUNITY_STREAMS_LOADING';
export const COMMUNITY_STREAMS_LOADED = 'COMMUNITY_STREAMS_LOADED';
export const MORE_COMMUNITY_STREAMS_SUCCESS = 'MORE_COMMUNITY_STREAMS_SUCCESS';
export const MORE_COMMUNITY_STREAMS_ERROR = 'MORE_COMMUNITY_STREAMS_ERROR';
export const MORE_COMMUNITY_STREAMS_LOADING = 'MORE_COMMUNITY_STREAMS_LOADING';
export const MORE_COMMUNITY_STREAMS_LOADED = 'MORE_COMMUNITY_STREAMS_LOADED';

export function getCommunityStreamsSuccess(streams, limit, offset, communityId, total) {
  return {
    type: GET_COMMUNITY_STREAMS_SUCCESS,
    streams,
    limit,
    offset,
    communityId,
    total,
    receivedAt: Date.now()
  };
}

export function getCommunityStreamsError(error, communityId) {
  return {
    type: GET_COMMUNITY_STREAMS_ERROR,
    error,
    communityId
  };
}

export function communityStreamsLoading(communityId) {
  return {
    type: COMMUNITY_STREAMS_LOADING,
    communityId
  };
}

export function communityStreamsLoaded(communityId) {
  return {
    type: COMMUNITY_STREAMS_LOADED,
    communityId
  };
}

export function moreCommunityStreamsSuccess(streams, limit, offset, communityId, total) {
  return {
    type: MORE_COMMUNITY_STREAMS_SUCCESS,
    streams,
    limit,
    offset,
    total,
    communityId
  };
}

export function moreCommunityStreamsError(error, communityId) {
  return {
    type: MORE_COMMUNITY_STREAMS_ERROR,
    error,
    communityId
  };
}

export function moreCommunityStreamsLoading(communityId) {
  return {
    type: MORE_COMMUNITY_STREAMS_LOADING,
    communityId
  };
}

export function moreCommunityStreamsLoaded(communityId) {
  return {
    type: MORE_COMMUNITY_STREAMS_LOADED,
    communityId
  };
}

export function getCommunityStreams(limit, offset, communityId) {
  return (dispatch) => {
    dispatch(communityStreamsLoading(communityId));
    Twitch.api(
      {
        method: 'streams',
        params: {
          limit,
          offset,
          community_id: communityId,
          api_version: 5
        }
      },
      (error, streams) => {
        if (error) {
          dispatch(getCommunityStreamsError(error, communityId));
        } else {
          dispatch(getCommunityStreamsSuccess(streams.streams, limit, offset, communityId, streams._total))
        }
        dispatch(communityStreamsLoaded(communityId));
      }
    );
  };
}

export function shouldGetCommunityStreams(state, communityId) {
  const communityStreams = state.twitchCommunityStreams[communityId];
  var streams = null;
  if (communityStreams) {
    streams = communityStreams.streams;
  }
  const fetchLife = streams ? state.twitchCommunityStreams[communityId].receivedAt : null;
  const currentTime = Date.now();
  if ((!communityStreams || (fetchLife && currentTime - fetchLife >= 60000)) || (streams && streams.length === 0)) {
    return true;
  } else {
    return false;
  }
}

export function getCommunityStreamsIfNeeded(limit, offset, community_id) {
  return (dispatch, getState) => {
    if (shouldGetCommunityStreams(getState(), community_id)) {
      return dispatch(getCommunityStreams(limit, offset, community_id));
    }
  }
}

export function moreCommunityStreams(community_id) {
  return (dispatch, getState) => {
    dispatch(moreCommunityStreamsLoading(community_id));
    const nextLimit = getState().twitchCommunityStreams[community_id].limit;
    const nextOffset = getState().twitchCommunityStreams[community_id].nextOffset;
    Twitch.api(
      {
        method: 'streams',
        params: {
          limit: nextLimit,
          offset: nextOffset,
          community_id: community_id,
          api_version: 5
        }
      },
      (error, streams) => {
        if (error) {
          dispatch(moreCommunityStreamsError(error, community_id));
        } else {
          dispatch(moreCommunityStreamsSuccess(streams.streams, nextLimit, nextOffset, community_id, streams._total))
        }
        dispatch(moreCommunityStreamsLoaded(community_id));
      }
    );
  };
}
