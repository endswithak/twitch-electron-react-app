// @flow
import { BACK_BUTTON_ACTIVE, BACK_BUTTON_INACTIVE, INCREASE_BACK_BUTTON_HISTORY, DECREASE_BACK_BUTTON_HISTORY, BACK_BUTTON_WILL_INCREASE, BACK_BUTTON_WILL_DECREASE } from '../actions/backButton';

export default function backButton(state = {active: false, buttonHistory: 0, willIncrease: true, willDecrease: false}, action) {
  switch (action.type) {
    case BACK_BUTTON_ACTIVE:
      return {...state,
        active: true
      };
    case BACK_BUTTON_INACTIVE:
      return {...state,
        active: false
      };
    case INCREASE_BACK_BUTTON_HISTORY:
      return {...state,
        buttonHistory: state.buttonHistory + 1
      };
    case DECREASE_BACK_BUTTON_HISTORY:
      return {...state,
        buttonHistory: state.buttonHistory - 1
      };
    case BACK_BUTTON_WILL_INCREASE:
      return {...state,
        willIncrease: action.bool
      };
    case BACK_BUTTON_WILL_DECREASE:
      return {...state,
        willDecrease: action.bool
      };
    default:
      return state;
  }
}
