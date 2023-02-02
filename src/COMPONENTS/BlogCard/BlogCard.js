import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BlogDelete } from "../../REDUX/ReduxThunk/BlogDelete/BlogDelete";
import { BlogEdit } from "../../REDUX/ReduxThunk/BlogEdit/BlogEdit";
import EditBlogModal from "../EditBlog/EditBlogModal";

export function name(params) {}
const BlogCard = () => {
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
            <h2 className="card-title">${blog?.title}</h2>
            <p>${blog?.body?.slice(1, 100)}...</p>
            <div className="card-actions justify-end">
              <label htmlFor="edit-modal" className="btn btn-xs btn-success">
                Edit
              </label>

              <button
                className="btn btn-xs btn-error"
                onClick={() => dispatch(BlogDelete(blog?._id))}
              >
                Delete
              </button>

              <label htmlFor="blog-modal" className="btn  btn-primary btn-xs">
                read more
              </label>
            </div>
          </div>
          <EditBlogModal />
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
