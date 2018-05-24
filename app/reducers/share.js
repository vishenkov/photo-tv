import {
  ADD_PHOTO_TO_SHARE,
  ADD_ALL_PHOTOS_TO_SHARE,
  REMOVE_PHOTO_FROM_SHARE,
  REMOVE_ALL_PHOTOS_FROM_SHARE,
} from '../actions/share';

const defaultState = [];

export default function share(state = defaultState, action) {
  switch (action.type) {
    case ADD_PHOTO_TO_SHARE:
      return [...state, action.index];

    case ADD_ALL_PHOTOS_TO_SHARE:
      return Array(action.count).fill(0).map((value, index) => index);

    case REMOVE_PHOTO_FROM_SHARE:
      return state.filter(index => index !== action.index);

    case REMOVE_ALL_PHOTOS_FROM_SHARE:
      return [];

    default:
      return state;
  }
}
