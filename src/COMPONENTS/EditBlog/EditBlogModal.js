import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { BlogEdit } from "../../REDUX/ReduxThunk/BlogEdit/BlogEdit";

const EditBlogModal = ({ blog }) => {
  console.log(blog);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const submit = (formData) => {
    const { title, body } = formData;
    const newBlog = {
      title,
      body,
    };
    console.log("newBlog", newBlog);
    dispatch(BlogEdit(newBlog, blog?._id));
  };
  return (
    <>
      <div className="">
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
            defaultValue={blog?.title}
          />
          {/* erroR message */}
          {errors.title && (
            <p className="text-error mt-1"> {errors.title?.message}</p>
          )}
          {/*///  */}

          {/*///title  */}
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            {...register("body", {
              required: "description is required !",
            })}
            className="input input-bordered w-full "
            placeholder="Blog description"
            defaultValue={blog?.body}
          />
          {/* erroR body */}
          {errors.body && (
            <p className="text-error mt-1"> {errors.body?.message}</p>
          )}
          {/*  */}
          <div className="flex justify-between items-center w-full">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBlogModal;

{
  /* <h3 className="font-bold text-lg">
  Congratulations random Internet user!lll
</h3>
<p className="py-4">
  You've been selected for a chance to get one year of subscription to
  use Wikipedia for free!
</p>
<div className="modal-action">
  <label htmlFor="edit-modal" className="btn">
    Yay!
  </label>
</div> */
}
