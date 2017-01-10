export const CHAT_USER_SCROLL = 'CHAT_USER_SCROLL';
export const CHAT_SCROLL_HEIGHT = 'CHAT_SCROLL_HEIGHT';

export function chatUserScroll() {
  return {
    type: CHAT_USER_SCROLL
  }
}

export function chatScrollHeight() {
  return {
    type: CHAT_SCROLL_HEIGHT
  }
}
