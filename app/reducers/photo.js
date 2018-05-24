import {
  ADD_PHOTO, RESET_PHOTOS
} from '../actions/photo';

const defaultState = {
  photos: [],
};

export default function photo(state = defaultState, action) {
  switch (action.type) {
    case ADD_PHOTO:
      return {
        ...state,
        photos: [...state.photos, action.uri],
      };
    case RESET_PHOTOS:
      return {
        ...state,
        photos: [],
      };
    default:
      return state;
  }
}
