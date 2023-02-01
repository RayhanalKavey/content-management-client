import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../../COMPONENTS/BlogCard/BlogCard";
import DetailsModal from "../../../COMPONENTS/DetailsModal/DetailsModal";
import fetchingSuccess from "../../../REDUX/ACTIONS/fetchingSuccess";
import {
  FETCHING_ERROR,
  FETCHING_START,
} from "../../../REDUX/actionTypes/actionTypes";

const Home = () => {
  const dispatch = useDispatch();
  // Get bill data from the database
  useEffect(() => {
    dispatch({ type: FETCHING_START });
    fetch(`${process.env.REACT_APP_api_url}/blog-post`)
      .then((res) => res.json())
      .then((data) => dispatch(fetchingSuccess(data)))
      .then((error) => dispatch({ type: FETCHING_ERROR }));
  }, [dispatch]);
  return (
    <div>
      <BlogCard></BlogCard>
      <DetailsModal></DetailsModal>
    </div>
  );
};

export default Home;
