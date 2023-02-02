import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BlogDelete } from "../../REDUX/ReduxThunk/BlogDelete/BlogDelete";
import DetailsModal from "../DetailsModal/DetailsModal";

const BlogCard = () => {
  const [details, setDetails] = useState();

  const handleDetails = (blog) => {
    setDetails(blog);
  };
  const state = useSelector((state) => state?.blogs);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap gap-5">
      {state?.map((blog) => (
        <div
          key={blog?._id}
          className="card card-compact w-96 bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">{blog?.title}</h2>
            <p>{blog?.body?.slice(1, 130)}...</p>
            <div className="card-actions justify-end">
              <Link
                to={"/edit-blog"}
                state={blog}
                className="btn btn-xs btn-success"
              >
                {" "}
                Edit
              </Link>

              <button
                className="btn btn-xs btn-error"
                onClick={() => dispatch(BlogDelete(blog?._id))}
              >
                Delete
              </button>

              <label
                htmlFor="blog-modal"
                className="btn  btn-primary btn-xs"
                onClick={() => handleDetails(blog)}
              >
                read more
              </label>
              <DetailsModal details={details}></DetailsModal>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
