import {
  FETCHING_ERROR,
  FETCHING_START,
  FETCHING_SUCCESS,
} from "../actionTypes/actionTypes";

const initialState = { loading: false, error: false, blogs: [] };

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return { ...state, loading: true };

    case FETCHING_SUCCESS:
      return { ...state, loading: false, blogs: [...action?.payload] };
    case FETCHING_ERROR:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
