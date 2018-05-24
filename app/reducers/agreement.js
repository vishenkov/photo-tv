import {
  SET_AGREEMENT,
} from '../actions/agreement';

export default function agreement(state = false, action) {
  switch (action.type) {
    case SET_AGREEMENT:
      return action.value || false;
    default:
      return state;
  }
}
