import { GET_NEWS, GET_NEWS_PENDING, GET_NEWS_FAIL } from "../actions/types";

const initialState = {
  news: {},
  loading: false,
  error: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
        loading: false
      };
    case GET_NEWS_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_NEWS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
