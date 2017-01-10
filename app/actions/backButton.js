export const BACK_BUTTON_ACTIVE = 'BACK_BUTTON_ACTIVE';
export const BACK_BUTTON_INACTIVE = 'BACK_BUTTON_INACTIVE';
export const INCREASE_BACK_BUTTON_HISTORY = 'INCREASE_BACK_BUTTON_HISTORY';
export const DECREASE_BACK_BUTTON_HISTORY = 'DECREASE_BACK_BUTTON_HISTORY';
export const BACK_BUTTON_WILL_INCREASE = 'BACK_BUTTON_WILL_INCREASE';
export const BACK_BUTTON_WILL_DECREASE = 'BACK_BUTTON_WILL_DECREASE';

export function backButtonActive() {
  return {
    type: BACK_BUTTON_ACTIVE
  };
}

export function backButtonInactive() {
  return {
    type: BACK_BUTTON_INACTIVE
  };
}

export function increaseBackButtonHistory() {
  return {
    type: INCREASE_BACK_BUTTON_HISTORY
  };
}

export function decreaseBackButtonHistory() {
  return {
    type: DECREASE_BACK_BUTTON_HISTORY
  };
}

export function backButtonWillIncrease(bool) {
  return {
    type: BACK_BUTTON_WILL_INCREASE,
    bool
  };
}

export function backButtonWillDecrease(bool) {
  return {
    type: BACK_BUTTON_WILL_DECREASE,
    bool
  };
}
