import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ADD_BLOG } from "../../REDUX/actionTypes/actionTypes";
import BlogAdd from "../../REDUX/ReduxThunk/addBlog/BlogAdd";

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const { title, body } = data;
    const blog = {
      title,
      body,
    };
    console.log(blog);
    dispatch(BlogAdd(blog));
  };
  return (
    <div className="flex justify-center items-center h-full ">
      <form
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white"
        onSubmit={handleSubmit(submit)}
      >
        {/*///title  */}
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          {...register("title", { required: "Title is required !" })}
          className="input input-bordered w-full "
          placeholder="Blog title"
        />
        {/* erroR message */}
        {errors.title && (
          <p className="text-error mt-1"> {errors.title?.message}</p>
        )}
        {/*///  */}
        {/*///Description  */}
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          type="text"
          {...register("body", {
            required: "Description is required !",
          })}
          className="input input-bordered w-full "
          placeholder="Blog title"
        />
        {/* erroR message */}
        {errors.body && (
          <p className="text-error mt-1"> {errors.body?.message}</p>
        )}
        {/*///  */}

        <div className="flex justify-between items-center w-full">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
