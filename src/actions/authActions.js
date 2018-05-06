import {
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAIL,
  SIGN_OUT,
  GET_CURRENT_USER
} from "./types";
import { checkCredentials } from "../common/session";
export const loginUser = userData => {
  if (checkCredentials(userData)) {
    localStorage.setItem("auth", "true");
    localStorage.setItem("name", userData.name);
    localStorage.setItem("password", userData.password);
  } else {
    return {
      type: AUTHORIZATION_FAIL,
      payload: {
        error: "Неверный логин или пароль"
      }
    };
  }
  return {
    type: AUTHORIZATION_SUCCESS,
    payload: {
      name: userData.name
    }
  };
};
export const getCurrentUser = () => {
  if (localStorage.auth) {
    return {
      type: GET_CURRENT_USER,
      payload: {
        name: localStorage.name
      }
    };
  }
};
export const logoutUser = () => {
  return {
    type: SIGN_OUT
  };
};
