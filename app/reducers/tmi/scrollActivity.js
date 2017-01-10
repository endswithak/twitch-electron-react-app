// @flow
import { CHAT_USER_SCROLL, CHAT_SCROLL_HEIGHT } from '../../actions/tmi/scrollActivity';

export default function scrollActivity(state: Object = {userscroll: false}, action: Object) {
  switch (action.type) {
    case CHAT_USER_SCROLL:
      return {...state,
        userscroll: true
      }
    case CHAT_SCROLL_HEIGHT:
      return {...state,
        userscroll: false
      }
    default:
      return state;
  }
}
