import { GET_NEWS, GET_NEWS_PENDING, GET_NEWS_FAIL } from "../actions/types";

export const getNews = () => dispatch => {
  dispatch(getNewsPending());
  fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/news")
    .then(res => {
      if (!res.ok) {
        throw Error("Ошибка");
      }
      return res.json();
    })
    .then(res => {
      dispatch({
        type: GET_NEWS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_NEWS_FAIL,
        payload: err.message
      })
    );
};

export const getNewsPending = () => {
  return {
    type: GET_NEWS_PENDING
  };
};
