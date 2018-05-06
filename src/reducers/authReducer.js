import {
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_FAIL,
  SIGN_OUT,
  GET_CURRENT_USER
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  errors: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case AUTHORIZATION_FAIL:
      return {
        ...state,
        errors: action.payload
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        user: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
}
