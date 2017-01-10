// @flow
import {
  TMI_STARTED_LOADING,
  TMI_ENDED_LOADING,
  TMI_CONNECTING,
  TMI_CONNECTED,
  TMI_DISCONNECTED,
  TMI_CHAT_MESSAGE,
  TMI_DISCONNECTED_SUCCESS,
  TMI_DISCONNECTED_ERROR,
  TMI_CONNECTED_SUCCESS,
  TMI_CONNECTED_ERROR,
  TMI_EMOTE_ONLY_ENABLED,
  TMI_EMOTE_ONLY_DISABLED,
  TMI_SUB_ONLY_ENABLED,
  TMI_SUB_ONLY_DISABLED
} from '../../actions/tmi/chat';

const initialState = {
  loading: true,
  emoteonly: false,
  subonly: false,
  connecting: false,
  connected: false,
  disconnected: false,
  messages: []
}

export default function tmi(state = initialState, action) {
  switch (action.type) {
    case TMI_STARTED_LOADING:
      return {...state,
        loading: true
      }
    case TMI_ENDED_LOADING:
      return {...state,
        loading: false
      }
    case TMI_CONNECTING:
      return {...state,
        connecting: true,
        connected: true,
        disconnected: false
      }
    case TMI_CONNECTED:
      return {...state,
        connecting: false,
        connected: true,
        disconnected: false
      }
    case TMI_CONNECTED_SUCCESS:
      return {...state,
        status: action.status
      }
    case TMI_CONNECTED_ERROR:
      return {...state,
        status: action.error
      }
    case TMI_DISCONNECTED:
      return {...state,
        connecting: false,
        connected: false,
        disconnected: action.reason
      }
    case TMI_DISCONNECTED_SUCCESS:
      return {...state,
        connecting: false,
        connected: false,
        loading: true,
        disconnected: false,
        messages: []
      }
    case TMI_DISCONNECTED_ERROR:
      return {...state,
        connecting: false,
        connected: false,
        loading: true,
        disconnected: false,
        messages: []
      }
    case TMI_CHAT_MESSAGE:
      if (state.messages.length > 50) {
        state.messages.splice(0, 10);
      }
      return {...state,
        messages: [...state.messages, {
          userstate: action.userstate,
          message: action.message
        }]
      }
    case TMI_EMOTE_ONLY_ENABLED:
      return {...state,
        emoteonly: true,
      }
    case TMI_EMOTE_ONLY_DISABLED:
      return {...state,
        emoteonly: false,
      }
    case TMI_SUB_ONLY_ENABLED:
      return {...state,
        subonly: true,
      }
    case TMI_SUB_ONLY_DISABLED:
      return {...state,
        subonly: false,
      }
    default:
      return state;
  }
}
