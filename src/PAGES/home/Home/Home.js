import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../../COMPONENTS/BlogCard/BlogCard";
import DetailsModal from "../../../COMPONENTS/DetailsModal/DetailsModal";
import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESS,
} from "../../../REDUX/actionTypes/actionTypes";
import BlogFetch from "../../../REDUX/ReduxThunk/Blog/BlogFetch";

const Home = () => {
  const dispatch = useDispatch();
  // Get bill data from the database

  useEffect(() => {
    dispatch(BlogFetch());
  }, [dispatch]);
  return (
    <div>
      <BlogCard></BlogCard>
    </div>
  );
};

export default Home;
