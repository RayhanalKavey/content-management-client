import { ADD_BLOG, DELETE_BLOG, LOAD_BLOG } from "../actionTypes/actionTypes";

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
