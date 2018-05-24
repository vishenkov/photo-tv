export const ADD_PHOTO_TO_SHARE = 'ADD_PHOTO_TO_SHARE';
export const REMOVE_PHOTO_FROM_SHARE = 'REMOVE_PHOTO_FROM_SHARE';
export const ADD_ALL_PHOTOS_TO_SHARE = 'ADD_ALL_PHOTOS_TO_SHARE';
export const REMOVE_ALL_PHOTOS_FROM_SHARE = 'REMOVE_ALL_PHOTOS_FROM_SHARE';

function addPhotoToShare(index) {
  return {
    type: ADD_PHOTO_TO_SHARE,
    index,
  };
}

function removePhotoFromShare(index) {
  return {
    type: REMOVE_PHOTO_FROM_SHARE,
    index,
  };
}

export function togglePhotoShare(index) {
  return (dispatch, getState) => {
    const { share } = getState();
    console.log(share);
    if (!share.filter(existIndex => existIndex === index).length) {
      dispatch(addPhotoToShare(index));
    } else {
      dispatch(removePhotoFromShare(index));
    }
  };
}

export function addAllPhotosToShare(count) {
  return {
    type: ADD_ALL_PHOTOS_TO_SHARE,
    count,
  };
}

export function removeAllPhotosFromShare() {
  return {
    type: REMOVE_ALL_PHOTOS_FROM_SHARE,
  };
}
