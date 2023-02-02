import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ADD_BLOG } from "../../actionTypes/actionTypes";

const BlogAdd = (blog) => {
  // const navigate = useNavigate();
  return async (dispatch, getState) => {
    const res = await fetch(`${process.env.REACT_APP_api_url}/blog-add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blog),
    });
    const data = await res.json();
    if (data.acknowledged) {
      // navigate("/");
      // toast.success("BLOG added successfully!!");
      dispatch({ type: ADD_BLOG, payload: { ...blog, _id: data?.insertedId } });
    }
  };
};
export default BlogAdd;
