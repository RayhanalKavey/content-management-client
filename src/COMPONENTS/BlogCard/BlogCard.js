import React from "react";
import { useSelector } from "react-redux";

const BlogCard = () => {
  const state = useSelector((state) => state?.blogs);

  return (
    <div className="flex flex-wrap gap-5">
      {state?.map((blog, i) => (
        <div key={i} className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">${blog?.title}</h2>
            <p>${blog?.body?.slice(1, 100)}...</p>
            <div className="card-actions justify-end">
              <button className="btn btn-xs btn-success">Edit</button>
              <button className="btn btn-xs btn-error">Delete</button>
              <label htmlFor="blog-modal" className="btn  btn-primary btn-xs">
                read more
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
