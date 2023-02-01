import {
  ADD_BLOG,
  DELETE_BLOG,
  FETCHING_SUCCESS,
  LOAD_BLOG,
} from "../actionTypes/actionTypes";

const fetchingSuccess = (data) => {
  return { type: FETCHING_SUCCESS, payload: data };
};

export default fetchingSuccess;

export const loadBlog = (data) => {
  return {
    type: LOAD_BLOG,
    payload: data,
  };
};
export const addBlog = (data) => {
  return {
    type: ADD_BLOG,
    payload: data,
  };
};
export const deleteBlog = (data) => {
  return {
    type: DELETE_BLOG,
    payload: data,
  };
};
