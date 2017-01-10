// @flow
import { FORWARD_BUTTON_ACTIVE, FORWARD_BUTTON_INACTIVE, INCREASE_FORWARD_BUTTON_HISTORY, DECREASE_FORWARD_BUTTON_HISTORY, RESET_FORWARD_BUTTON_HISTORY, FORWARD_BUTTON_WILL_INCREASE, FORWARD_BUTTON_WILL_DECREASE } from '../actions/forwardButton';

export default function forwardButton(state = {active: false, buttonHistory: 0, willIncrease: false, willDecrease: false}, action) {
  switch (action.type) {
    case FORWARD_BUTTON_ACTIVE:
      return {...state,
        active: true
      };
    case FORWARD_BUTTON_INACTIVE:
      return {...state,
        active: false
      };
    case INCREASE_FORWARD_BUTTON_HISTORY:
      return {...state,
        buttonHistory: state.buttonHistory + 1
      };
    case DECREASE_FORWARD_BUTTON_HISTORY:
      return {...state,
        buttonHistory: state.buttonHistory - 1
      };
    case RESET_FORWARD_BUTTON_HISTORY:
      return {...state,
        buttonHistory: 0
      };
    case FORWARD_BUTTON_WILL_INCREASE:
      return {...state,
        willIncrease: action.bool
      };
    case FORWARD_BUTTON_WILL_DECREASE:
      return {...state,
        willDecrease: action.bool
      };
    default:
      return state;
  }
}
