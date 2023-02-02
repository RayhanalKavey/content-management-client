import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { DELETE_BLOG } from "../../actionTypes/actionTypes";

export const BlogDelete = (ID) => {
  // const navigate = useNavigate();
  console.log(ID);
  return async (dispatch, getState) => {
    const res = await fetch(
      `${process.env.REACT_APP_api_url}/blog-delete/${ID}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data?.acknowledged);
    if (data?.acknowledged) {
      // navigate("/");
      // toast.success("BLOG deleted successfully!!");

      dispatch({ type: DELETE_BLOG, payload: ID });
    }
  };
};
