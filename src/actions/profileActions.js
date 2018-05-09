import {
  GET_CURRENT_PROFILE,
  GET_CURRENT_PROFILE_FAIL,
  GET_CURRENT_PROFILE_PENDING,
  CLEAR_CURRENT_PROFILE
} from "./types";

export const getCurrentProfile = id => dispatch => {
  dispatch(getCurrentProfilePending());
  fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`)
    .then(res => res.json())
    .then(res => {
      if (res.status === "err") {
        throw Error(res.message);
      }

      localStorage.setItem("profile", JSON.stringify(res.data));
      dispatch({
        type: GET_CURRENT_PROFILE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_CURRENT_PROFILE_FAIL,
        payload: err.message
      })
    );
};

export const getCurrentProfilePending = () => {
  return {
    type: GET_CURRENT_PROFILE_PENDING
  };
};
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
