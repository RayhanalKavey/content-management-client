import {
  ADD_BLOG,
  DELETE_BLOG,
  EDIT_BLOG,
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
    case ADD_BLOG:
      return {
        ...state,
        loading: false,
        blogs: [...state?.blogs, action?.payload],
      };
    case EDIT_BLOG:
      return {
        ...state,
        loading: false,
        // blogs: _id,
      };
    case DELETE_BLOG:
      return {
        ...state,
        loading: false,
        blogs: state?.blogs?.filter((b) => b._id !== action?.payload),
      };

    default:
      return state;
  }
};
