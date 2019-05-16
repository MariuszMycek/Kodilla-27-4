export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//Adding comment
function addComment(text) {
  return {
    type: ADD_COMMENT,
    id: uuid.v4,
    text
  };
}

const boundAddComment = text => dispatch(addComment(text));

//Edit comment
function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  };
}

const boundEditComment = (id, text) => dispatch(editComment(id, text));

//Remove comment
function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  };
}

const boundRemoveComment = id => dispatch(removeComment(id));

//Thumb up comment
function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  };
}

const boundThumbUpComment = id => dispatch(thumbUpComment(id));

//Thumb down comment
function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  };
}

const boundThumbDownComment = id => dispatch(thumbDownComment(id));
