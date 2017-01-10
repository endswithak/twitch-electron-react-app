// @flow
import {
  TMI_SAY_SUCCESS,
  TMI_SAY_ERROR,
  TMI_SAY_LOADING,
  TMI_SAY_LOADED
} from '../../actions/tmi/say';

const initialState = {
  loading: true,
  error: null
}

export default function tmiSay(state = initialState, action) {
  switch (action.type) {
    case TMI_SAY_SUCCESS:
      return {...state,
        error: null
      }
    case TMI_SAY_ERROR:
      return {...state,
        error: action.error
      }
    case TMI_SAY_LOADING:
      return {...state,
        loading: true
      }
    case TMI_SAY_LOADED:
      return {...state,
        loading: false
      }
    default:
      return state;
  }
}
