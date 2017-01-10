export const FORWARD_BUTTON_ACTIVE = 'FORWARD_BUTTON_ACTIVE';
export const FORWARD_BUTTON_INACTIVE = 'FORWARD_BUTTON_INACTIVE';
export const INCREASE_FORWARD_BUTTON_HISTORY = 'INCREASE_FORWARD_BUTTON_HISTORY';
export const DECREASE_FORWARD_BUTTON_HISTORY = 'DECREASE_HISTORY';
export const RESET_FORWARD_BUTTON_HISTORY = 'RESET_FORWARD_BUTTON_HISTORY';
export const FORWARD_BUTTON_WILL_INCREASE = 'FORWARD_BUTTON_WILL_INCREASE';
export const FORWARD_BUTTON_WILL_DECREASE = 'FORWARD_BUTTON_WILL_DECREASE';

export function forwardButtonActive() {
  return {
    type: FORWARD_BUTTON_ACTIVE
  };
}

export function forwardButtonInactive() {
  return {
    type: FORWARD_BUTTON_INACTIVE
  };
}

export function increaseForwardButtonHistory() {
  return {
    type: INCREASE_FORWARD_BUTTON_HISTORY
  };
}

export function decreaseForwardButtonHistory() {
  return {
    type: DECREASE_FORWARD_BUTTON_HISTORY
  };
}

export function resetForwardButtonHistory() {
  return {
    type: RESET_FORWARD_BUTTON_HISTORY
  };
}

export function forwardButtonWillIncrease(bool) {
  return {
    type: FORWARD_BUTTON_WILL_INCREASE,
    bool
  };
}

export function forwardButtonWillDecrease(bool) {
  return {
    type: FORWARD_BUTTON_WILL_DECREASE,
    bool
  };
}
