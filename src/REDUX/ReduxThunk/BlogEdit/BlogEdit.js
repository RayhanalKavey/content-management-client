import { EDIT_BLOG } from "../../actionTypes/actionTypes";

export const BlogEdit = (newBlog, ID) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `${process.env.REACT_APP_api_url}/blog-edit/${ID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      }
    );
    const updatedData = await res.json();
    console.log(updatedData);
    if (updatedData?.acknowledged) {
      dispatch({ type: EDIT_BLOG, payload: updatedData });
    }
  };
};
