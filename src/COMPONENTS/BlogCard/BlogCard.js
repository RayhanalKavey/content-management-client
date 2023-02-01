import React from "react";
import { useSelector } from "react-redux";

const BlogCard = () => {
  const state = useSelector((state) => state?.posts);
  console.log(state);

  return (
    <div className="flex flex-wrap gap-5">
      {state.map((blog, i) => (
        <div key={i} className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">${blog?.title}</h2>
            <p>${blog?.body.slice(1, 150)}...</p>
            <div className="card-actions justify-end">
              <label htmlFor="blog-modal" className="btn  btn-primary">
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
