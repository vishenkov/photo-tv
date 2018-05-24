export const ADD_PHOTO = 'ADD_PHOTO';
export const RESET_PHOTOS = 'RESET_PHOTOS';

export function addPhoto(uri) {
  return {
    type: ADD_PHOTO,
    uri,
  };
}
export function resetPhotos() {
  return {
    type: RESET_PHOTOS,
  };
}
