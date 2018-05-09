import {
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_PENDING,
  AUTHORIZATION_FAIL,
  SIGN_OUT
} from "./types";
export const loginUser = userData => dispatch => {
  dispatch(authPending());
  fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/validate", {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify({
      email: userData.email,
      password: userData.password
    })
  })
    .then(res => res.json())
    .then(res => {
      if (res.status === "err") {
        throw Error(res.message);
      }
      localStorage.setItem("email", userData.email);
      localStorage.setItem("password", userData.password);
      localStorage.setItem("user", JSON.stringify(res.data));
      return dispatch({
        type: AUTHORIZATION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: AUTHORIZATION_FAIL,
        payload: err.message
      })
    );
};
export const authPending = () => {
  return {
    type: AUTHORIZATION_PENDING
  };
};

export const logoutUser = () => {
  return {
    type: SIGN_OUT
  };
};
