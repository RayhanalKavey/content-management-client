import { FETCHING_SUCCESS } from "../actionTypes/actionTypes";

const fetchingSuccess = (data) => {
  return { type: FETCHING_SUCCESS, payload: data };
};

export default fetchingSuccess;
