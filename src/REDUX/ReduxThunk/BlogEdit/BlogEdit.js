import { EDIT_BLOG } from "../../actionTypes/actionTypes";

export const BlogEdit = (blog) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `${process.env.REACT_APP_api_url}/blog-delete/${blog?._id}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(blog),
      }
    );
    const data = await res.json();
    if (data.acknowledge) {
      dispatch({ type: EDIT_BLOG, payload: blog?._id });
    }
  };
};
