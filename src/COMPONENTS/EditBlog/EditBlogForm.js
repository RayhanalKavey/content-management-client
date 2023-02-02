import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BlogEdit } from "../../REDUX/ReduxThunk/BlogEdit/BlogEdit";

const EditBlogForm = () => {
  const state = useSelector((state) => state?.blogs);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const { title, description } = data;
    const blog = {
      title,
      description,
    };
    console.log(blog);
    // dispatch(BlogEdit(blog));
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
          // defaultValue={blog?.title}
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
          {...register("description", {
            required: "Description is required !",
          })}
          className="input input-bordered w-full "
          placeholder="Blog title"
          // defaultValue={blog?.description}
        />
        {/* erroR message */}
        {errors.description && (
          <p className="text-error mt-1"> {errors.description?.message}</p>
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
