import tmi from 'tmi.js';

let tmiClient;

export const TMI_STARTED_LOADING = 'TMI_STARTED_LOADING';
export const TMI_ENDED_LOADING = 'TMI_ENDED_LOADING';
export const TMI_CONNECTING = 'TMI_CONNECTING';
export const TMI_CONNECTED = 'TMI_CONNECTED';
export const TMI_CONNECTED_SUCCESS = 'TMI_CONNECTED_SUCCESS';
export const TMI_CONNECTED_ERROR = 'TMI_CONNECTED_ERROR';
export const TMI_DISCONNECTED = 'TMI_DISCONNECTED';
export const TMI_CHAT_MESSAGE = 'TMI_CHAT_MESSAGE';
export const TMI_DISCONNECTED_SUCCESS = 'TMI_DISCONNECT_SUCCESS';
export const TMI_DISCONNECTED_ERROR = 'TMI_DISCONNECT_ERROR';
export const TMI_EMOTE_ONLY_ENABLED = 'TMI_EMOTE_ONLY_ENABLED';
export const TMI_EMOTE_ONLY_DISABLED = 'TMI_EMOTE_ONLY_DISABLED';
export const TMI_SUB_ONLY_ENABLED = 'TMI_SUB_ONLY_ENABLED';
export const TMI_SUB_ONLY_DISABLED = 'TMI_SUB_ONLY_DISABLED';

export function tmiStartedLoading() {
  return {
    type: TMI_STARTED_LOADING,
  };
}

export function tmiEndedLoading() {
  return {
    type: TMI_ENDED_LOADING,
  };
}

export function tmiConnecting() {
  return {
    type: TMI_CONNECTING,
  };
}

export function tmiConnected() {
  return {
    type: TMI_CONNECTED,
  };
}

export function tmiConnectedSuccess(status) {
  return {
    type: TMI_CONNECTED_SUCCESS,
    status
  };
}

export function tmiConnectedError(error) {
  return {
    type: TMI_CONNECTED_ERROR,
    error
  };
}

export function tmiDisconnected(reason) {
  return {
    type: TMI_DISCONNECTED,
    reason
  };
}

export function tmiDisconnectedSuccess(status) {
  return {
    type: TMI_DISCONNECTED_SUCCESS,
    status
  };
}

export function tmiDisconnectedError(error) {
  return {
    type: TMI_DISCONNECTED_ERROR,
    error
  };
}

export function tmiChatMessage(userstate, message) {
  return {
    type: TMI_CHAT_MESSAGE,
    userstate,
    message
  };
}

export function tmiEmoteOnlyEnabled() {
  return {
    type: TMI_EMOTE_ONLY_ENABLED,
  };
}

export function tmiEmoteOnlyDisabled() {
  return {
    type: TMI_EMOTE_ONLY_DISABLED,
  };
}

export function tmiSubOnlyEnabled() {
  return {
    type: TMI_SUB_ONLY_ENABLED,
  };
}

export function tmiSubOnlyDisabled() {
  return {
    type: TMI_SUB_ONLY_DISABLED,
  };
}


export function tmiConnect(channelName, identity) {
  return (dispatch) => {

    let options = {
      options: {
        debug: false,
        clientId: 'vjj4prwwzrdge0yiigbik2e3ub7foe'
      },
      channels: [channelName]
    };

    if (identity) {
      options.identity = {
        username: identity.username,
        password: `oauth:${identity.token}`
      }
    }

    tmiClient = new tmi.client(options);

    dispatch(tmiStartedLoading());

    tmiClient.connect().then(data => {
      dispatch(tmiConnectedSuccess(data));
    }).catch(error => {
      dispatch(tmiConnectedError(error));
    });

    tmiClient.on("connecting", (address, port) => {
      dispatch(tmiConnecting());
      dispatch(tmiEndedLoading());
    });

    tmiClient.on("emoteonly", (channel, enabled) => {
      enabled ? dispatch(tmiEmoteOnlyEnabled()) : dispatch(tmiEmoteOnlyDisabled());
    });

    tmiClient.on("subscribers", function (channel, enabled) {
      enabled ? dispatch(tmiSubOnlyEnabled()) : dispatch(tmiSubOnlyDisabled());
    });

    tmiClient.on("disconnected", (reason) => {
      dispatch(tmiDisconnected(reason));
    });

    tmiClient.on("connected", (address, port) => {
      dispatch(tmiConnected());
    });

    tmiClient.on("chat", (channel, userstate, message, self) => {
      dispatch(tmiChatMessage(userstate, message));
    });

  };
}

export function tmiDisconnect() {
  return (dispatch) => {
    tmiClient.disconnect().then(status => {
      dispatch(tmiDisconnectedSuccess(status));
    }).catch(error => {
      dispatch(tmiDisconnectedError(error));
    });
  }
}

export function getClient() {
  return tmiClient;
}
