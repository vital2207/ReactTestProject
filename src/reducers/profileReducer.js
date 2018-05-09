import {
  GET_CURRENT_PROFILE,
  GET_CURRENT_PROFILE_FAIL,
  GET_CURRENT_PROFILE_PENDING,
  CLEAR_CURRENT_PROFILE
} from "../actions/types";

const initialState = {
  profile: {},
  loading: false,
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case GET_CURRENT_PROFILE_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_CURRENT_PROFILE_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: {},
        error: ""
      };

    default:
      return state;
  }
}
