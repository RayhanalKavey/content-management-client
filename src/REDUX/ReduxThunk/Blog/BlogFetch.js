import { FETCHING_SUCCESS } from "../../actionTypes/actionTypes";

const BlogFetch = () => {
  return async (dispatch, getState) => {
    const res = await fetch(`${process.env.REACT_APP_api_url}/blogs`);
    const data = await res.json();
    if (data.length) {
      dispatch({ type: FETCHING_SUCCESS, payload: data });
    }
  };
};

export default BlogFetch;
