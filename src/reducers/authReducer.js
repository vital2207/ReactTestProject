import {
  AUTHORIZATION_SUCCESS,
  AUTHORIZATION_PENDING,
  AUTHORIZATION_FAIL,
  SIGN_OUT
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false,
        error: ""
      };
    case AUTHORIZATION_PENDING:
      return {
        ...state,
        loading: true
      };
    case AUTHORIZATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: ""
      };
    default:
      return state;
  }
}
