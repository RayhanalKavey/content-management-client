import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { BlogEdit } from "../../REDUX/ReduxThunk/BlogEdit/BlogEdit";

const EditBlogForm = () => {
  let { state } = useLocation();

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
  
    dispatch(BlogEdit(blog, state?._id));
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
          defaultValue={state?.title}
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
          defaultValue={state?.body}
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

export default EditBlogForm;
