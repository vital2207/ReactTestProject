import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import profileReducer from "../reducers/profileReducer";
import newsReducer from "../reducers/newsReducer";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  news: newsReducer
});
